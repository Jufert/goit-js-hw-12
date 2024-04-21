
import axios from 'axios';

export const getImages = async function (searchValue, countPage) {
  const API_KEY = '43439546-09d160f4f6cc02f4d93a741f2';
  const url = 'https://pixabay.com/api/';
  const response = await axios.get(url, {
    params: {
      key: API_KEY,
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: countPage,
      per_page: 11,
    },
  });
  return response.data;
};