import React, { useState, useEffect } from 'react';
import { ImageSlider } from '../ImageSlider';

export const Carousel = ({ id, make, model, year, images }) => {
  console.log(images);
  const [current, setCurrent] = useState(0);
  console.log(images[current]);

  useEffect(() => {
    const next = (current + 1) % images.length;
  }, [current]);

  return (
    <div className='carousel-container'>
      <div className='main-carousel'>
        <img src={images[current].image} />
      </div>
      <div className='image-slider'>
        <ImageSlider images={images} />
      </div>
    </div>
  )
}
