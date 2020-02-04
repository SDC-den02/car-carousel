import * as actions from '../index';

describe('actions', () => {
  describe('setLoading', () => {
    it('should return an object with setLoading and isLoading is true', () => {
      const expected = { type: 'SET_LOADING', isLoading: true };
      const results = actions.setLoading(true);
      expect(results).toEqual(expected);
    });

    it('should return an object with setLoading and isLoading to false', () => {
      const expected = { type: 'SET_LOADING', isLoading: false };
      const results = actions.setLoading(false);
      expect(results).toEqual(expected);
    });

  });

  describe('setError', () => {
    it('should return a type of hasError with an error message', () => {
      const mockError = 'An error has occured.';
      const expected = { type: 'SET_ERROR', error: mockError };
      const result = actions.setError(mockError);
      expect(result).toEqual(expected);
    });
  });

  describe('setCars', () => {
    it('should return a type of setCars with the data of cars', () => {
      const mockCars = [
        {
          id: 1, make: 'Ford', model: 'Focus', images: [
            {id: 2, image: 'www.mockurl.com', car_id: 1}
          ]
        },
        {
          id: 2, make: 'Mercedes', model: 'benz', images: [
            {id: 2, image: 'www.mockurl.com', car_id: 2}
          ]
        }
      ];
      const expected = { type: 'SET_CARS', cars: mockCars };
      const result = actions.setCars(mockCars);
      expect(result).toEqual(expected);
    });
  });

  describe('nextImage', () => {
    if ('should return a type of nextImage with the current state and the next image', () => {
      const images = [
        { id: 10, image: 'www.mockurl.com', car_id: 2 },
        { id: 11, image: 'www.mockurl2.com', car_id: 2 },
        { id: 12, image: 'www.mockurl3.com', car_id: 2 }
      ]
      const mockState = {
        images,
        current: 0
      }

      const expected = { type: 'NEXT_IMAGE', image: mockState };
      const result = actions.nextImage(mockState);
      expect(result).toEqual(expected);

    });
  });
});