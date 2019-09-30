import { LOG_IN, LOG_OUT } from './actionTypes';

export const logIn = userName => ({ type: LOG_IN, userName });
export const logOut = () => ({ type: LOG_OUT });
