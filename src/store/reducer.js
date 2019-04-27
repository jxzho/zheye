import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as userReducer } from '../common/user/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as practiceReducer } from '../pages/practice/store';
import { reducer as modalReducer } from '../common/modal/store';
import { reducer as writeReduer } from '../pages/write/store';
import { reducer as forumReducer } from '../pages/forum/store';

const reducer = combineReducers({
  header: headerReducer,
  user: userReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
  practice: practiceReducer,
  modal: modalReducer,
  write: writeReduer,
  forum: forumReducer
});

export default reducer;

