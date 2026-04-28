import { AnalysisJobData } from '../queue';
import { AnalysisService } from '../../modules/analysis/analysis.service';
import { logger } from '../../utils/logger';

const analysisService = new AnalysisService();

/**
 * BullMQ job handler — runs the full AI-powered resume analysis pipeline.
 * AnalysisService handles: PDF parsing → LLM call → score extraction → DB persistence.
 */
export async function analyzeResumeJob(data: AnalysisJobData): Promise<void> {
  const { resumeId, userId, filePath } = data;

  logger.info(`[Worker] Processing resume analysis job`, { resumeId, userId });

  await analysisService.analyzeResume(resumeId, filePath, userId);

  logger.info(`[Worker] Resume analysis job complete`, { resumeId });
}
