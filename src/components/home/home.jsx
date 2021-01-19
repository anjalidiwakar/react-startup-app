import React from 'react';
import '../Common.css';
import SignIn from '../signIn/SignIn';
import SignUp from '../SignUp/Signup';
import User from "../user/User";
import { useSelector } from 'react-redux'

export default function HomePage(props) {
  let userSignedIn = false;
  if (sessionStorage.getItem("email") != null) {
    userSignedIn = true;
  }
  let signinToken = useSelector((state) => state.signIn.state_SignInForm)
  let signupToken = useSelector((state) => state.signUp.state_SignUpForm)
  if (signinToken) {
    return (
      <div className="wrapper">
        Welcome to Home Page
        <SignIn />
      </div>
    );
  }
  else if (signupToken) {
    return (
      <div className="wrapper">
        Welcome to Home Page
        <SignUp />
      </div>
    );
  }
  else if (userSignedIn) {
    return (
      <div className="wrapper">
        <User />
      </div>
    );
  }
  else {
    return (
      <div className="wrapper">
        Welcome to Home Page {signupToken}
      </div>
    );
  }
}
