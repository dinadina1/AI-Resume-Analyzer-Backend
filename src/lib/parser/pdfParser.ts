import pdfParse from 'pdf-parse';
import fs from 'fs';
import { logger } from '../../utils/logger';
import { AppError } from '../../middleware/error.middleware';

export interface ParsedResume {
  rawText: string;
  wordCount: number;
  pageCount: number;
}

export class PdfParserService {
  /**
   * Extracts all text content from a PDF — no filtering, no hardcoded lists.
   * The raw text is passed to AI for intelligent analysis.
   */
  async parse(filePath: string): Promise<ParsedResume> {
    try {
      const buffer = fs.readFileSync(filePath);
      const data = await pdfParse(buffer);

      const rawText = data.text.trim();
      const wordCount = rawText.split(/\s+/).filter(Boolean).length;

      logger.debug(`Parsed PDF: ${wordCount} words, ${data.numpages} pages`);

      return {
        rawText,
        wordCount,
        pageCount: data.numpages,
      };
    } catch (error) {
      logger.error('PDF parsing failed', { filePath, error });
      throw new AppError('Failed to parse resume PDF. Please ensure the file is not corrupted.', 422);
    }
  }

  /**
   * Basic structural metadata — used only to detect formatting (page count, word count).
   * No rule-based content extraction.
   */
  extractContactInfo(rawText: string): { email?: string; phone?: string; linkedin?: string } {
    const emailMatch = rawText.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    const phoneMatch = rawText.match(/(\+\d{1,3}[\s-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);
    const linkedinMatch = rawText.match(/linkedin\.com\/in\/[\w-]+/i);

    return {
      email: emailMatch?.[0],
      phone: phoneMatch?.[0],
      linkedin: linkedinMatch?.[0],
    };
  }
}
