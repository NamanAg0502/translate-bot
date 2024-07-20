import { StringOutputParser } from '@langchain/core/output_parsers';
import { openaiModel } from './openai';
import { promptTemplate } from './prompt';

export function promptChain() {
  try {
    const parser = new StringOutputParser();
    const model = openaiModel();
    const prompt = promptTemplate();

    const chain = prompt.pipe(model).pipe(parser);
    return chain;
  } catch (error) {
    console.error('Error initializing prompt chain:', error);
    throw new Error('Error initializing prompt chain');
  }
}
