import { Queue } from 'bullmq';
import { getRedisClient } from '../config/redis';
import { logger } from '../utils/logger';

export interface AnalysisJobData {
  resumeId: string;
  userId: string;
  filePath: string;
}

export const QUEUE_NAME = 'resume-analysis';

export class ResumeAnalysisQueue {
  private readonly queue: Queue<AnalysisJobData>;

  constructor() {
    this.queue = new Queue<AnalysisJobData>(QUEUE_NAME, {
      connection: getRedisClient(),
      defaultJobOptions: {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 5000, // 5s, 10s, 20s
        },
        removeOnComplete: { count: 100 },
        removeOnFail: { count: 50 },
      },
    });
  }

  async addAnalysisJob(data: AnalysisJobData): Promise<string | undefined> {
    const job = await this.queue.add('analyze', data, {
      jobId: `resume-${data.resumeId}`,
    });
    logger.info(`Job ${job.id} added to queue for resume ${data.resumeId}`);
    return job.id;
  }

  async getJobStatus(jobId: string) {
    const job = await this.queue.getJob(jobId);
    if (!job) return null;

    const state = await job.getState();
    return { id: job.id, state, progress: job.progress, data: job.data };
  }

  async close(): Promise<void> {
    await this.queue.close();
  }
}
