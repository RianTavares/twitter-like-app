import { combineReducers } from 'redux';
import modals from './modals';
import pages from './pages';
import tweets from './tweets';

export default combineReducers({
  tweets,
  pages,
  modals,
});
