import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  total: 0,
  data: [],
  type: '',
  isLoading: true
});

const changeData = (state, action) => {
  return state.merge({
    data: action.data,
    isLoading: false
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DATA:
      return changeData(state, action);
    case constants.CHANGE_TOTAL:
      return state.set('total', action.data);
    case constants.CHANGE_TYPE:
      return state.set('type', action.data);
    default:
      break;
  }
  return state;
};