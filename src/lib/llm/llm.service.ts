import { prisma } from '../../config/db';
import { decrypt } from '../../utils/encryption';
import { logger } from '../../utils/logger';
import { LlmProvider } from '@prisma/client';
import OpenAI from 'openai';

export interface LlmSuggestionResult {
  suggestions: string[];
  tokensUsed: number;
  source: 'AI' | 'RULE_BASED';
}

export interface LlmCompletionInput {
  systemPrompt: string;
  userPrompt: string;
  maxTokens?: number;
}

export interface LlmCompletionResult {
  content: string;
  tokensUsed: number;
}

export interface ProviderConfig {
  provider: LlmProvider;
  model: string;
  apiKey: string;
  baseUrl?: string | null;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Extracts a readable error message from any thrown value */
function extractErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  try { return JSON.stringify(error); } catch { return 'Unknown error'; }
}

/** Strips markdown fences Gemini/Claude sometimes wrap around JSON */
function stripFences(text: string): string {
  return text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();
}

// ─── Provider Implementations ─────────────────────────────────────────────────

async function callOpenAI(
  config: ProviderConfig,
  input: LlmCompletionInput
): Promise<LlmCompletionResult> {
  const OpenAI = (await import('openai')).default;
  const client = new OpenAI({
    apiKey: config.apiKey,
    ...(config.baseUrl ? { baseURL: config.baseUrl } : {}),
  });

  const response = await client.chat.completions.create({
    model: config.model,
    max_tokens: input.maxTokens ?? 600,
    messages: [
      { role: 'system', content: input.systemPrompt },
      { role: 'user', content: input.userPrompt },
    ],
    response_format: { type: 'json_object' }, // OpenAI fully supports this
  });

  return {
    content: response.choices[0]?.message?.content ?? '{}',
    tokensUsed: response.usage?.total_tokens ?? 0,
  };
}

/** Gemini 1.5-* stable models → v1; Gemini 2.0+/preview/exp → v1beta */
function getGeminiApiVersion(model: string): string {
  const needsBeta = /2\.\d|preview|exp|thinking|flash-8b/i.test(model);
  return needsBeta ? 'v1beta' : 'v1';
}

async function callGemini(
  config: ProviderConfig,
  input: LlmCompletionInput
): Promise<LlmCompletionResult> {
  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(config.apiKey);
  const apiVersion = getGeminiApiVersion(config.model);

  const modelInst = genAI.getGenerativeModel(
    {
      model: config.model,
      generationConfig: { maxOutputTokens: input.maxTokens ?? 600 },
    },
    // { apiVersion }
  );

  const prompt = [
    input.systemPrompt,
    input.userPrompt,
    'IMPORTANT: Respond with valid JSON only. No markdown, no explanation outside the JSON object.',
  ].join('\n\n');
  console.log(prompt)

  const result = await modelInst.generateContent(prompt);
  console.log('GEMINI result', result);
  const text = stripFences(result.response.text());

  return { content: text, tokensUsed: 0 };
}

async function callAnthropic(
  config: ProviderConfig,
  input: LlmCompletionInput
): Promise<LlmCompletionResult> {
  const Anthropic = (await import('@anthropic-ai/sdk')).default;
  const client = new Anthropic({ apiKey: config.apiKey });

  const response = await client.messages.create({
    model: config.model,
    max_tokens: input.maxTokens ?? 600,
    system: `${input.systemPrompt}\n\nIMPORTANT: Respond with valid JSON only. No markdown, no explanation.`,
    messages: [{ role: 'user', content: input.userPrompt }],
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  const raw = textBlock ? (textBlock as { type: 'text'; text: string }).text : '{}';

  return {
    content: stripFences(raw),
    tokensUsed: (response.usage?.input_tokens ?? 0) + (response.usage?.output_tokens ?? 0),
  };
}

async function callOllama(
  config: ProviderConfig,
  input: LlmCompletionInput
): Promise<LlmCompletionResult> {
  const OpenAI = (await import('openai')).default;
  const baseURL = (config.baseUrl || 'http://localhost:11434').replace(/\/$/, '') + '/v1';
  const client = new OpenAI({ apiKey: 'ollama', baseURL });

  // Ollama supports json format via the `format` option but through the native API.
  // Via the OpenAI-compat endpoint we use prompt engineering.
  const response = await client.chat.completions.create({
    model: config.model,
    max_tokens: input.maxTokens ?? 600,
    messages: [
      {
        role: 'system',
        content: `${input.systemPrompt}\n\nIMPORTANT: Respond with valid JSON only. No markdown, no extra text.`,
      },
      { role: 'user', content: input.userPrompt },
    ],
  });

  return {
    content: stripFences(response.choices[0]?.message?.content ?? '{}'),
    tokensUsed: response.usage?.total_tokens ?? 0,
  };
}

async function callMistral(
  config: ProviderConfig,
  input: LlmCompletionInput
): Promise<LlmCompletionResult> {
  const OpenAI = (await import('openai')).default;
  const client = new OpenAI({
    apiKey: config.apiKey,
    baseURL: config.baseUrl || 'https://api.mistral.ai/v1',
  });

  // Mistral supports response_format on some models but not all — use prompt engineering to be safe
  const response = await client.chat.completions.create({
    model: config.model,
    max_tokens: input.maxTokens ?? 600,
    messages: [
      {
        role: 'system',
        content: `${input.systemPrompt}\n\nIMPORTANT: Respond with valid JSON only. No markdown, no extra text.`,
      },
      { role: 'user', content: input.userPrompt },
    ],
  });

  return {
    content: stripFences(response.choices[0]?.message?.content ?? '{}'),
    tokensUsed: response.usage?.total_tokens ?? 0,
  };
}

async function callGroq(
  config: ProviderConfig,
  input: LlmCompletionInput
): Promise<LlmCompletionResult> {
  // const OpenAI = (await import('openai')).default;
  const client = new OpenAI({
    apiKey: config.apiKey,
    baseURL: 'https://api.groq.com/openai/v1',
  });
  console.log('client', client);
  // Only specific Groq models support response_format json_object.
  // Use prompt engineering for all models — safer and model-agnostic.
  const response = await client.chat.completions.create({
    model: config.model,
    max_tokens: input.maxTokens ?? 600,
    messages: [
      {
        role: 'system',
        content: `${input.systemPrompt}\n\nIMPORTANT: Respond with valid JSON only. No markdown, no extra text.`,
      },
      { role: 'user', content: input.userPrompt },
    ],
  });

  console.log('response', response);

  return {
    content: stripFences(response.choices[0]?.message?.content ?? '{}'),
    tokensUsed: response.usage?.total_tokens ?? 0,
  };
}

async function dispatchToProvider(
  config: ProviderConfig,
  input: LlmCompletionInput
): Promise<LlmCompletionResult> {
  console.log('CONFIG PROVIDER', config.provider);
  switch (config.provider) {
    case 'OPENAI': return callOpenAI(config, input);
    case 'GEMINI': return callGemini(config, input);
    case 'ANTHROPIC': return callAnthropic(config, input);
    case 'OLLAMA': return callOllama(config, input);
    case 'MISTRAL': return callMistral(config, input);
    case 'GROQ': return callGroq(config, input);
    default: throw new Error(`Unsupported provider: ${config.provider}`);
  }
}

// ─── LlmService ───────────────────────────────────────────────────────────────

export class LlmService {

  /**
   * Suggestions — soft failure: returns RULE_BASED on any error.
   */
  async getSuggestions(
    userId: string,
    resumeText: string,
    scoreContext: string
  ): Promise<LlmSuggestionResult> {
    const config = await this.getUserConfig(userId);
    if (!config || !config.isEnabled || !config.encryptedApiKey) {
      return { suggestions: [], tokensUsed: 0, source: 'RULE_BASED' };
    }

    try {
      const result = await dispatchToProvider(
        {
          provider: config.provider,
          model: config.model,
          apiKey: decrypt(config.encryptedApiKey),
          baseUrl: config.baseUrl,
        },
        {
          systemPrompt: 'You are a professional resume coach. Give concise, actionable suggestions to improve the resume for ATS systems.',
          userPrompt: `Resume text:\n${resumeText.slice(0, 2000)}\n\nATS Score Context:\n${scoreContext}\n\nProvide 3–5 specific improvement suggestions as a JSON object with key "suggestions" containing an array of strings.`,
          maxTokens: 500,
        }
      );

      const parsed = this.parseJson<{ suggestions?: string[] }>(result.content);
      const suggestions = Array.isArray(parsed.suggestions) ? parsed.suggestions : [];
      await this.trackUsage(userId, config.id, result.tokensUsed, 'SUGGESTION');
      return { suggestions, tokensUsed: result.tokensUsed, source: 'AI' };
    } catch (error) {
      logger.warn('LLM getSuggestions() failed, falling back to rule-based', {
        error: extractErrorMessage(error),
      });
      return { suggestions: [], tokensUsed: 0, source: 'RULE_BASED' };
    }
  }

  /**
   * General completion — THROWS on provider errors so callers get the real error.
   * Returns null ONLY when no config is set up.
   */
  async complete(
    userId: string,
    input: LlmCompletionInput,
    requestType = 'GENERAL'
  ): Promise<LlmCompletionResult | null> {
    const config = await this.getUserConfig(userId);

    // No config → caller handles the "AI not configured" case
    if (!config || !config.isEnabled || !config.encryptedApiKey) return null;

    // Config exists → let errors propagate so callers can surface the real message
    const result = await dispatchToProvider(
      {
        provider: config.provider,
        model: config.model,
        apiKey: decrypt(config.encryptedApiKey),
        baseUrl: config.baseUrl,
      },
      input
    );

    logger.info(`[LLM] ${config.provider}/${config.model} — ${result.tokensUsed} tokens (${requestType})`);
    await this.trackUsage(userId, config.id, result.tokensUsed, requestType);
    return result;
  }

  async getUserConfig(userId: string) {
    return prisma.userLlmConfig.findUnique({ where: { userId } });
  }

  async upsertConfig(
    userId: string,
    apiKey: string,
    isEnabled: boolean,
    provider: LlmProvider = 'OPENAI',
    model?: string,
    baseUrl?: string
  ) {
    const { encrypt } = await import('../../utils/encryption');
    const encryptedApiKey = encrypt(apiKey);
    const defaultModel = model || this.getDefaultModel(provider);

    return prisma.userLlmConfig.upsert({
      where: { userId },
      create: {
        userId,
        encryptedApiKey,
        isEnabled,
        provider,
        model: defaultModel,
        baseUrl: baseUrl || null,
      },
      update: {
        encryptedApiKey,
        isEnabled,
        provider,
        model: defaultModel,
        baseUrl: baseUrl || null,
      },
      select: { id: true, provider: true, model: true, isEnabled: true, updatedAt: true },
    });
  }

  async toggleConfig(userId: string, isEnabled: boolean) {
    return prisma.userLlmConfig.update({
      where: { userId },
      data: { isEnabled },
      select: { id: true, isEnabled: true },
    });
  }

  async getUsageSummary(userId: string) {
    const logs = await prisma.llmUsageLog.aggregate({
      where: { userId },
      _sum: { tokensUsed: true },
      _count: { id: true },
    });

    const estimatedCost = ((logs._sum.tokensUsed ?? 0) / 1000) * 0.002;
    return {
      totalTokensUsed: logs._sum.tokensUsed ?? 0,
      totalRequests: logs._count.id,
      estimatedCostUsd: parseFloat(estimatedCost.toFixed(4)),
    };
  }

  private getDefaultModel(provider: LlmProvider): string {
    switch (provider) {
      case 'OPENAI': return 'gpt-4o-mini';
      case 'GEMINI': return 'gemini-2.0-flash';
      case 'ANTHROPIC': return 'claude-3-5-haiku-20241022';
      case 'OLLAMA': return 'llama3.2';
      case 'MISTRAL': return 'mistral-small-latest';
      case 'GROQ': return 'llama-3.3-70b-versatile';
      default: return 'gpt-4o-mini';
    }
  }

  private parseJson<T>(content: string): Partial<T> {
    try {
      return JSON.parse(content) as T;
    } catch {
      const match = content.match(/\{[\s\S]*\}/);
      if (match) {
        try { return JSON.parse(match[0]) as T; } catch { /* fall through */ }
      }
      return {};
    }
  }

  private async trackUsage(userId: string, configId: string, tokensUsed: number, requestType: string) {
    if (tokensUsed > 0) {
      await prisma.llmUsageLog.create({ data: { userId, configId, tokensUsed, requestType } }).catch(() => {
        // Non-critical — don't fail the request over usage tracking
      });
    }
  }
}
