import axios from 'axios';

export const checkMonthlyReading = async (): Promise<boolean> => {
  return false; 
};

export const getGeminiData = async (imageBase64: string) => {
  try {
    const apiKey = 'SUA_GOOGLE_GEMINI_API_KEY'; // Por favor substitua pela sua chave de API
    const response = await axios.post(
      'https://api.google.com/gemini/v1/vision',
      {
        image: imageBase64,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

  
    const { link, guid, value } = response.data;
    return { link, guid, value };
  } catch (error) {
    throw new Error('Error in Gemini API integration');
  }
};
