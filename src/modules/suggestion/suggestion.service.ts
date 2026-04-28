import { SuggestionRepository } from './suggestion.repository';
import { NotFoundError, ForbiddenError } from '../../middleware/error.middleware';
import { prisma } from '../../config/db';

export interface SuggestionItem {
  resumeId: string;
  category: string;
  message: string;
  priority: number;
  source: 'RULE_BASED' | 'AI';
}

export class SuggestionEngine {
  /**
   * Generates rule-based suggestions from ATS score feedback.
   */
  generateFromScore(
    resumeId: string,
    feedback: {
      skills: string;
      keywords: string;
      experience: string;
      formatting: string;
    },
    skillsScore: number,
    extractedSkills: string[]
  ): SuggestionItem[] {
    const suggestions: SuggestionItem[] = [];
    let priority = 1;

    // Skills suggestions
    if (skillsScore < 30) {
      suggestions.push({
        resumeId,
        category: 'SKILLS',
        message: feedback.skills,
        priority: priority++,
        source: 'RULE_BASED',
      });

      if (extractedSkills.length < 5) {
        suggestions.push({
          resumeId,
          category: 'SKILLS',
          message:
            'Add a dedicated "Technical Skills" section listing your tools, languages, and frameworks explicitly.',
          priority: priority++,
          source: 'RULE_BASED',
        });
      }
    }

    // Keywords suggestions
    suggestions.push({
      resumeId,
      category: 'KEYWORDS',
      message: feedback.keywords,
      priority: priority++,
      source: 'RULE_BASED',
    });

    // Experience suggestions
    suggestions.push({
      resumeId,
      category: 'EXPERIENCE',
      message: feedback.experience,
      priority: priority++,
      source: 'RULE_BASED',
    });

    // Formatting suggestions
    suggestions.push({
      resumeId,
      category: 'FORMATTING',
      message: feedback.formatting,
      priority: priority++,
      source: 'RULE_BASED',
    });

    // Universal best-practice suggestions
    suggestions.push(
      {
        resumeId,
        category: 'GENERAL',
        message: 'Quantify your achievements with numbers (e.g., "Improved load time by 40%").',
        priority: priority++,
        source: 'RULE_BASED',
      },
      {
        resumeId,
        category: 'GENERAL',
        message: 'Use consistent date formatting throughout your resume (e.g., Jan 2022 – Mar 2024).',
        priority: priority++,
        source: 'RULE_BASED',
      },
      {
        resumeId,
        category: 'GENERAL',
        message: 'Tailor your resume summary to match the target job description for higher ATS scores.',
        priority: priority++,
        source: 'RULE_BASED',
      }
    );

    return suggestions;
  }

  generateFromMissingSkills(resumeId: string, missingSkills: string[]): SuggestionItem[] {
    if (missingSkills.length === 0) return [];
    return [
      {
        resumeId,
        category: 'SKILLS',
        message: `Skills required by the job but missing from your resume: ${missingSkills.join(', ')}. Consider adding these or relevant equivalents.`,
        priority: 1,
        source: 'RULE_BASED',
      },
    ];
  }
}

export class SuggestionService {
  private readonly repo: SuggestionRepository;
  private readonly engine: SuggestionEngine;

  constructor() {
    this.repo = new SuggestionRepository();
    this.engine = new SuggestionEngine();
  }

  async generateAndSave(
    resumeId: string,
    feedback: { skills: string; keywords: string; experience: string; formatting: string },
    skillsScore: number,
    extractedSkills: string[]
  ) {
    // Clear old suggestions
    await this.repo.deleteByResumeId(resumeId);

    const items = this.engine.generateFromScore(resumeId, feedback, skillsScore, extractedSkills);

    await this.repo.createMany(
      items.map((item) => ({
        resumeId: item.resumeId,
        category: item.category,
        message: item.message,
        priority: item.priority,
        source: item.source,
      }))
    );

    return items;
  }

  async getSuggestionsByResume(resumeId: string, userId: string) {
    const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
    if (!resume) throw new NotFoundError('Resume not found');
    if (resume.userId !== userId) throw new ForbiddenError('Access denied');

    return this.repo.findByResumeId(resumeId);
  }
}
