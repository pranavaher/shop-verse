import React from "react";
import SignIn from "../../components/Sign-In/SignIn";
import SignUp from "../../components/Sign-Up/SignUp";

import "./SignInAndSignUp.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
