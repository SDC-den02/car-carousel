import React, { useState, useEffect, useReducer } from 'react';
import { imageSlider } from '../../reducers/imageSlider';
// import { Slides } from './Slide';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const ImageSlider = ({ images }) => {
  const initialState = { images, current: 0 };
  const [state, dispatch] = useReducer(imageSlider, initialState);
  const { current, splitImages } = state;
  let displayImages;

  useEffect(() => {
    dispatch({ type: 'SPLIT_IMAGES' });
    console.log(state);
  }, [current]);

  if (splitImages) {
    displayImages = splitImages[current].map(image => <img src={image.image} key={image.id} className='slider-images' alt='' />)
  }
console.log(state);
  let [currentIdx, setCurrentIdx] = useState(0);

  const handlePreviousSlide = () => {
    dispatch({ type: 'PREVIOUS_SLIDE' });
  }

  const handleNextSlide = () => {
    dispatch({ type: 'NEXT_SLIDE' });
  }

  return (
    <div className='image-slider__container'>
      <div className='arrow-container'>
        <ArrowLeftIcon className='slider-icon' fontSize='large' onClick={handlePreviousSlide}/>
      </div>
      {displayImages}
      <div className='arrow-container'>
        <ArrowRightIcon className='slider-icon' fontSize='large' onClick={handleNextSlide} />
      </div>
    </div>
  )
}
