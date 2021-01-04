import { render } from '@testing-library/react';
import React, { useState } from 'react';
import '../Common.css';
import SignIn from '../signIn/SignIn';
import SignUp from '../SignUp/Signup';
import User from "../user/User";

export default function HomePage(props) {
  let userExistsOrNot = sessionStorage.getItem("email");
  const [userSignedIn, setUserSignedIn] = useState(false);
  if(sessionStorage.getItem("email") != null)
  {
      setUserSignedIn(true);
  }
  
  if(props.signinToken)
  {
    return (
      <div className="wrapper">
        Welcome to Home Page
        <SignIn setUserToke={props.setUserToken}/>
      </div>
    );
  }
  else if(props.signupToken)
  {
    return (
      <div className="wrapper">
        Welcome to Home Page
        <SignUp />
      </div>
    );
  }
  else if(userSignedIn)
  {
    return (
      <div className="wrapper">
       
        <User />
      </div>
    );
  }
  else{
    return (
      <div className="wrapper">
        Welcome to Home Page
        
      </div>
    );
  }
  
  
}
