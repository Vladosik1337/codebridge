import axios from 'axios';

export const getArticles = async () => {
  return await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
};

export const getArticleById = async (id: number) => {
  return await axios.get(
    `https://api.spaceflightnewsapi.net/v3/articles/${id}`
  );
};
