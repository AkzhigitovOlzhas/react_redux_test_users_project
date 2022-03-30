import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SignInForm } from "../components/Forms";
import authAction from "../redux/redusers/auth/authAction";
import "./pages.css";

export const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.logout());
  }, [dispatch]);

  return (
    <div className="center">
      <div className="form">
        <div className="title">Login</div>
        <SignInForm />
      </div>
    </div>
  );
};
