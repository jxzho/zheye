import axios from 'axios';

const login = (account, password, type = "general") => {
  return axios.post(`/user/login?type=${type}`, {
    account, password
  });
}

const register = (account, password) => {
  return axios.put('/user/register', {
    account, password
  });
}

const getInfo = (id) => {
  return axios.get(`/user/${id}/info`);
}

const updateInfo = (id, data) => {
  return axios.post('/user/'+ id +'/update', data);
}

const getUserArticles = (id, query) => {
  return axios.get(`/user/${id}/articles`, {
    params: query
  });
}

const getUserCollect = (id, type) => {
  return axios.get(`/user/${id}/collect/${type}`);
}

const getDataCenter = (id) => {
  return axios.get(`/user/${id}/dataCenter`);
}

const recordToday = id => {
  return axios.post(`/user/${id}/record`);
}

const getRecord = id => {
  return axios.get(`/user/${id}/record`);
}

export default {
  login, 
  register,
  getInfo,
  updateInfo,
  getUserArticles,
  getUserCollect,
  getDataCenter,
  recordToday,
  getRecord
}