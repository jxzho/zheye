import api from '../../../api';
import constants from './constants';

const changeDetail = (data) => ({
  type: constants.GET_DETAIL,
  data
})

export const getDetail = (id) => {
  return dispatch => {
    api.getArticleDetail(id).then(res => {
      const data = res.data.data;
      dispatch(changeDetail(data));
    })
  }
}

export const collectArticle = (data) => {
  return dispatch => {
    api.collectArticle(data).then(res => {
      console.log(res.data);
    })
  }
}