import * as constants from './constants';
import api from '../../../api';

const changeData = data => ({
  type: constants.CHANGE_DATA,
  data
});

const changeTotal = data => ({
  type: constants.CHANGE_TOTAL,
  data
})

export const getArticles = (page, pageSize, contentType) => {
  return dispatch => {
    api.getArticle(page, pageSize, contentType).then(res => {
      const data = res.data;
      if (data.result) {
        dispatch(changeData(data.data.rows));
        dispatch(changeTotal(data.data.count));
      }
    });
  }
}

export const changeType = type => {
  return dispatch => {
    dispatch({
      type: constants.CHANGE_TYPE,
      data: type
    });
  }
}

export const searchArticle = contentType => {
  return dispatch => {
    api.searchArticle(contentType).then(res => {
      const data = res.data;
      if (data.result) {
        
      }
    });
  }
};