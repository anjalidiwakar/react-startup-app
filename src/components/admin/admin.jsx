import React, { useState } from 'react';
import SignUp from '../SignUp/Signup';
import SignIn from '../signIn/SignIn';
import '../Common.css';
import './Admin.css';
import { useSelector } from 'react-redux';
import PollForm from '../polls/add-Poll/addPoll'
import AdminPolls from '../polls/adminView_Poll/AdminViewPolls'
import PrimaryButton from '../buttons/PrimaryButton';
import ClosedPolls from '../polls/closed-Polls/ClosedPolls';


export default function Admin() {
  const [adminRequest, setAdminRequest] = useState("Sign In");
  const userLoggedOut = useSelector((state) => state.signOut.state_SignOut);
  let compToRender = null;
  function createPollHandle() {
    setAdminRequest("Add Poll");
  }
  function checkActivePollHandler() {
    setAdminRequest("Check Active Polls");
  }
  function checkClosedPollsHandler() {
    alert("closed")
    setAdminRequest("Check Closed Polls");
  }
  
  switch (adminRequest) {
    case "Add Poll":
      compToRender = <PollForm />
      break;
    case "Check Active Polls":
      compToRender = <AdminPolls />
      break;
    case "Check Closed Polls":
      compToRender = <ClosedPolls />
      break;
    case "Sign In": 
      compToRender= <SignIn />
      break;
    case "Admin Panel":
      
    break;
    default:
  }

  if(userLoggedOut==null  || adminRequest!="Sign In")
  {
    return (
      compToRender
    )
  }
  else
  {
    return (
      <div >Welcome to Admin portal
      <ul>
        <li>
          <PrimaryButton text={'Create a poll!'} callBack={createPollHandle} />
        </li>
        <li>
          <PrimaryButton text={'Check Active Polls here'} callBack={checkActivePollHandler} />
        </li>
        <li>
          <PrimaryButton text={'Check Closed Polls here'} callBack={checkClosedPollsHandler} />
        </li>
      </ul>
    </div>
    );
  }
 
};