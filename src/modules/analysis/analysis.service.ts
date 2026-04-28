import { AnalysisRepository } from './analysis.repository';
import { ResumeRepository } from '../resume/resume.repository';
import { PdfParserService } from '../../lib/parser/pdfParser';
import { LlmService } from '../../lib/llm/llm.service';
import { NotFoundError, ForbiddenError, AppError } from '../../middleware/error.middleware';
import { logger } from '../../utils/logger';
import { prisma } from '../../config/db';

export interface AiAnalysisResult {
  overallScore: number;
  skillsScore: number;
  keywordsScore: number;
  experienceScore: number;
  formattingScore: number;
  extractedSkills: string[];
  suggestions: string[];
  feedback: {
    skills: string;
    keywords: string;
    experience: string;
    formatting: string;
  };
}

export class AnalysisService {
  private readonly analysisRepo: AnalysisRepository;
  private readonly resumeRepo: ResumeRepository;
  private readonly parser: PdfParserService;
  private readonly llm: LlmService;

  constructor() {
    this.analysisRepo = new AnalysisRepository();
    this.resumeRepo = new ResumeRepository();
    this.parser = new PdfParserService();
    this.llm = new LlmService();
  }

  /**
   * Full AI-powered analysis pipeline — called by BullMQ worker.
   * Sends the entire resume text to the configured LLM.
   * Falls back to a basic structural score if AI is not configured.
   */
  async analyzeResume(resumeId: string, filePath: string, userId: string) {
    logger.info(`Starting AI analysis for resume ${resumeId}`);

    await this.resumeRepo.updateStatus(resumeId, 'PROCESSING');

    const report = await this.analysisRepo.create({
      resume: { connect: { id: resumeId } },
      status: 'PROCESSING',
      overallScore: 0,
      rawText: '',
    });

    try {
      // ── 1. Extract raw text from PDF ───────────────────────────────────────
      const parsed = await this.parser.parse(filePath);

      // ── 2. Try AI analysis ─────────────────────────────────────────────────
      let analysisResult: AiAnalysisResult;

      const llmConfig = await this.llm.getUserConfig(userId);
      logger.info(`LLM config: ${JSON.stringify(llmConfig)}`);

      if (llmConfig?.isEnabled && llmConfig.encryptedApiKey) {
        analysisResult = await this.performAiAnalysis(userId, parsed.rawText, parsed.wordCount, parsed.pageCount);
      } else {
        // No AI configured — use a basic structural assessment (word count, page count, contact info)
        analysisResult = this.performBasicAnalysis(parsed.rawText, parsed.wordCount, parsed.pageCount);
      }

      // ── 3. Save skills to the resume_skills join table ─────────────────────
      if (analysisResult.extractedSkills.length > 0) {
        await this.analysisRepo.upsertResumeSkills(resumeId, analysisResult.extractedSkills);
      }

      // ── 4. Persist the full analysis report ───────────────────────────────
      await prisma.analysisReport.update({
        where: { id: report.id },
        data: {
          status: 'COMPLETED',
          overallScore: analysisResult.overallScore,
          rawText: parsed.rawText,
          skillsScore: analysisResult.skillsScore,
          keywordsScore: analysisResult.keywordsScore,
          experienceScore: analysisResult.experienceScore,
          formattingScore: analysisResult.formattingScore,
          extractedSkills: analysisResult.extractedSkills,
          feedback: JSON.stringify({
            skills: analysisResult.feedback.skills,
            keywords: analysisResult.feedback.keywords,
            experience: analysisResult.feedback.experience,
            formatting: analysisResult.feedback.formatting,
            suggestions: analysisResult.suggestions,
          }),
        },
      });

      // ── 5. Save AI suggestions to the suggestions table ───────────────────
      if (analysisResult.suggestions.length > 0) {
        await prisma.suggestion.createMany({
          data: analysisResult.suggestions.map((message, i) => ({
            resumeId,
            analysisReportId: report.id,
            category: 'AI',
            message,
            priority: i + 1,
            source: llmConfig?.isEnabled ? 'AI' : 'RULE_BASED',
          })),
          skipDuplicates: true,
        });
      }

      await this.resumeRepo.updateStatus(resumeId, 'COMPLETED');
      logger.info(`Analysis completed for resume ${resumeId}. Score: ${analysisResult.overallScore}`);
      return analysisResult;
    } catch (error) {
      await prisma.analysisReport.update({
        where: { id: report.id },
        data: { status: 'FAILED' },
      });
      await this.resumeRepo.updateStatus(resumeId, 'FAILED');
      logger.error(`Analysis failed for resume ${resumeId}`, { error });
      throw error;
    }
  }

  private async performAiAnalysis(
    userId: string,
    rawText: string,
    wordCount: number,
    pageCount: number
  ): Promise<AiAnalysisResult> {
    const systemPrompt = `You are an expert ATS (Applicant Tracking System) analyst and senior career coach with 15+ years of experience reviewing resumes across ALL industries — technology, finance, healthcare, marketing, legal, engineering, sales, education, and more.

Analyze the provided resume comprehensively and return a JSON object with EXACTLY these keys:
- "overallScore": integer 0–100 (overall ATS compatibility)
- "skillsScore": integer 0–100 (skills section quality and relevance)
- "keywordsScore": integer 0–100 (keyword density and ATS keyword optimization)
- "experienceScore": integer 0–100 (experience section quality, quantified achievements, impact)
- "formattingScore": integer 0–100 (structure, readability, length appropriateness)
- "extractedSkills": array of strings (ALL skills, tools, technologies, soft skills, certifications mentioned — be exhaustive)
- "suggestions": array of 5–8 specific, actionable improvement tips
- "feedback": object with keys "skills", "keywords", "experience", "formatting" — each a short paragraph explaining the score

Be industry-neutral: evaluate a nurse, lawyer, marketing manager, or software engineer with the same rigor.`;

    const userPrompt = `Please analyze this resume:

--- RESUME TEXT ---
${rawText.slice(0, 4000)}
--- END RESUME ---

Additional context:
- Word count: ${wordCount}
- Page count: ${pageCount}

Provide your complete ATS analysis. Return JSON only.`;

    let result;
    try {
      result = await this.llm.complete(userId, { systemPrompt, userPrompt, maxTokens: 1200 }, 'RESUME_ANALYSIS');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      logger.error('AI analysis LLM call failed', { error: msg });
      throw new AppError(`AI analysis failed: ${msg}`, 502);
    }

    if (!result) {
      throw new AppError('AI returned no response. Check your AI configuration.', 502);
    }

    return this.parseAiResponse(result.content, wordCount, pageCount);
  }

  private parseAiResponse(content: string, wordCount: number, pageCount: number): AiAnalysisResult {
    // Strip markdown fences
    const clean = content.replace(/```json\n?|\n?```/g, '').trim();
    let parsed: Record<string, unknown>;

    try {
      parsed = JSON.parse(clean);
    } catch {
      const match = clean.match(/\{[\s\S]*\}/);
      try {
        parsed = match ? JSON.parse(match[0]) : {};
      } catch {
        logger.warn('Failed to parse AI analysis response', { content: clean.slice(0, 300) });
        return this.performBasicAnalysis('', wordCount, pageCount);
      }
    }

    const toInt = (v: unknown, fallback: number) =>
      typeof v === 'number' && v >= 0 && v <= 100 ? Math.round(v) : fallback;

    const toStringArr = (v: unknown): string[] =>
      Array.isArray(v) ? v.filter((s): s is string => typeof s === 'string' && s.trim().length > 0) : [];

    const feedback = (parsed.feedback as Record<string, string>) ?? {};

    return {
      overallScore: toInt(parsed.overallScore, 50),
      skillsScore: toInt(parsed.skillsScore, 50),
      keywordsScore: toInt(parsed.keywordsScore, 50),
      experienceScore: toInt(parsed.experienceScore, 50),
      formattingScore: toInt(parsed.formattingScore, 50),
      extractedSkills: toStringArr(parsed.extractedSkills),
      suggestions: toStringArr(parsed.suggestions),
      feedback: {
        skills: typeof feedback.skills === 'string' ? feedback.skills : '',
        keywords: typeof feedback.keywords === 'string' ? feedback.keywords : '',
        experience: typeof feedback.experience === 'string' ? feedback.experience : '',
        formatting: typeof feedback.formatting === 'string' ? feedback.formatting : '',
      },
    };
  }

  /**
   * Basic structural analysis when AI is not configured.
   * Scores are based on word count, page count, and contact info detection — no fake AI.
   */
  private performBasicAnalysis(rawText: string, wordCount: number, pageCount: number): AiAnalysisResult {
    const wordScore = Math.min(100, Math.round((wordCount / 600) * 100));
    const pageScore = pageCount === 1 ? 100 : pageCount === 2 ? 80 : 50;
    const hasEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(rawText);
    const hasPhone = /(\+\d{1,3}[\s-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(rawText);
    const contactScore = (hasEmail ? 50 : 0) + (hasPhone ? 50 : 0);
    const overallScore = Math.round((wordScore + pageScore + contactScore) / 3);

    return {
      overallScore,
      skillsScore: 0,
      keywordsScore: 0,
      experienceScore: 0,
      formattingScore: pageScore,
      extractedSkills: [],
      suggestions: [
        'Configure an AI provider in AI Settings to get comprehensive ATS analysis and personalized suggestions.',
      ],
      feedback: {
        skills: 'AI not configured — enable AI to extract and evaluate skills.',
        keywords: 'AI not configured — enable AI for keyword optimization analysis.',
        experience: 'AI not configured — enable AI for experience evaluation.',
        formatting: `Resume is ${pageCount} page(s) with ${wordCount} words.`,
      },
    };
  }

  async getReportByResumeId(resumeId: string, userId: string) {
    const resume = await this.resumeRepo.findById(resumeId);
    if (!resume) throw new NotFoundError('Resume not found');
    if (resume.userId !== userId) throw new ForbiddenError('Access denied');
    return this.analysisRepo.findByResumeId(resumeId);
  }

  async getReportById(reportId: string, userId: string) {
    const report = await this.analysisRepo.findById(reportId);
    if (!report) throw new NotFoundError('Analysis report not found');
    if (report.resume.userId !== userId) throw new ForbiddenError('Access denied');
    return report;
  }
}
