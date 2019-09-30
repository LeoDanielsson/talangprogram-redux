import {
  START_FETCHING_DOGS,
  DOGS_FETCHED,
  FETCH_DOGS_FAILED
} from './actionTypes';

const initialState = {
  dogs: [],
  loading: false,
  error: false
};

const reducer = (dog = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_DOGS:
      return { ...dog, dogs: [], loading: true, error: false };
    case DOGS_FETCHED:
      return { ...dog, dogs: action.dogs, loading: false };
    case FETCH_DOGS_FAILED:
      return { ...dog, dogs: [], loading: false, error: true };
    default:
      return dog;
  }
};

export default reducer;
