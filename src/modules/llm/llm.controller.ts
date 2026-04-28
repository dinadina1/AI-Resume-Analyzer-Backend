import { Response, NextFunction } from 'express';
import { LlmService } from '../../lib/llm/llm.service';
import { AuthRequest } from '../../middleware/auth.middleware';
import { sendSuccess } from '../../utils/response';

export class LlmController {
  private readonly service: LlmService;

  constructor() {
    this.service = new LlmService();
  }

  async saveConfig(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { apiKey, isEnabled, provider, model, baseUrl } = req.body as {
        apiKey: string;
        isEnabled: boolean;
        provider?: string;
        model?: string;
        baseUrl?: string;
      };
      const config = await this.service.upsertConfig(
        req.user!.userId,
        apiKey,
        isEnabled,
        provider as any,
        model,
        baseUrl
      );
      sendSuccess(res, config, 'LLM configuration saved successfully');
    } catch (error) {
      next(error);
    }
  }

  async toggleConfig(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { isEnabled } = req.body as { isEnabled: boolean };
      const config = await this.service.toggleConfig(req.user!.userId, isEnabled);
      sendSuccess(res, config, `LLM ${isEnabled ? 'enabled' : 'disabled'}`);
    } catch (error) {
      next(error);
    }
  }

  async getUsage(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const usage = await this.service.getUsageSummary(req.user!.userId);
      sendSuccess(res, usage, 'LLM usage fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  async getConfig(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const config = await this.service.getUserConfig(req.user!.userId);
      sendSuccess(
        res,
        config
          ? {
              provider: config.provider,
              model: config.model,
              baseUrl: config.baseUrl,
              isEnabled: config.isEnabled,
              hasKey: !!config.encryptedApiKey,
            }
          : null,
        'LLM config fetched'
      );
    } catch (error) {
      next(error);
    }
  }
}
