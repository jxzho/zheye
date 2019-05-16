import axios from "axios";

const getArticle = (page, pageSize, contentType = '') => {
  return axios.get("/article", {
    params: {
      page,
      pageSize,
      contentType
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

const addArticleComment = data => {
  return axios.put("/article/addComment", data);
}

const searchArticle = contentType => {
  return axios.get("/article/search", {
    params: {
      contentType
    }
  });
}

export default {
  getArticle,
  getArticleDetail,
  addArticle,
  collectArticle,
  addArticleComment,
  searchArticle
};
