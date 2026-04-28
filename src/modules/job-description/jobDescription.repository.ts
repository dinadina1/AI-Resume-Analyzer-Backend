import { prisma } from '../../config/db';
import { Prisma } from '../../generated/prisma';

export class JobDescriptionRepository {
  async create(data: Prisma.JobDescriptionCreateInput) {
    return prisma.jobDescription.create({ data });
  }

  async findById(id: string) {
    return prisma.jobDescription.findUnique({
      where: { id },
      include: { matches: { orderBy: { createdAt: 'desc' } } },
    });
  }

  async findByUserId(userId: string) {
    return prisma.jobDescription.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createMatch(data: Prisma.JdMatchCreateInput) {
    return prisma.jdMatch.create({ data });
  }

  async findMatchesByUser(userId: string) {
    return prisma.jdMatch.findMany({
      where: { jobDescription: { userId } },
      include: {
        jobDescription: { select: { id: true, title: true, content: true, createdAt: true } },
        resume: { select: { id: true, originalName: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findMatchById(matchId: string, userId: string) {
    return prisma.jdMatch.findFirst({
      where: { id: matchId, jobDescription: { userId } },
      include: {
        jobDescription: { select: { id: true, title: true, content: true, createdAt: true } },
        resume: { select: { id: true, originalName: true } },
      },
    });
  }
}
