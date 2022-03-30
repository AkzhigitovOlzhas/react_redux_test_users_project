import { Dropdown, Menu } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../../redux/redusers/auth/authAction";
import { loadCurrentUserAsync } from "../../redux/redusers/users/usersThunk";
import "./index.css";

export const Header = () => {
  const { currentUser, currentUserError } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentUserAsync());
  }, [dispatch]);

  const menu = (
    <Menu>
      <Menu.Item onClick={() => dispatch(authAction.logout())}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <div className="header__logo">Main</div>

      {currentUserError ? (
        <div className="header__user">{currentUserError}</div>
      ) : (
        <Dropdown overlay={menu}>
          {!currentUser ? (
            <div>Loading...</div>
          ) : (
            <div className="header__user">
              {currentUser.name} | {currentUser.email}
            </div>
          )}
        </Dropdown>
      )}
    </div>
  );
};
