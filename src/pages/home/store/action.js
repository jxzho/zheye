import * as constants from "./constants";
import api from "../../../api";

const getHomeData = res => {
  const data = res.data.data;
  return {
    type: constants.CHANGE_HOME_DATA,
    slideList: data.slideList,
    topicList: data.topicList,
    articleList: data.articleList
  };
};

export const changeHomeData = () => {
  return dispatch => {
    api.getHomeData().then(res => {
      dispatch(getHomeData(res));
    });
  };
};

export const getMoreList = (page, pageSize) => {
  return dispatch => {
    api.getArticle(page, pageSize + 5).then(res => {
      if (res.data.result) {
        dispatch({
          type: constants.CHANGE_ARTICLE_LIST,
          data: res.data.data.rows
        });
      }
    });
    dispatch({
      type: constants.GET_MORE_LIST,
      data: {
        page,
        pageSize: pageSize + 5
      }
    });
  };
};
