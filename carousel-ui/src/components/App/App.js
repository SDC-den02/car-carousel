import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../thunks';
import { Carousel } from '../Carousel';

const App = () => {
  const { cars } = useSelector(state => ({
    cars: state.cars
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <div>
      <h1>Car Carousel</h1>
      <Carousel {...cars}/>
    </div>
  );
}

export default App;
