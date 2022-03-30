import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SingUpForm } from "../components";
import authAction from "../redux/redusers/auth/authAction";

export const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.logout());
  }, [dispatch]);
  return (
    <div className="center">
      <div className="form">
        <div className="title">Register</div>
        <SingUpForm />
      </div>
    </div>
  );
};
