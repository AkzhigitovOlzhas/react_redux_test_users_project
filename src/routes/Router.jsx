import { Login, Main, NotFound, Register } from "../views";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

export const Router = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="reg" element={<Register />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
