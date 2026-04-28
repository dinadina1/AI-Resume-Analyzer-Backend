export interface ScoringInput {
  rawText: string;
  extractedSkills: string[];
  sections: Record<string, string>;
  wordCount: number;
  pageCount: number;
}

export interface SectionScore {
  score: number;
  maxScore: number;
  feedback: string;
}

export interface AtsScoreResult {
  overallScore: number;
  skillsScore: SectionScore;
  keywordsScore: SectionScore;
  experienceScore: SectionScore;
  formattingScore: SectionScore;
  extractedSkills: string[];
}

export class AtsScoreEngine {
  /**
   * ATS Score Breakdown:
   * Skills Match   → 40 pts
   * Keywords       → 30 pts
   * Experience     → 20 pts
   * Formatting     → 10 pts
   */
  compute(input: ScoringInput): AtsScoreResult {
    const skillsScore = this.scoreSkills(input.extractedSkills);
    const keywordsScore = this.scoreKeywords(input.rawText);
    const experienceScore = this.scoreExperience(input.sections.experience ?? '', input.rawText);
    const formattingScore = this.scoreFormatting(input);

    const overallScore = Math.round(
      skillsScore.score + keywordsScore.score + experienceScore.score + formattingScore.score
    );

    return {
      overallScore: Math.min(overallScore, 100),
      skillsScore,
      keywordsScore,
      experienceScore,
      formattingScore,
      extractedSkills: input.extractedSkills,
    };
  }

  private scoreSkills(skills: string[]): SectionScore {
    const maxScore = 40;
    const count = skills.length;

    let score: number;
    let feedback: string;

    if (count >= 15) {
      score = 40;
      feedback = 'Excellent skill coverage.';
    } else if (count >= 10) {
      score = 32;
      feedback = 'Good skill coverage. Consider adding more relevant technical skills.';
    } else if (count >= 6) {
      score = 22;
      feedback = 'Moderate skill set. Add more specific technical skills to improve this score.';
    } else if (count >= 3) {
      score = 12;
      feedback = 'Limited skills detected. Expand your skills section significantly.';
    } else {
      score = 4;
      feedback = 'Very few skills detected. Ensure your skills section is clearly labeled.';
    }

    return { score, maxScore, feedback };
  }

  private scoreKeywords(rawText: string): SectionScore {
    const maxScore = 30;
    const atsKeywords = [
      'developed', 'implemented', 'designed', 'built', 'managed', 'led', 'created',
      'optimized', 'improved', 'reduced', 'increased', 'delivered', 'collaborated',
      'architected', 'deployed', 'maintained', 'tested', 'automated', 'integrated',
      'mentored', 'coordinated', 'analyzed', 'monitored', 'resolved',
    ];

    const lowerText = rawText.toLowerCase();
    const foundKeywords = atsKeywords.filter((kw) => lowerText.includes(kw));
    const ratio = foundKeywords.length / atsKeywords.length;
    const score = Math.round(ratio * maxScore);

    const feedback =
      ratio >= 0.5
        ? 'Good use of action verbs and ATS keywords.'
        : `Consider using more action verbs. Found: ${foundKeywords.length}/${atsKeywords.length}`;

    return { score: Math.min(score, maxScore), maxScore, feedback };
  }

  private scoreExperience(experienceSection: string, fullText: string): SectionScore {
    const maxScore = 20;
    const lowerFull = fullText.toLowerCase();

    // Detect years of experience
    const yearPatterns = [
      /(\d+)\+?\s*years?\s+of\s+experience/i,
      /experience\s+of\s+(\d+)\+?\s*years?/i,
    ];

    let detectedYears = 0;
    for (const pattern of yearPatterns) {
      const match = fullText.match(pattern);
      if (match) {
        detectedYears = parseInt(match[1]);
        break;
      }
    }

    // Count job entries (rough heuristic: lines with years like 2020-2023)
    const jobEntries = (fullText.match(/\b(19|20)\d{2}\s*[-–]\s*((19|20)\d{2}|present|current)\b/gi) ?? []).length;

    let score: number;
    let feedback: string;

    if (detectedYears >= 3 || jobEntries >= 3) {
      score = 20;
      feedback = 'Strong experience section with clear work history.';
    } else if (jobEntries >= 2) {
      score = 14;
      feedback = 'Decent experience. Add more detail to each role (responsibilities and achievements).';
    } else if (jobEntries === 1 || experienceSection.length > 100) {
      score = 8;
      feedback = 'Limited experience entries. Include internships or projects as experience.';
    } else {
      score = 3;
      feedback = 'Experience section is missing or very thin. Add work history with dates.';
    }

    return { score, maxScore, feedback };
  }

  private scoreFormatting(input: ScoringInput): SectionScore {
    const maxScore = 10;
    let score = 0;
    const issues: string[] = [];

    // Word count check (ideal: 300–800 words)
    if (input.wordCount >= 300 && input.wordCount <= 800) {
      score += 3;
    } else {
      issues.push(input.wordCount < 300 ? 'Resume is too short.' : 'Resume is too long (aim for 1 page).');
    }

    // Page count check
    if (input.pageCount === 1) {
      score += 3;
    } else if (input.pageCount === 2) {
      score += 2;
      issues.push('Consider condensing to 1 page for early-career.');
    } else {
      issues.push('More than 2 pages is too long for most positions.');
    }

    // Has essential sections
    const hasContactInfo = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(input.rawText);
    if (hasContactInfo) score += 2;
    else issues.push('Email address not detected in resume.');

    // Has LinkedIn / GitHub
    if (/linkedin\.com|github\.com/i.test(input.rawText)) score += 2;
    else issues.push('Consider adding LinkedIn or GitHub profile links.');

    const feedback =
      issues.length === 0
        ? 'Great formatting and structure.'
        : `Formatting issues: ${issues.join(' ')}`;

    return { score: Math.min(score, maxScore), maxScore, feedback };
  }
}
