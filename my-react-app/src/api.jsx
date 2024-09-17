import axios from 'axios';

export const fetchCharacters = async () => {
  try {
    const response = await axios.get('https://genshin-impact-api.vercel.app/characters');
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    return [];
  }
};
