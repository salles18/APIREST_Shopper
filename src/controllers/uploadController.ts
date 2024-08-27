import { Response } from 'express';
import { checkMonthlyReading, getGeminiData } from '../services/geminiService';

export const handleUpload = async (imageBase64: string, res: Response) => {
  try {
   
    if (await checkMonthlyReading()) {
      return res.status(400).json({ message: 'Reading already exists for this month' });
    }

    const geminiData = await getGeminiData(imageBase64);

    res.json(geminiData);
  } catch (error) {
    res.status(500).json({ message: 'Failed to process image', error });
  }
};
