import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SignIn from '../signIn/SignIn';
import PrimaryButton from '../buttons/PrimaryButton';
import ActivePolls from '../polls/active-Poll/activePolls'
import ClosedPolls from '../polls/closed-Polls/ClosedPolls'
import Popup from 'reactjs-popup';

function NavigateToPortal() {
}
function Button(props) {
  const handleClick = () => NavigateToPortal();
  return <button onClick={handleClick}> {props.role}</button>
}
export default function User() {

  const [userRequest, setUserRequest] = useState("Sign In");
  const userLoggedOut = useSelector((state) => state.signOut.state_SignOut);
  let compToRender = null;
  function checkActivePollHandler() {
    setUserRequest("Check Active Polls");
  }
  function checkClosedPollsHandler() {
    setUserRequest("Check Closed Polls");
  }

  switch (userRequest) {
    case "Check Active Polls":
      compToRender = <ActivePolls />
      break;
    case "Check Closed Polls":
      compToRender = <ClosedPolls />
      break;
    case "Sign In":
      compToRender = <SignIn />
      break;
    default:
  }

  if (userLoggedOut == null || userRequest != "Sign In") {
    return (
      compToRender
    )
  }
  else {
    return (
      <div >
        <ul>
          <li>
            <PrimaryButton text={'Check Active Polls'} callBack={checkActivePollHandler} />
          </li>
          <li>
            <PrimaryButton text={'Check Closed Polls'} callBack={checkClosedPollsHandler} />
          </li>
           {/* <Popup trigger={ <PrimaryButton text={'Check Active Polls'} />} position="right center">
          <div><ActivePolls /></div>
        </Popup>
        </li>
        <li>
        <Popup trigger={  <PrimaryButton text={'Check Closed Polls'} callBack={checkClosedPollsHandler} />} position="right center">
          <div><ClosedPolls /></div>
        </Popup>
        </li> */}
        </ul>
        {/* <Popup trigger={ <PrimaryButton text={'Check Active Polls'} callBack={checkActivePollHandler} />} position="right center">
          <div><ActivePolls /></div>
        </Popup>
        <Popup trigger={  <PrimaryButton text={'Check Closed Polls'} callBack={checkClosedPollsHandler} />} position="right center">
          <div><ActivePolls /></div>
        </Popup> */}
      </div>
    );
  }
}

