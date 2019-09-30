import { ADD_TODO, DELETE_TODO } from './actionTypes';

const initialState = [];

const reducer = (todos = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return todos.filter(todo => todo.id !== action.id);
    default:
      return todos;
  }
};

export default reducer;
