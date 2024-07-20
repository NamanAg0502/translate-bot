import { Request, Response } from 'express';
import { promptChain } from '../lib/chain';

export async function translate(req: Request, res: Response) {
  const { language, text } = req.body;

  if (!text || !language) {
    return res.status(400).json({ error: 'Text query parameter is required' });
  }

  try {
    const chain = promptChain();
    const result = await chain.invoke({ language, text });
    res.status(200).json({ translation: result });
  } catch (error) {
    console.error('Error translating text:', error);
    res.status(500).json({ error: 'Error translating text' });
  }
}
