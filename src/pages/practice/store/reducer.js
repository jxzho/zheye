import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  on: false,
  type: "",
  num: "",
  grade: "",
  issues: [],
  done: [],
  duration: 0
});

const changeDone = (state, action) => {
  let done = fromJS(state.get("done"));
  const data = action.data;
  const map = done.find(item => {
    return item.get("problemId") === data.problemId;
  });
  if (!map) {
    const newDone = done.push(fromJS(data));
    return state.set("done", newDone);
  } else {
    const index = done.indexOf(map);
    const newDone = done.set(index, fromJS(data));
    return state.set("done", newDone);
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.TIME_PAUSE:
      return state.set("on", false);
    case constants.TIME_ON:
      return state.set("on", true);
    case constants.CHANGE_TYPE:
      return state.set("type", action.data);
    case constants.CHANGE_NUM:
      return state.set("num", action.data);
    case constants.CHANGE_ISSUES:
      return state.set("issues", fromJS(action.data));
    case constants.CHANGE_DONE:
      return changeDone(state, action);
    case constants.CHANGE_DURATION:
      return state.set("duration", action.data);
    case constants.CLEAR_DONE:
      return state.set("done", []);
    case constants.CHANGE_GRADE:
      return state.set("grade", action.data);
    default:
      break;
  }
  return state;
};
