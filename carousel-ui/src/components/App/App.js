import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getAllCars } from '../../thunks';
import { Carousel } from '../Carousel';
import { PageNotFound } from '../PageNotFound';

const App = () => {
  const { cars } = useSelector(state => ({
    cars: state.cars
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  const findCar = id => {
    const car = cars.find(car => car.id === id);
    return car;
  }

  return (
    <div className='app-container'>
      <h1>Car Carousel</h1>
      <Switch>
        <Route exact path='/cars/:id' render={({ match }) => {
          const car = findCar(parseInt(match.params.id));
          return car ? <Carousel {...car} /> : <PageNotFound />;
        }} />
      </Switch>
    </div>
  );
}

export default App;
