import { JobDescriptionRepository } from './jobDescription.repository';
import { LlmService } from '../../lib/llm/llm.service';
import { prisma } from '../../config/db';
import { logger } from '../../utils/logger';
import { AppError } from '../../middleware/error.middleware';

export interface JdMatchInput {
  resumeId: string;
  jdTitle: string;
  jdText: string;
  userId: string;
}

export interface JdMatchResult {
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  totalJdSkills: number;
  aiInsights: string[];
  analysisSource: 'AI';
}

export class JobDescriptionService {
  private readonly repo: JobDescriptionRepository;
  private readonly llm: LlmService;

  constructor() {
    this.repo = new JobDescriptionRepository();
    this.llm = new LlmService();
  }

  async matchResumeWithJd(input: JdMatchInput): Promise<JdMatchResult> {
    // ── 1. Require AI to be configured ────────────────────────────────────────
    const llmConfig = await this.llm.getUserConfig(input.userId);

    if (!llmConfig?.isEnabled || !llmConfig.encryptedApiKey) {
      throw new AppError(
        'AI is not configured. Please go to AI Settings and set up your model provider before running JD matching.',
        400
      );
    }

    // ── 2. Fetch resume text from latest completed analysis report ─────────────
    const latestReport = await prisma.analysisReport.findFirst({
      where: { resumeId: input.resumeId, status: 'COMPLETED' },
      orderBy: { createdAt: 'desc' },
    });

    const resumeText = latestReport?.rawText ?? '';

    if (!resumeText.trim()) {
      throw new AppError(
        'Resume analysis is not complete yet. Please wait for the ATS analysis to finish before running JD matching.',
        400
      );
    }

    // ── 3. AI does all the work — fully industry-agnostic ─────────────────────
    const systemPrompt = `You are an expert ATS (Applicant Tracking System) analyst, senior recruiter, and career coach with experience across ALL industries — technology, finance, healthcare, marketing, legal, engineering, education, and more.

Analyze the match between the provided resume and job description with expert precision.

Return a valid JSON object with EXACTLY these keys:
- "matchPercentage": integer 0–100 (ATS compatibility score, considering skills, experience, industry fit, keywords, seniority)
- "matchedSkills": array of strings (skills/qualifications from the JD that the candidate clearly has)
- "missingSkills": array of strings (important JD requirements the candidate lacks)
- "insights": array of 4–5 specific, actionable improvement tips (how to better target this role)

Be industry-aware: for a nurse applying to a nursing role, clinical skills matter more than technical skills. For a CFO role, financial acumen matters. Evaluate contextually.`;

    const userPrompt = `Job Title: ${input.jdTitle}

JOB DESCRIPTION:
${input.jdText.slice(0, 2500)}

CANDIDATE RESUME:
${resumeText.slice(0, 2500)}

Perform a comprehensive ATS compatibility analysis. Consider:
1. Skills and qualifications overlap
2. Experience level and years
3. Industry-specific requirements
4. Soft skills and leadership indicators
5. Education and certifications
6. Language and keyword alignment

Return JSON only — no markdown, no explanation outside the JSON.`;

    logger.info(
      `Running AI JD match for resume ${input.resumeId} via ${llmConfig.provider}:${llmConfig.model}`
    );

    let result;
    try {
      result = await this.llm.complete(
        input.userId,
        { systemPrompt, userPrompt, maxTokens: 900 },
        'JD_MATCH'
      );
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      logger.error('AI provider call failed during JD match', { error: msg });
      throw new AppError(
        `AI provider error: ${msg}. Check your API key and model in AI Settings.`,
        502
      );
    }

    if (!result) {
      throw new AppError(
        'AI analysis failed to return a response. Please check your API key and try again.',
        502
      );
    }

    // ── 4. Parse and validate AI response ────────────────────────────────────
    const parsed = this.safeParseJson<{
      matchPercentage?: unknown;
      matchedSkills?: unknown;
      missingSkills?: unknown;
      insights?: unknown;
    }>(result.content);

    const matchPercentage =
      typeof parsed.matchPercentage === 'number' &&
      parsed.matchPercentage >= 0 &&
      parsed.matchPercentage <= 100
        ? Math.round(parsed.matchPercentage)
        : 0;

    const matchedSkills = this.toStringArray(parsed.matchedSkills);
    const missingSkills = this.toStringArray(parsed.missingSkills);
    const aiInsights = this.toStringArray(parsed.insights);

    // ── 5. Persist JD and match result ────────────────────────────────────────
    const jd = await this.repo.create({
      user: { connect: { id: input.userId } },
      title: input.jdTitle,
      content: input.jdText,
      extractedSkills: [...matchedSkills, ...missingSkills],
    });

    await this.repo.createMatch({
      jobDescription: { connect: { id: jd.id } },
      resume: { connect: { id: input.resumeId } },
      matchPercentage,
      matchedSkills,
      missingSkills,
    });

    return {
      matchPercentage,
      matchedSkills,
      missingSkills,
      totalJdSkills: matchedSkills.length + missingSkills.length,
      aiInsights,
      analysisSource: 'AI',
    };
  }

  async getUserJds(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async getUserMatches(userId: string) {
    return this.repo.findMatchesByUser(userId);
  }

  private safeParseJson<T>(content: string): Partial<T> {
    // Strip markdown code fences (Gemini, Claude sometimes wrap output)
    const clean = content.replace(/```json\n?|\n?```/g, '').trim();
    try {
      return JSON.parse(clean) as T;
    } catch {
      // Try to extract first JSON object from text
      const match = clean.match(/\{[\s\S]*\}/);
      if (match) {
        try { return JSON.parse(match[0]) as T; } catch { /* fall through */ }
      }
      logger.warn('Failed to parse AI JSON response', { content: clean.slice(0, 200) });
      return {};
    }
  }

  private toStringArray(value: unknown): string[] {
    if (!Array.isArray(value)) return [];
    return value.filter((v): v is string => typeof v === 'string' && v.trim().length > 0);
  }
}
