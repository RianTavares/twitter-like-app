import { combineReducers } from 'redux';
import pages from './pages';
import tweets from './tweets';

export default combineReducers({
  tweets,
  pages,
});
