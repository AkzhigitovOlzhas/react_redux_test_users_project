import authActionTypes from "./authActionTypes";

const loadAuthStart = () => ({
  type: authActionTypes.LOAD_AUTH_START,
});

const loadAuthSuccess = () => ({
  type: authActionTypes.LOAD_AUTH_SUCCESS,
});

const loadAuthError = (error) => ({
  type: authActionTypes.LOAD_AUTH_ERROR,
  payload: error,
});

const setReg = (bool) => ({
  type: authActionTypes.SET_REG,
  payload: bool,
});

const logout = () => {
  localStorage.removeItem("access_token");
  return {
    type: authActionTypes.LOGOUT,
  };
};

export default {
  logout,
  setReg,
  loadAuthStart,
  loadAuthSuccess,
  loadAuthError,
};
