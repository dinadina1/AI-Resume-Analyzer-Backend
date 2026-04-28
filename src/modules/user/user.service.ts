import { UserRepository } from './user.repository';
import { NotFoundError } from '../../middleware/error.middleware';

export class UserService {
  private readonly repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async getProfile(userId: string) {
    const user = await this.repository.findById(userId);
    if (!user) throw new NotFoundError('User not found');
    return user;
  }

  async updateProfile(userId: string, data: { name?: string }) {
    const user = await this.repository.findById(userId);
    if (!user) throw new NotFoundError('User not found');
    return this.repository.updateProfile(userId, data);
  }

  async getAllUsers(page = 1, limit = 10) {
    return this.repository.findAll(page, limit);
  }

  async deleteUser(userId: string) {
    const user = await this.repository.findById(userId);
    if (!user) throw new NotFoundError('User not found');
    await this.repository.deleteUser(userId);
  }
}
