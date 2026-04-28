import { prisma } from '../../config/db';
import { Prisma } from '@prisma/client';

export class ResumeRepository {
  async create(data: Prisma.ResumeCreateInput) {
    return prisma.resume.create({ data });
  }

  async findById(id: string) {
    return prisma.resume.findUnique({
      where: { id },
      include: { versions: true, analysisReports: { orderBy: { createdAt: 'desc' }, take: 1 } },
    });
  }

  async findByUserId(userId: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [resumes, total] = await Promise.all([
      prisma.resume.findMany({
        where: { userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          analysisReports: {
            orderBy: { createdAt: 'desc' },
            take: 1,
            select: { overallScore: true, status: true },
          },
        },
      }),
      prisma.resume.count({ where: { userId } }),
    ]);
    return { resumes, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async updateStatus(id: string, status: string | any) {
    return prisma.resume.update({ where: { id }, data: { status } });
  }

  async delete(id: string) {
    return prisma.resume.delete({ where: { id } });
  }

  async createVersion(data: Prisma.ResumeVersionCreateInput) {
    return prisma.resumeVersion.create({ data });
  }

  async getVersionCount(resumeId: string): Promise<number> {
    return prisma.resumeVersion.count({ where: { resumeId } });
  }
}
