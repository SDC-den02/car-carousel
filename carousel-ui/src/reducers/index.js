import { combineReducers } from 'redux';
import { loading } from './loading';
import { error } from './error';
import { cars } from './cars';

export const rootReducer = combineReducers({
  loading,
  error,
  cars
});