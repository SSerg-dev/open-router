import 'dotenv/config';
import OpenAI from 'openai';

// Common OpenAI client - use in other files: import { openai } from './client.js'
export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});
