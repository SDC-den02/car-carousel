import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getAllCars } from '../../thunks';
import { Carousel } from '../Carousel';
import { PageNotFound } from '../PageNotFound';

const App = () => {
  const { cars, loading } = useSelector(state => ({
    cars: state.cars,
    loading: state.loading
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
      {!loading ?
      <Switch>
        <Route exact path='/cars/:id' render={({ match }) => {
          const { id } = match.params;
          const car = findCar(parseInt(id));
          return car ? <Carousel {...car} /> : <PageNotFound />;
        }} />
      </Switch> :
      <h1>Loading...</h1>
    }
    </div>
  );
}

export default App;
