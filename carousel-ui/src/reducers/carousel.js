export const carousel = (state = {}, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return { images: state.images, ...state };
    case 'NEXT_IMAGE':
      if (state.current < state.images.length - 1) {
        return { ...state, next: state.current++ };
      } else {
        return { ...state, next: state.current };
      };
    case 'PREVIOUS_IMAGE':
      if (state.current < state.images.length && state.current > 0) {
        return { ...state, previous: state.current-- };
      } else {
        return { ...state, previous: state.current };
      }
    case 'CURRENT_IMAGE':
      return { ...state, current: action.payload };
    default:
      return state;
  }
}