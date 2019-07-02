import * as constants from "./constants";

export const changeCssCode = (code) => {
  return {
    type: constants.CHANGE_CSS_CODE,
    data: code
  }
}

export const changeHTMLCode = (code) => {
  return {
    type: constants.CHANGE_HTML_CODE,
    data: code
  }
}

export const changeJSCode = (code) => {
  return {
    type: constants.CHANGE_JS_CODE,
    data: code
  }
}

export const getIframe = (iframe) => {
  return {
    type: constants.GET_IFRAME,
    data: iframe
  }
}

export const changeActiveLan = (ary) => {
  return {
    type: constants.CHANGE_ACTIVE_LAN,
    data: ary
  }
}

export const changeLanWidth = (data) => {
  return {
    type: constants.CHANGE_WIDTH,
    data: data
  }
}