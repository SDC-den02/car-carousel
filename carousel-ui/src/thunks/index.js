import { setLoading, setError, setCars } from '../actions';
import { fetchData } from '../utils/fetchData';

export const getAllCars = () => {
  const carsUrl = process.env.REACT_APP_BACKEND_URL + '/cars';
  const imagesUrl = process.env.REACT_APP_BACKEND_URL + '/images';
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const allCars = await fetchData(carsUrl);
      const allImages = await fetchData(imagesUrl);
      dispatch(actions.setLoading(false));
    } catch (err) {
      dispatch(actions.setError(err.message));
    }
  }
}