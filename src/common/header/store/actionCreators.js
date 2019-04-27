import constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () =>({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () =>({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () =>({
  type: constants.MOUSE_LEAVE
});

export const getList = () => {
  return dispatch => {
    axios.get('/api/header/list.json').then(res => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(err => {
      console.log(err);
    });
  }
};