import * as constants from "./constants";

const changeMode = data => ({
  type: constants.CHANGE_MODE,
  data
});

export const switchMode = data => {
  return dispatch => {
    dispatch(changeMode(data));
  }
}
