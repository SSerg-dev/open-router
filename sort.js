import { openai } from './client.js';

try {
  const response = await openai.chat.completions.create({
    model: 'openrouter/free',
    messages: [
      { role: 'user', content: 'Привет! Напиши короткую функцию сортировки на JS' }
    ]
  });

  const content = response.choices?.[0]?.message?.content;
  console.log(content ?? 'No response received');
} catch (err) {
  console.error('Error:', err.message);
}
