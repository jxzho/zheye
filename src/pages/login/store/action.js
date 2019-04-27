import constants from "./constants";
import { actionCreators as userAction } from '../../../common/user/store';
import api from "../../../api/index";
import { message } from 'antd';
message.config({
  top: 200
});

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN
})

export const logout = () => ({
  type: constants.LOGOUT
})

export const login = (acc, pwd) => {
  return dispatch => {
    api.login(acc, pwd).then(res => {
      const { result, msg, data } = res.data;
      if (result) {
        dispatch(changeLogin());
        dispatch(userAction.changeUser(data));
        dispatch(userAction.changeInfo(data.info));
      } else {
        message.error(msg);
      }
    });
  };
};
