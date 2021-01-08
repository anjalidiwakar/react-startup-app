import React, { useState } from 'react';
import SignUp from '../SignUp/Signup';
import SignIn from '../signIn/SignIn';
import '../Common.css';
import './Admin.css';
import { useSelector } from 'react-redux';
import PollForm from '../polls/add-Poll/addPoll'
import AdminPolls from '../polls/adminView_Poll/AdminViewPolls'
import PrimaryButton from '../buttons/PrimaryButton';

export default function Admin() {
  const userLoggedOut = useSelector((state) => state.signOut.state_SignOut);
  const signUpForm = useSelector((state) => state.signUp.state_SignUpForm);
  const [addPollRequest, setAddPollrequest] = useState(false);
  const [chechActivePolls, setCheckActivePolls] = useState(false);
  function createPollHandle() {
    setAddPollrequest(true);
  }
  function checkActivePollHandler() {
    setCheckActivePolls(true);
  }
  if (addPollRequest) {
    return (
      <>
        <PollForm />
      </>
    )
  }
  else if (chechActivePolls) {
    return (
      <>
        <AdminPolls />
      </>
    )
  }
  else if (userLoggedOut === false && !addPollRequest) {
    return (
      <>
        <div className="center">
          <div >Welcome to Admin portal</div>
          <ul>
            <li>
              <PrimaryButton text={'Create a poll!'} callBack={createPollHandle} />
            </li>
            <li>
              <PrimaryButton text={'Check Active Polls here'} callBack={checkActivePollHandler} />
            </li>
          </ul>
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