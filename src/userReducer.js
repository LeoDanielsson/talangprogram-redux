import { LOG_IN, LOG_OUT } from './actionTypes';

const initialState = null;

const reducer = (user = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...user, name: action.userName };
    case LOG_OUT:
      return null;
    default:
      return user;
  }
};

export default reducer;
