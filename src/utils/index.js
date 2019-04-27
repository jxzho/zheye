export const defaultAvatar =
  "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png";

export const local = (key, data = null) => {
  if (!data) {
    const getStr = localStorage.getItem(key); // get
    return JSON.parse(getStr);
  } else {
    const setStr = JSON.stringify(data); // set
    localStorage.setItem(key, setStr);
  }
};

export const stripHTML = htmlStr => {
  return htmlStr.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s/g, "");
};

export const timeFormat = time => {
  let second = parseInt(time < 60 ? time : time % 60);
  let minues = parseInt(time / 60 < 60 ? time / 60 : (time / 60) % 60);
  let hour = parseInt(time / 3600 < 60 ? time / 3600 : (time / 3600) % 60);
  second = second < 10 ? `0${second}` : second;
  minues = minues < 10 ? `0${minues}` : minues;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${minues}:${second}`;
};

export const querystringParse = url => {
  const reqExp = /([^=?&]+)=([^=?&+]+)/g;
  let obj = {};
  url.replace(reqExp, (...args) => {
    obj[args[1]] = args[2];
  });
  return obj;
};
