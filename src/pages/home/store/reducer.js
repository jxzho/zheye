import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  slideList: [],
  topicList: [],
  articleList: [],
  article: {
    page: 1,
    pageSize: 5
  }
});

const changeHomeData = (state, action) => {
  return state.merge({
    slideList: fromJS(action.slideList),
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList)
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constants.GET_MORE_LIST:
      return state.set("article", action.data);
    case constants.CHANGE_ARTICLE_LIST:
      return state.set("articleList", fromJS(action.data));
    default:
      break;
  }
  return state;
};
