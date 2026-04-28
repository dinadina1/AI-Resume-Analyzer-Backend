import CryptoJS from 'crypto-js';
import { env } from '../config/env';

/**
 * AES-256 encryption for sensitive data (LLM API keys).
 * Key must be 32 characters (256 bits).
 */
export function encrypt(plainText: string): string {
  return CryptoJS.AES.encrypt(plainText, env.encryption.key).toString();
}

export function decrypt(cipherText: string): string {
  const bytes = CryptoJS.AES.decrypt(cipherText, env.encryption.key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function hashPassword(password: string): string {
  return CryptoJS.SHA256(password).toString();
}

export function generateSecureToken(length = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
