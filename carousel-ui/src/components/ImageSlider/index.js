import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const ImageSlider = ({ images }) => {
  // console.log(images);
  const displayImages = images.map(image => <img src={image.image} key={image.id} className='slider-images' alt='' />)
  return (
    <div className='image-slider__container'>
      <ArrowLeftIcon fontSize='large' />
      {displayImages}
      <ArrowRightIcon />
    </div>
  )
}
