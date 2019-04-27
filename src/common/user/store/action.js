import * as constants from "./constants";
import api from "../../../api";
import { message } from "antd";

export const changeUser = data => ({
  type: constants.CHANGE_USER,
  data
});

export const changeInfo = data => ({
  type: constants.CHANGE_INFO,
  data
});

export const changeArticles = data => ({
  type: constants.CHANGE_ARTICLES,
  data
});

export const changeCollect = (listType, data) => ({
  type: constants.CHANGE_COLLECT,
  data,
  listType
});

const changeDataCenter = data => ({
  type: constants.CHANGE_DATA_CENTER,
  data
});

export const updateInfo = (id, data) => {
  return dispatch => {
    api.updateInfo(id, data).then(res => {
      const data = res.data;
      if (data.data === 1) {
        message.success("信息修改成功~", 1.5);
      } else {
        message.info("无内容变更~", 1.5);
      }
    });
  };
};

export const getArticles = (id, pageInfo) => {
  return dispatch => {
    api.getUserArticles(id, pageInfo).then(res => {
      const data = res.data;
      if (data.result) {
        dispatch(
          changeArticles({
            ...data.data,
            ...pageInfo
          })
        );
      }
    });
  };
};

export const getInfo = id => {
  return dispatch => {
    api.getInfo(id).then(res => {
      const data = res.data;
      if (data.result) {
        dispatch(changeInfo(data.data));
      }
    });
  };
};

export const getCollect = (id, type) => {
  return dispatch => {
    api.getUserCollect(id, type).then(res => {
      const data = res.data;
      if (data.result) {
        dispatch(changeCollect(type, data.data));
      }
    });
  };
};

export const getDataCenter = (id) => {
  return dispatch => {
    api.getDataCenter(id).then(res => {
      const data = res.data;
      if (data.result) {
        dispatch(changeDataCenter(data.data));
      }
    });
  }
}

export const recordToday = id => {
  return dispatch => {
    api.recordToday(id).then(res => {
      if (res.data.result) {
        dispatch({
          type: constants.CHANGE_RECORD
        })
      }
    })
  }
};

export const getRecord = id => {
  return dispatch => {
    api.getRecord(id).then(res => {
      if (res.data.result && res.data.data) {
        dispatch({
          type: constants.CHANGE_RECORD
        })
      }
    })
  }
}