import { Worker, Job } from 'bullmq';
import { getRedisClient } from '../config/redis';
import { QUEUE_NAME, AnalysisJobData } from './queue';
import { analyzeResumeJob } from './jobs/analyzeResume.job';
import { logger } from '../utils/logger';

export const resumeAnalysisWorker = new Worker<AnalysisJobData>(
  QUEUE_NAME,
  async (job: Job<AnalysisJobData>) => {
    logger.info(`Processing job ${job.id} for resume ${job.data.resumeId}`);
    await job.updateProgress(10);

    await analyzeResumeJob(job.data);

    await job.updateProgress(100);
    logger.info(`Job ${job.id} completed`);
  },
  {
    connection: getRedisClient(),
    concurrency: 3, // Process up to 3 jobs simultaneously
    limiter: {
      max: 10,
      duration: 60_000, // Max 10 jobs per minute
    },
  }
);

resumeAnalysisWorker.on('active', (job) => {
  logger.debug(`Job ${job.id} is now active`);
});

resumeAnalysisWorker.on('failed', (job, err) => {
  logger.error(`Job ${job?.id} failed on attempt ${job?.attemptsMade}`, {
    error: err.message,
    resumeId: job?.data?.resumeId,
  });
});
