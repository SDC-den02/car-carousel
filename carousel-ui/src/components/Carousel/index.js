import React, { useEffect, useReducer } from 'react';
import { ImageSlider } from '../ImageSlider';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { carousel } from '../../reducers/carousel';

export const Carousel = ({ images }) => {

  const initialState = {images, current: 0}
  const [state, dispatch] = useReducer(carousel, initialState);
  const { current } = state;

  const handleNext = () => {
    dispatch({ type: 'NEXT_IMAGE' });
  }

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_IMAGE' });
  }

  const handleChangeMain = index => {
    dispatch({ type: 'CURRENT_IMAGE', payload: index });
  }

  useEffect(() => {
  }, [current]);
  console.log(state);

  return (
    <div className='carousel-container'>
      <div className='main-carousel'>
        <div className='main-diplay__wrapper'>
          <img src={images[current].image} className='current-img__display' alt={images[current].id} />
        </div>
        <div className='arrow-container previous-arrow'>
          <ArrowLeftIcon
            fontSize='large'
            className={'icon-styles ' + (current === 0 ? 'hidden' : 'visible')}
            onClick={handlePrevious}
          />
        </div>
        <div className='arrow-container next-arrow'>
          <ArrowRightIcon
            fontSize='large'
            className={'icon-styles ' + (current === images.length - 1 ? 'hidden' : 'visible')}
            onClick={handleNext}
          />
        </div>
      </div>
      <ImageSlider images={images} handleClick={handleChangeMain} />
    </div>
  );
}