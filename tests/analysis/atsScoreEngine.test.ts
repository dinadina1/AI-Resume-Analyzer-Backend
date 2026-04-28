import { AtsScoreEngine } from '../../src/modules/analysis/atsScoreEngine';

describe('AtsScoreEngine', () => {
  let engine: AtsScoreEngine;

  beforeEach(() => {
    engine = new AtsScoreEngine();
  });

  it('returns score between 0 and 100', () => {
    const result = engine.compute({
      rawText: 'John Doe john@email.com linkedin.com/in/johndoe React Node.js TypeScript 2020-2022 developed implemented',
      extractedSkills: ['react', 'node.js', 'typescript', 'postgresql', 'docker'],
      sections: { experience: 'Software Engineer 2020-2022' },
      wordCount: 350,
      pageCount: 1,
    });
    expect(result.overallScore).toBeGreaterThanOrEqual(0);
    expect(result.overallScore).toBeLessThanOrEqual(100);
  });

  it('scores high for well-formatted resume with many skills', () => {
    const skills = ['react', 'node.js', 'typescript', 'postgresql', 'docker', 'kubernetes', 'aws', 'git', 'jest', 'graphql', 'redis', 'python', 'go', 'linux', 'ci/cd'];
    const result = engine.compute({
      rawText: 'John Doe john@email.com linkedin.com/in/johndoe github.com/johndoe\ndeveloped implemented designed optimized delivered collaborated\n2018-2020 2020-2022 2022-present',
      extractedSkills: skills,
      sections: { experience: '5+ years of experience' },
      wordCount: 450,
      pageCount: 1,
    });
    expect(result.overallScore).toBeGreaterThan(60);
    expect(result.skillsScore.score).toBe(40);
  });

  it('scores low for empty resume', () => {
    const result = engine.compute({
      rawText: '',
      extractedSkills: [],
      sections: {},
      wordCount: 0,
      pageCount: 1,
    });
    expect(result.overallScore).toBeLessThan(30);
    expect(result.skillsScore.score).toBeLessThan(10);
  });

  it('section scores add up to overall score', () => {
    const result = engine.compute({
      rawText: 'developer React Node.js developed implemented john@test.com',
      extractedSkills: ['react', 'node.js'],
      sections: { experience: 'intern 2022-2023' },
      wordCount: 200,
      pageCount: 1,
    });
    const sectionsSum =
      result.skillsScore.score +
      result.keywordsScore.score +
      result.experienceScore.score +
      result.formattingScore.score;
    expect(result.overallScore).toBe(Math.min(Math.round(sectionsSum), 100));
  });
});
