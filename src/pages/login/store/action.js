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

const changeType = () => ({
  type: constants.CHANGE_TYPE
})

export const logout = () => ({
  type: constants.LOGOUT
})

export const login = (acc, pwd, type) => {
  return dispatch => {
    api.login(acc, pwd, type).then(res => {
      const { result, msg, data } = res.data;
      if (result) {
        if (data.auth === 2) {
          dispatch(changeType());
        }
        dispatch(changeLogin());
        dispatch(userAction.changeUser(data));
        dispatch(userAction.changeInfo(data.info));
      } else {
        message.error(msg);
      }
    });
  };
};
