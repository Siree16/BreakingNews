// newsService.js
import axios from 'axios';

const apiKey = '58eb9bee9e8a4d71a7f7c5f13507c1da';

const fetchNews = async (category) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export default fetchNews;