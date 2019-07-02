import * as constants from "./constants";

const defaultState = {
  cssCode: '',
  htmlCode: '',
  jsCode: '',
  eleIframe: '',
  activeLan: ["HTML", "CSS", "JS", "Output"], // "Console"
};

const changeWidth = (state, data) => {
  return {
    ...state,
    controlWidth: {
      ...state.controlWidth,
      ...data
    }
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_CSS_CODE:
      return { ...state, cssCode: action.data };
    case constants.CHANGE_HTML_CODE:
      return { ...state, htmlCode: action.data };
    case constants.CHANGE_JS_CODE:
      return { ...state, jsCode: action.data };
    case constants.GET_IFRAME:
      return { ...state, eleIframe: action.data };
    case constants.CHANGE_ACTIVE_LAN:
      return { ...state, activeLan: action.data };
    case constants.CHANGE_WIDTH:
      return changeWidth(state, action.data);
    default:
      return state;
  }
};

export default reducer;