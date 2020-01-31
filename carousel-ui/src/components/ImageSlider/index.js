import React, { useEffect, useReducer } from 'react';
import { imageSlider } from '../../reducers/imageSlider';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const ImageSlider = ({ images, handleClick }) => {
  const initialState = { images, current: 0 };
  const [state, dispatch] = useReducer(imageSlider, initialState);
  const { current, splitImages } = state;
  let displayImages;

  useEffect(() => {
    dispatch({ type: 'SPLIT_IMAGES' });
  }, [current]);

  if (splitImages) {
    displayImages = splitImages[current].map(image => <img src={image.image} key={image.id} className='slider-images' alt='' onClick={() => handleClick(image.arrIdx)} />)
  }

  const handlePreviousSlide = () => {
    dispatch({ type: 'PREVIOUS_SLIDE' });
  }

  const handleNextSlide = () => {
    dispatch({ type: 'NEXT_SLIDE' });
  }

  return (
    splitImages ?
    <div className='image-slider__container'>
      <div className='arrow-container'>
        <ArrowLeftIcon className={'slider-icon ' + (current === 0 ? 'disabled-btn' : 'active')} fontSize='large' onClick={handlePreviousSlide}/>
      </div>
      {displayImages}
      <div className='arrow-container'>
        <ArrowRightIcon className={'slider-icon ' + (current === splitImages.length - 1 ? 'disabled-btn' : 'active')} fontSize='large' onClick={handleNextSlide} />
      </div>
    </div> :
    <div><h1>Loading...</h1></div>
  )
}
