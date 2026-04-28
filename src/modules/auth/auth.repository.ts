import { prisma } from '../../config/db';
import { Prisma } from '../../generated/prisma';

export class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: { credentials: true },
    });
  }

  async findUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: { credentials: true },
    });
  }

  async createUser(data: Prisma.UserCreateInput) {
    return prisma.user.create({
      data,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });
  }

  async createSession(data: Prisma.SessionCreateInput) {
    return prisma.session.create({ data });
  }

  async findSession(token: string) {
    return prisma.session.findUnique({
      where: { refreshToken: token },
      include: { user: true },
    });
  }

  async deleteSession(sessionId: string) {
    return prisma.session.delete({ where: { id: sessionId } });
  }

  async deleteAllUserSessions(userId: string) {
    return prisma.session.deleteMany({ where: { userId } });
  }

  async updateSessionToken(sessionId: string, newToken: string) {
    return prisma.session.update({
      where: { id: sessionId },
      data: { refreshToken: newToken, updatedAt: new Date() },
    });
  }
}
