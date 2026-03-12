// Node.js (с установленным npm install openai)
import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
});

try {
  const response = await openai.chat.completions.create({
    model: 'openrouter/free',  // Smart router picks a free model
    messages: [
      { role: 'user', content: 'Привет! Напиши короткую функцию сортировки на JS' }
    ]
  });

  const content = response.choices?.[0]?.message?.content;
  console.log(content ?? 'No response received');
} catch (err) {
  console.error('Error:', err.message);
}

