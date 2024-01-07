import { OpenAI } from 'openai';

const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;

if (!apiKey) {
  console.error('API key is not defined.');
  // Handle the case where the API key is not defined
}

const openai = apiKey ? new OpenAI({ apiKey, dangerouslyAllowBrowser: true }) : null;

export async function sendMsgToOpenAi(message) {
  try {
    if (!openai) {
      console.error('OpenAI object is not initialized.');
      return null;
    }

    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
      ],
    }); 
    const response = gptResponse.choices[0].message;
    return response;
  } catch (error) {
    console.error('Error in sendMsgToOpenAi:', error);
    return null;
  }
}
