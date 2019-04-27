import * as constants from "./constants";
import api from "../../../api";
import { message } from "antd";

export const switchPause = () => ({
  type: constants.TIME_PAUSE
});

export const switchOn = () => ({
  type: constants.TIME_ON
});

export const changeType = data => ({
  type: constants.CHANGE_TYPE,
  data
});

export const changeNum = data => ({
  type: constants.CHANGE_NUM,
  data
});

export const changeIssues = data => ({
  type: constants.CHANGE_ISSUES,
  data
});

export const changeDone = data => ({
  type: constants.CHANGE_DONE,
  data
});

export const changeDuration = data => ({
  type: constants.CHANGE_DURATION,
  data
});

export const clearDone = () => ({
  type: constants.CLEAR_DONE
});

export const uploadProblems = data => {
  return dispatch => {
    api.uploadProblems(data).then(res => {
      const data = res.data;
      data.result && message.success("upload problems successfully.");
    });
  };
};

export const getProblems = (type, num) => {
  return dispatch => {
    api.getProblems(type, num).then(res => {
      const data = res.data;
      if (data.result && data.data.length !== 0) {
        message.success("初始化成功！");
        dispatch(changeIssues(data.data));
      } else if (data.result && data.data.length === 0) {
        message.warn("该类型问题已答尽！");
        dispatch(changeIssues(data.data));
      } else {
        message.error("初始化失败！");
      }
    });
  };
};

export const uploadProblemsDone = data => {
  return async function(dispatch) {
    api.uploadProblemsDone(data);
  };
};

export const collectProblem = payload => {
  return async function(dispatch) {
    api.collectProblem(payload).then(res => {
      const data =res.data;
      if (data.result) {
        if (payload.status === 0) {
          message.warn('取消收藏.');
        } else {
          message.success('收藏成功.');
        }
      } else {
        message.error(data.msg);
      }
    });
  };
};
