export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setLoading = isLoading => ({
  type: 'SET_LOADING',
  isLoading
});

export const setCars = cars => ({
  type: 'SET_CARS',
  cars
});

export const setImages = images => ({
  type: 'SET_IMAGES',
  images
});

export const nextImage = image => ({
  type: 'NEXT_IMAGE',
  image
});

export const previousImage = image => ({
  type: 'PREVIOUS_IMAGE',
  image
});

export const currentImage = image => ({
  type: 'CURRENT_IMAGE',
  image
});

export const splitImages = images => ({
  type: 'SPLIT_IMAGES',
  images
});

export const nextSlide = slide => ({
  type: 'NEXT_SLIDE',
  slide
});

export const previousSlide = slide => ({
  type: 'PREVIOUS_SLIDE',
  slide
});