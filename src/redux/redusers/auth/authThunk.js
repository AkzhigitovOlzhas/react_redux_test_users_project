import AuthService from "../../../services/AuthService";
import authAction from "./authAction";

export const asyncSignIn = (userData) => async (dispatch) => {
  dispatch(authAction.loadAuthStart());

  try {
    const response = await AuthService.singIn(userData);
    localStorage.setItem("access_token", response.data.token);
    dispatch(authAction.loadAuthSuccess());
  } catch (err) {
    dispatch(authAction.loadAuthError(err.response.data.message));
  }
};

export const asyncSignUp = (userData) => async (dispatch) => {
  dispatch(authAction.loadAuthStart());

  try {
    await AuthService.singUp(userData);
    dispatch(authAction.setReg(true));
  } catch (err) {
    dispatch(authAction.loadAuthError(err.response.data.message));
  }
};
