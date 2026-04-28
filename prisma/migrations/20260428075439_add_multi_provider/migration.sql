-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "LlmProvider" ADD VALUE 'GEMINI';
ALTER TYPE "LlmProvider" ADD VALUE 'ANTHROPIC';
ALTER TYPE "LlmProvider" ADD VALUE 'OLLAMA';
ALTER TYPE "LlmProvider" ADD VALUE 'MISTRAL';
ALTER TYPE "LlmProvider" ADD VALUE 'GROQ';

-- AlterTable
ALTER TABLE "user_llm_configs" ADD COLUMN     "baseUrl" TEXT,
ADD COLUMN     "model" TEXT NOT NULL DEFAULT 'gpt-3.5-turbo';
