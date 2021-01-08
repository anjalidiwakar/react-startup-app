import React from 'react';
import { useSelector } from 'react-redux';
import SignIn from '../signIn/SignIn';
import SignUp from '../SignUp/Signup';
import ActivePolls from '../polls/active-Poll/activePolls'

function NavigateToPortal() {
}
function Button(props) {
  const handleClick = () => NavigateToPortal();
  return <button onClick={handleClick}> {props.role}</button>
}
export default function User() {
  const userLoggedOut = useSelector((state) => state.signOut.state_SignOut)
  const signUpForm = useSelector((state) => state.signUp.state_SignUpForm)
  if (userLoggedOut === false) {
    return (
      <div>
        <div>Welcome to User portal</div>
        <div> Check out active polls!</div>
        <ActivePolls />
      </div>
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
}

