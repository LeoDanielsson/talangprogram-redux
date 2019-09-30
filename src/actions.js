import { LOG_IN, LOG_OUT, ADD_TODO, DELETE_TODO } from './actionTypes';

export const logIn = userName => ({ type: LOG_IN, userName });
export const logOut = () => ({ type: LOG_OUT });

export const addTodo = text => ({
  type: ADD_TODO,
  text,
  id: new Date().getTime()
});

export const deleteTodo = id => ({ type: DELETE_TODO, id });
