import { AuthService } from '../../src/modules/auth/auth.service';
import { AuthRepository } from '../../src/modules/auth/auth.repository';
import { ConflictError, UnauthorizedError } from '../../src/middleware/error.middleware';

jest.mock('../../src/modules/auth/auth.repository');
jest.mock('../../src/config/db', () => ({ prisma: {} }));

const MockedAuthRepository = AuthRepository as jest.MockedClass<typeof AuthRepository>;

describe('AuthService', () => {
  let service: AuthService;
  let mockRepo: jest.Mocked<AuthRepository>;

  beforeEach(() => {
    MockedAuthRepository.mockClear();
    service = new AuthService();
    mockRepo = MockedAuthRepository.mock.instances[0] as jest.Mocked<AuthRepository>;
  });

  describe('signup', () => {
    it('throws ConflictError if email already exists', async () => {
      mockRepo.findUserByEmail.mockResolvedValueOnce({ id: '1' } as any);
      await expect(
        service.signup({ name: 'Test', email: 'test@test.com', password: 'Test@1234' })
      ).rejects.toThrow(ConflictError);
    });

    it('creates user and returns auth response', async () => {
      mockRepo.findUserByEmail.mockResolvedValueOnce(null);
      mockRepo.createUser.mockResolvedValueOnce({
        id: 'uuid-1',
        name: 'Test',
        email: 'test@test.com',
        role: 'USER',
        createdAt: new Date(),
      } as any);
      mockRepo.createSession.mockResolvedValueOnce({ id: 'session-1' } as any);
      mockRepo.updateSessionToken.mockResolvedValueOnce({} as any);

      const result = await service.signup({
        name: 'Test',
        email: 'test@test.com',
        password: 'Test@1234',
      });

      expect(result.user.email).toBe('test@test.com');
      expect(result.tokens.accessToken).toBeDefined();
      expect(result.tokens.refreshToken).toBeDefined();
    });
  });

  describe('login', () => {
    it('throws UnauthorizedError for non-existent user', async () => {
      mockRepo.findUserByEmail.mockResolvedValueOnce(null);
      await expect(
        service.login({ email: 'notexist@test.com', password: 'Test@1234' })
      ).rejects.toThrow(UnauthorizedError);
    });
  });
});
