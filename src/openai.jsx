import { OpenAI } from 'openai';

const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;

if (!apiKey) {
  console.error('API key is not defined.');
}

const openai = apiKey ? new OpenAI({ apiKey, dangerouslyAllowBrowser: true }) : null;

let isSending = false;

export async function sendMsgToOpenAi(message) {
  if (!isSending) {
    try {
      if (!openai) {
        console.error('OpenAI object is not initialized.');
        return null;
      }

      isSending = true;

      const gptResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
      });

      isSending = false;

      const response = gptResponse.choices[0].message?.content;
      return response;
    } catch (error) {
      isSending = false;
      if (error.status === 429) {
        alert('Too many requests. Please wait a moment and try again.');
      } else {
        console.error('Error:', error);
      }
    }
  }
}
