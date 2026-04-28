import path from 'path';
import fs from 'fs';
import { ResumeRepository } from './resume.repository';
import { ResumeAnalysisQueue } from '../../queue/queue';
import { NotFoundError, ForbiddenError, AppError } from '../../middleware/error.middleware';
import { logger } from '../../utils/logger';

export class ResumeService {
  private readonly repository: ResumeRepository;
  private readonly queue: ResumeAnalysisQueue;

  constructor() {
    this.repository = new ResumeRepository();
    this.queue = new ResumeAnalysisQueue();
  }

  async uploadResume(
    userId: string,
    file: Express.Multer.File
  ) {
    // Create resume record
    const resume = await this.repository.create({
      user: { connect: { id: userId } },
      originalName: file.originalname,
      fileName: file.filename,
      filePath: file.path,
      mimeType: file.mimetype,
      fileSize: file.size,
      status: 'PENDING',
    });

    // Create first version
    const versionCount = await this.repository.getVersionCount(resume.id);
    await this.repository.createVersion({
      resume: { connect: { id: resume.id } },
      version: versionCount + 1,
      fileName: file.filename,
      filePath: file.path,
    });

    // Enqueue for async analysis
    await this.queue.addAnalysisJob({
      resumeId: resume.id,
      userId,
      filePath: file.path,
    });

    logger.info(`Resume ${resume.id} uploaded and queued for analysis`);
    return resume;
  }

  async getResume(resumeId: string, userId: string) {
    const resume = await this.repository.findById(resumeId);
    if (!resume) throw new NotFoundError('Resume not found');
    if (resume.userId !== userId) throw new ForbiddenError('Access denied');
    return resume;
  }

  async getUserResumes(userId: string, page = 1, limit = 10) {
    return this.repository.findByUserId(userId, page, limit);
  }

  async deleteResume(resumeId: string, userId: string): Promise<void> {
    const resume = await this.repository.findById(resumeId);
    if (!resume) throw new NotFoundError('Resume not found');
    if (resume.userId !== userId) throw new ForbiddenError('Access denied');

    // Delete physical file
    const filePath = path.resolve(resume.filePath);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await this.repository.delete(resumeId);
    logger.info(`Resume ${resumeId} deleted`);
  }

  async getResumeStatus(resumeId: string, userId: string) {
    const resume = await this.repository.findById(resumeId);
    if (!resume) throw new NotFoundError('Resume not found');
    if (resume.userId !== userId) throw new ForbiddenError('Access denied');

    const latestReport = resume.analysisReports?.[0];
    return {
      resumeId: resume.id,
      status: resume.status,
      score: latestReport?.overallScore ?? null,
    };
  }
}
