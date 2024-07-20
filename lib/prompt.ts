import { ChatPromptTemplate } from '@langchain/core/prompts';

const systemTemplate = 'Translate the following into {language}:';

export function promptTemplate() {
  try {
    const promptTemplate = ChatPromptTemplate.fromMessages([
      ['system', systemTemplate],
      ['user', '{text}'],
    ]);
    return promptTemplate;
  } catch (error) {
    console.error('Error initializing prompt template:', error);
    throw new Error('Error initializing prompt template');
  }
}
