import constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  article: {},
});

const changeDetail = (state, action) => {
  const data = action.data;
  return state.set('article', data);
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DETAIL:
      return changeDetail(state, action);
    default:
      break;
  }
  return state;
};
