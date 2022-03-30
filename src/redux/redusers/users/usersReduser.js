import { usersActionTypes } from "./usersActionTypes";

const defaultState = {
  users: [],
  currentUser: null,
  isLoadingUsers: false,
  isLoadingCurrentUser: false,
  usersError: "",
  currentUserError: "",
};

export default function usersReducers(state = defaultState, action) {
  switch (action.type) {
    case usersActionTypes.USERS_LOAD_START:
      return { ...state, isLoadingUsers: true };
    case usersActionTypes.USERS_LOAD_SUCCESS:
      return { ...state, isLoadingUsers: false, users: action.payload };
    case usersActionTypes.USERS_LOAD_ERROR:
      return { ...state, usersError: action.payload };
    case usersActionTypes.LOAD_CURRENT_USER:
      return { ...state, isLoadingCurrentUser: true };
    case usersActionTypes.LOAD_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isLoadingCurrentUser: false,
        currentUser: action.payload,
      };
    case usersActionTypes.LOAD_CURRENT_USER_ERROR:
      return { ...state, currentUserError: action.payload };
    default:
      return state;
  }
}
