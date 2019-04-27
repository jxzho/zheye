import axios from 'axios';

const getHomeData = () => {
  return axios.get('/home');
}

export default {
  getHomeData
}