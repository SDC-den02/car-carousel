export const combineData = (cars, images) => {
  const combinedData = cars.map(car => {
    const { id, make, model, year } = car;
    let carData = { id, make, model, year, images: [] };
    images.forEach(image => {
      if (id === image.car_id) {
        carData.images.push(image);
      }
    });
    return carData;
  });
  return combinedData;
}