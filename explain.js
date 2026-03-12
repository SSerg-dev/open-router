import { openai } from './client.js';

const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT ?? 'Ты учитель. Объясняй термины просто и понятно.';
const USER_PROMPT_TEMPLATE = process.env.USER_PROMPT ?? 'Объясни простыми словами что такое';

async function explain(term) {
  const response = await openai.chat.completions.create({ 
    model: 'openrouter/free',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: `${USER_PROMPT_TEMPLATE} ${term}` }
    ] 
  });

  return response.choices?.[0]?.message?.content;
}

const term = process.argv[2] || 'event loop';

try {
  const explanation = await explain(term);
  console.log(`\n📚 ${term}:\n`);
  console.log(explanation ?? 'No response received');
} catch (err) {
  console.error('Error:', err.message);
}
  