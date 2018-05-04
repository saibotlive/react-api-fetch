import axios from 'axios';

export const fetchApiData = url => async () => {
  return await axios.get(url);
};
