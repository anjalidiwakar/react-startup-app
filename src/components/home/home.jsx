import React from 'react';
import '../Common.css';
import SignIn from '../signIn/SignIn';
import SignUp from '../SignUp/Signup';
import  User  from "../user/User";
import Admin from '../admin/Admin';
import { useSelector } from 'react-redux'

export default function HomePage(props) {
  const isLoggedIn = useSelector((state) => state.checkLogin.state_User_Logged_In);
  let role = sessionStorage.getItem("role");
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
  // else if (isLoggedIn) {
  //   return (
  //     <div className="wrapper">
  //        { role==="User" && <User /> }
  //        { role==="Admin" && <Admin /> }
  //     </div>
  //   );
  // }
  else {
    return (
      <div className="wrapper">
        Welcome to Home Page {signupToken}
      </div>
    );
  }
}
