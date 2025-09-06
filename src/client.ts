import 'dotenv/config';
import OpenAI from 'openai';

export const getEnvOrThrow = (key: string): string => {
  const value = process.env[key];
  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required env: ${key}`);
  }
  return value;
};

export const model: string = process.env.OPENAI_MODEL ?? 'qwen-max';

export const client = new OpenAI({
  apiKey: getEnvOrThrow('OPENAI_API_KEY'),
  baseURL: getEnvOrThrow('OPENAI_BASE_URL'),
});


