import { setLoading, setError, setCars } from '../actions';
import { fetchData } from '../utils/fetchData';
import { combineData } from '../utils/combineData';

export const getAllCars = () => {
  const carsUrl = process.env.REACT_APP_BACKEND_URL + '/cars';
  const imagesUrl = process.env.REACT_APP_BACKEND_URL + '/images';
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const allCars = await fetchData(carsUrl);
      const allImages = await fetchData(imagesUrl);
      dispatch(setLoading(false));
      const combinedData = combineData(allCars, allImages);
      dispatch(setCars(combinedData));
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}