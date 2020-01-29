import React, { useState, useEffect } from 'react';
import { ImageSlider } from '../ImageSlider';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export const Carousel = ({ images }) => {

  // id, make, model, year,
  console.log(images);
  const [current, setCurrent] = useState(0);
  console.log(images[current]);

  useEffect(() => {
    const next = (current + 1) % images.length;
  }, [current]);

  return (
    <div className='carousel-container'>
      <div className='main-carousel'>
        <div className='main-diplay__wrapper'>
          <img src={images[current].image} className='current-img__display' />
        </div>
        <div className='arrow-container previous-arrow'>
          <ArrowLeftIcon fontSize='large' className='icon-styles' />
        </div>
        <div className='arrow-container next-arrow'>
          <ArrowRightIcon fontSize='large' className='icon-styles' />
        </div>
      </div>
      <div className='image-slider'>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}