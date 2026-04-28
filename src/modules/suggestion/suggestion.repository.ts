import { prisma } from '../../config/db';
import { Prisma } from '@prisma/client';

export class SuggestionRepository {
  async createMany(data: Prisma.SuggestionCreateManyInput[]) {
    return prisma.suggestion.createMany({ data, skipDuplicates: true });
  }

  async findByResumeId(resumeId: string) {
    return prisma.suggestion.findMany({
      where: { resumeId },
      orderBy: [{ priority: 'asc' }, { createdAt: 'desc' }],
    });
  }

  async deleteByResumeId(resumeId: string) {
    return prisma.suggestion.deleteMany({ where: { resumeId } });
  }
}
