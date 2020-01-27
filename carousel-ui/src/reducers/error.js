export const error = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.error;
    default:
      return state;
  }
}