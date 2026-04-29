import { prisma } from '../../config/db';
import { Prisma } from '@prisma/client';

export class AnalysisRepository {
  async create(data: Prisma.AnalysisReportCreateInput) {
    return prisma.analysisReport.create({ data });
  }

  async findByResumeId(resumeId: string) {
    return prisma.analysisReport.findMany({
      where: { resumeId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    return prisma.analysisReport.findUnique({
      where: { id },
      include: {
        resume: { select: { originalName: true, userId: true } },
        suggestions: true,
      },
    });
  }

  async updateStatus(id: string, status: string | any) {
    return prisma.analysisReport.update({ where: { id }, data: { status } });
  }

  async upsertResumeSkills(resumeId: string, skills: string[]) {
    // 1. Normalize + deduplicate
    const uniqueSkills = [...new Set(skills.map(s => s.trim().toLowerCase()))];

    // 2. Insert skills (ignore duplicates)
    await prisma.skill.createMany({
      data: uniqueSkills.map(name => ({ name })),
      skipDuplicates: true
    });

    // 3. Fetch all skills
    const savedSkills = await prisma.skill.findMany({
      where: {
        name: { in: uniqueSkills }
      }
    });

    // 4. Replace links (transaction = safer)
    await prisma.$transaction([
      prisma.resumeSkill.deleteMany({ where: { resumeId } }),
      prisma.resumeSkill.createMany({
        data: savedSkills.map(s => ({
          resumeId,
          skillId: s.id
        })),
        skipDuplicates: true
      })
    ]);

    return savedSkills;
  }

  // async upsertResumeSkills(resumeId: string, skills: string[]) {
  //   // Upsert skill records then link to resume
  //   const skillOps = skills.map((name) =>
  //     prisma.skill.upsert({
  //       where: { name },
  //       create: { name },
  //       update: {},
  //     })
  //   );
  //   const savedSkills = await Promise.all(skillOps);

  //   // Delete old links
  //   await prisma.resumeSkill.deleteMany({ where: { resumeId } });

  //   // Create new links
  //   await prisma.resumeSkill.createMany({
  //     data: savedSkills.map((s) => ({ resumeId, skillId: s.id })),
  //     skipDuplicates: true,
  //   });

  //   return savedSkills;
  // }
}
