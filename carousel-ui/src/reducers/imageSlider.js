export const imageSlider = (state = {}, action) => {
  switch (action.type) {
    case 'SPLIT_IMAGES':
      const { length } = state.images;
      const { images } = state;
      let index = 0;
      let splitImages = [];
      // console.log('images in reducer: ', images);
      let newImages = images.map((image, i) => {
        return { ...image, arrIdx: i };
      })
      while (index < length) {
        if (index % 5 === 0) splitImages.push([]);
        splitImages[splitImages.length - 1].push(newImages[index++]);
      }
      return { ...state, splitImages: splitImages };
    case 'NEXT_SLIDE':
      if (state.current < state.splitImages.length - 1) {
        return { ...state, next: state.current++ }
      }
      return { ...state, next: state.current };
    case 'PREVIOUS_SLIDE':
      if (state.current < state.splitImages.length && state.current > 0) {
        return { ...state, previous: state.current-- };
      }
      return { ...state, previous: state.current }
    default:
      return state;
    }
}