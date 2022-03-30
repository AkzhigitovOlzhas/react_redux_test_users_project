import { usersActionTypes } from "./usersActionTypes";

const usersLoadStart = () => ({ type: usersActionTypes.USERS_LOAD_START });

const usersLoadSuccess = (users) => ({
  type: usersActionTypes.USERS_LOAD_SUCCESS,
  payload: users,
});

const usersLoadError = (error) => ({
  type: usersActionTypes.USERS_LOAD_ERROR,
  payload: error,
});

const loadCurrentUser = () => ({
  type: usersActionTypes.LOAD_CURRENT_USER,
});

const loadCurrentUserSuccess = (users) => ({
  type: usersActionTypes.LOAD_CURRENT_USER_SUCCESS,
  payload: users,
});

const loadCurrentUserError = (error) => ({
  type: usersActionTypes.LOAD_CURRENT_USER_ERROR,
  payload: error,
});

export default {
  usersLoadStart,
  usersLoadSuccess,
  usersLoadError,
  loadCurrentUser,
  loadCurrentUserSuccess,
  loadCurrentUserError,
};
