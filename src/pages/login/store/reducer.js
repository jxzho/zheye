import constants from "./constants";
import { fromJS } from "immutable";
import { local } from '../../../utils';

const defaultLogin = local('user') ? true : false;

const defaultState = fromJS({
  login: defaultLogin,
  type: ""
});

const logout = (state, action) => {
  localStorage.removeItem('user');
  return state.set('login', false);
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', true);
    case constants.LOGOUT:
      return logout(state, action);
    case constants.CHANGE_TYPE:
      return state.set('type', "admin");
    default:
      break;
  }
  return state;
};