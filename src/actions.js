import {
  LOG_IN,
  LOG_OUT,
  ADD_TODO,
  DELETE_TODO,
  START_FETCHING_DOGS,
  DOGS_FETCHED,
  FETCH_DOGS_FAILED
} from './actionTypes';

export const logIn = userName => ({ type: LOG_IN, userName });
export const logOut = () => ({ type: LOG_OUT });

export const addTodo = text => ({
  type: ADD_TODO,
  text,
  id: new Date().getTime()
});

export const deleteTodo = id => ({ type: DELETE_TODO, id });

export const startFetchingDogs = () => ({ type: START_FETCHING_DOGS });

export const dogsFetched = dogs => ({ type: DOGS_FETCHED, dogs });

export const fetchDogsFailed = () => ({ type: FETCH_DOGS_FAILED });

export const fetchDogs = () => async dispatch => {
  dispatch(startFetchingDogs());
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const json = await response.json();
    const dogs = Object.keys(json.message);
    dispatch(dogsFetched(dogs));
  } catch {
    dispatch(fetchDogsFailed());
  }
};
