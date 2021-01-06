import React, { useState } from 'react';
import SignUp from '../SignUp/Signup';
import SignIn from '../signIn/SignIn';
import '../Common.css';
import './Admin.css';
import { useSelector } from 'react-redux';

export default function Admin() {
  const userLoggedOut = useSelector((state) => state.signOut.state_SignOut)
  const signUpForm = useSelector((state) => state.signUp.state_SignUpForm)
  if (userLoggedOut === false) {
    return (
      <>
        <div className="center">
          <div >Welcome to Admin portal</div>
          <div className="right"> Create a poll! </div><span>click here</span>
        </div>
      </>
    );

  }
  else {
    if (signUpForm) {
      return (
        <>
          <SignUp />
        </>
      );
    }
    else
      return (
        <>
          <SignIn />
        </>
      );
  }
};