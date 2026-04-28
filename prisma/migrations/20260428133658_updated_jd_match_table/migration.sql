-- AlterTable
ALTER TABLE "jd_matches" ADD COLUMN     "improvements" TEXT[],
ADD COLUMN     "insights" TEXT[],
ADD COLUMN     "missingKeywords" TEXT[],
ADD COLUMN     "suggestedKeywords" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
