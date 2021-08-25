import { combineReducers } from 'redux';
import { pageReducee } from './page';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  page: pageReducee,
  user: userReducer,
});
