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

export const getArticles = (page, pageSize) => {
  return dispatch => {
    api.getArticle(page, pageSize).then(res => {
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