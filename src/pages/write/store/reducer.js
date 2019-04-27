import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  mode: false
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_MODE:
    return state.set('mode', action.data);
    default:
      return state;
  }
}

export default reducer;