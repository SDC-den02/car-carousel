import React from 'react'

export const ImageSlider = ({ images }) => {
  // console.log(images);
  const displayImages = images.map(image => <img src={image.image} key={image.id} className='slider-images' />)
  return (
    <div className='image-slider__container'>
      {displayImages}
    </div>
  )
}
