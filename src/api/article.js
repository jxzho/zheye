import axios from "axios";

const getArticle = (page, pageSize) => {
  return axios.get("/article", {
    params: {
      page,
      pageSize
    }
  });
};

const getArticleDetail = id => {
  return axios.get("/article/" + id);
};

const addArticle = data => {
  return axios.put("/article/add", data);
};

const collectArticle = data => {
  return axios.post("/article/collect", data);
}

export default {
  getArticle,
  getArticleDetail,
  addArticle,
  collectArticle
};
