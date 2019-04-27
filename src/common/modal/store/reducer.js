import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  visible: false,
  title: '',
  content: null,
  onOk: '',
  onCancel: ''
});

const changeModal = (state, action) => {
  const data = action.data;
  return state.merge({
    visible: data.visible,
    title: data.title,
    content: data.content,
    onOk: fromJS(data.onOk),
    onCancel: fromJS(data.onCancel)
  });
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_MODAL:
      return changeModal(state, action);
    default:
      return state;
  }
};

export default reducer;