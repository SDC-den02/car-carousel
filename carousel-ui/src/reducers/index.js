import { combineReducers } from 'redux';
import { loading } from './loading';
import { error } from './error';
import { cars } from './cars';
import { carousel } from './carousel';
import { imageSlider } from './imageSlider';

export const rootReducer = combineReducers({
  loading,
  error,
  cars,
  carousel,
  imageSlider
});