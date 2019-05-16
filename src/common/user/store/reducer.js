import * as constants from "./constants";
import { fromJS } from "immutable";
import { local } from "../../../utils";

const user = local("user") ? local("user") : {
  info: {
    avatar: ''
  }
};

const defaultState = fromJS({
  user,
  info: {
    record: false
  },
  article: {
    page: 1,
    pageSize: 3,
    total: 0,
    list: []
  },
  collect: {
    article: [],
    problem: []
  },
  dataCenter: {}
});

const changeUser = (state, action) => {
  const data = action.data;
  local("user", data);
  return state.set("user", fromJS(data));
};

const changeInfo = (state, action) => {
  const data = action.data;
  return state.set("info", fromJS(data));
};

const changeArticles = (state, action) => {
  const data = action.data;
  return state.merge({
    article: {
      page: data.page,
      pageSize: data.pageSize,
      total: data.count,
      list: fromJS(data.rows)
    }
  });
};

const changeCollect = (state, action) => {
  const { data, listType } = action;
  return state.setIn(["collect", listType], fromJS(data));
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_USER:
      return changeUser(state, action);
    case constants.CHANGE_ARTICLES:
      return changeArticles(state, action);
    case constants.CHANGE_INFO:
      return changeInfo(state, action);
    case constants.CHANGE_COLLECT:
      return changeCollect(state, action);
    case constants.CHANGE_DATA_CENTER:
      return state.set("dataCenter", action.data);
    case constants.CHANGE_RECORD:
      return state.setIn(["info", "record"], true);
    case constants.CLEAR_USER:
      return state.set("user", {});
    default:
      return state;
  }
};

export default reducer;
