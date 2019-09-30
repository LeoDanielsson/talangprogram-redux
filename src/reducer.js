import { LOG_IN, LOG_OUT } from './actionTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, user: { name: action.userName } };
    case LOG_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducer;
