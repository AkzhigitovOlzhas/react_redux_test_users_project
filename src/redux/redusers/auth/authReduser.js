import authActionTypes from "./authActionTypes";

 
const defaultState = {
  isAuth: localStorage.getItem("access_token") ? true : false,
  isReg: false,
  isLoading: false,
  error: "",
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case authActionTypes.LOAD_AUTH_START:
      return { ...state, isLoading: true, error: "" };
    case authActionTypes.LOAD_AUTH_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, error: "" };
    case authActionTypes.LOAD_AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: action.payload,
      };
    case authActionTypes.SET_REG:
      return {
        ...state,
        auth: false,
        isLoading: false,
        error: "",
        isReg: action.payload,
      };
    case authActionTypes.LOGOUT:
      return {
        isAuth: false,
        isReg: false,
        isLoading: false,
        error: "",
      };
    default:
      return state;
  }
}
