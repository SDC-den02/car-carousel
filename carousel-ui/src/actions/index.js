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