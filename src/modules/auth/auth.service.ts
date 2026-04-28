import bcrypt from 'bcryptjs';
import { AuthRepository } from './auth.repository';
import { SignupDto, LoginDto, AuthTokens, AuthResponse } from './auth.types';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../../utils/token';
import {
  ConflictError,
  UnauthorizedError,
  NotFoundError,
} from '../../middleware/error.middleware';

export class AuthService {
  private readonly repository: AuthRepository;

  constructor() {
    this.repository = new AuthRepository();
  }

  async signup(dto: SignupDto): Promise<AuthResponse> {
    const existing = await this.repository.findUserByEmail(dto.email);
    if (existing) throw new ConflictError('An account with this email already exists');

    const passwordHash = await bcrypt.hash(dto.password, 12);

    const user = await this.repository.createUser({
      name: dto.name,
      email: dto.email,
      role: 'USER',
      credentials: {
        create: { passwordHash },
      },
    });

    const tokens = await this.generateAndStoreTokens(user.id, user.email, user.role);

    return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, tokens };
  }

  async login(dto: LoginDto): Promise<AuthResponse> {
    const user = await this.repository.findUserByEmail(dto.email);
    if (!user || !user.credentials) throw new UnauthorizedError('Invalid email or password');

    const isPasswordValid = await bcrypt.compare(dto.password, user.credentials.passwordHash);
    if (!isPasswordValid) throw new UnauthorizedError('Invalid email or password');

    const tokens = await this.generateAndStoreTokens(user.id, user.email, user.role);

    return {
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      tokens,
    };
  }

  async refreshTokens(oldRefreshToken: string): Promise<AuthTokens> {
    let payload: { userId: string; sessionId: string };

    try {
      payload = verifyRefreshToken(oldRefreshToken);
    } catch {
      throw new UnauthorizedError('Invalid or expired refresh token');
    }

    const session = await this.repository.findSession(oldRefreshToken);
    if (!session) throw new UnauthorizedError('Session not found or already revoked');

    if (new Date() > session.expiresAt) {
      await this.repository.deleteSession(session.id);
      throw new UnauthorizedError('Refresh token has expired. Please log in again');
    }

    const { user } = session;
    const newAccessToken = signAccessToken({ userId: user.id, email: user.email, role: user.role });
    const newRefreshToken = signRefreshToken({ userId: user.id, sessionId: payload.sessionId });

    await this.repository.updateSessionToken(session.id, newRefreshToken);

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  }

  async logout(userId: string, refreshToken?: string): Promise<void> {
    if (refreshToken) {
      const session = await this.repository.findSession(refreshToken);
      if (session) await this.repository.deleteSession(session.id);
    } else {
      await this.repository.deleteAllUserSessions(userId);
    }
  }

  async getMe(userId: string) {
    const user = await this.repository.findUserById(userId);
    if (!user) throw new NotFoundError('User not found');
    return { id: user.id, name: user.name, email: user.email, role: user.role };
  }

  private async generateAndStoreTokens(
    userId: string,
    email: string,
    role: string
  ): Promise<AuthTokens> {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const session = await this.repository.createSession({
      user: { connect: { id: userId } },
      refreshToken: 'temp', // Placeholder
      expiresAt,
    });

    const accessToken = signAccessToken({ userId, email, role });
    const refreshToken = signRefreshToken({ userId, sessionId: session.id });

    await this.repository.updateSessionToken(session.id, refreshToken);

    return { accessToken, refreshToken };
  }
}
