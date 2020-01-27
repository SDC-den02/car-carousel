import { combineReducers } from 'redux';
import { loading } from './loading';
import { error } from './error';

export const rootReducer = combineReducers({
  loading,
  error
});