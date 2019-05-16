import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  total: 0,
  data: [],
  type: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DATA:
      return state.set('data', action.data);
    case constants.CHANGE_TOTAL:
      return state.set('total', action.data);
    case constants.CHANGE_TYPE:
      return state.set('type', action.data);
    default:
      break;
  }
  return state;
};