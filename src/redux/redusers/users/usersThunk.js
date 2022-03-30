import UsersService from "../../../services/UsersService";
import usersAction from "./usersAction";

export const loadUsersAsync = () => async (dispatch) => {
  dispatch(usersAction.usersLoadStart());

  try {
    const response = await UsersService.getAllUsers();
    dispatch(usersAction.usersLoadSuccess(response.data));
  } catch (err) {
    dispatch(usersAction.usersLoadError(err.response.data.message));
  }
};

export const loadCurrentUserAsync = () => async (dispatch) => {
  dispatch(usersAction.loadCurrentUser());

  try {
    const response = await UsersService.getMe();
    dispatch(usersAction.loadCurrentUserSuccess(response.data));
  } catch (err) {
    dispatch(usersAction.loadCurrentUserError(err.response.data.message));
  }
};
