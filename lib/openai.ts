import { ChatOpenAI } from '@langchain/openai';

export function openaiModel() {
  try {
    const model = new ChatOpenAI({
      model: 'gpt-3.5-turbo',
    });

    return model;
  } catch (error) {
    console.error('Error initializing OpenAI model:', error);
    throw new Error('Error initializing OpenAI model');
  }
}
