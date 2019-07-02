import axios from 'axios';

const getDocDetail = id => {
  return axios.get(`/admin/doc/detail/${id}`);
}

const uploadDoc = (type, data) => {
  return axios.post(`/admin/doc/add/${type}`, data);
}

const updateDoc = (id, data) => {
  return axios.put(`/admin/doc/${id}`, data);
};

const getDocAll = id => {
  return axios.get(`/admin/doc/${id}`);
};

const getUsers = id => {
  return axios.get(`/admin/users`);
}

const updateUser = (id, data) => {
  return axios.put(`/admin/user/${id}`, data);
}

const getArticles = (id, data) => {
  return axios.get("/admin/articles",);
}

const updateArticles = (id, data) => {
  return axios.put(`/admin/articles/${id}`, data);
}

const getAdminProblems = (id, data) => {
  return axios.get("/admin/problems",);
}

const findProblem = (id, data) => {
  return axios.get(`/admin/problems/${id}`, data);
}

const updateProblem = (id, data) => {
  return axios.put(`/admin/problems/${id}`, data);
}

const getSlides = (id, data) => {
  return axios.get(`/admin/slides`, data);
}

const getTopic = (id, data) => {
  return axios.get(`/admin/topic`, data);
}

export default {
  getDocDetail,
  uploadDoc,
  updateDoc,
  getDocAll,
  getUsers,
  updateUser,
  getArticles,
  updateArticles,
  getAdminProblems,
  findProblem,
  updateProblem,
  getSlides,
  getTopic
}