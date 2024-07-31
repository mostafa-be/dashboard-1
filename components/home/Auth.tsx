"use client";
import React, { useState } from "react";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import SignIn from "./SignIn";
type Props = {};

const Auth = (props: Props) => {
  const [auth, setAuth] = useState(1);
  return (
    <>
      {auth === 1 && <Login setAuth={setAuth} />}
      {auth === 2 && <ForgotPassword setAuth={setAuth} />}
    </>
  );
};

export default Auth;
