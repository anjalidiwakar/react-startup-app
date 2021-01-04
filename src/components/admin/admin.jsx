import React, { useState } from 'react';
import SignUp from '../SignUp/Signup';
import SignIn from '../signIn/SignIn';
import '../Common.css';
import './Admin.css';

export default function Admin() {
  let renderPortal = false;
  if (sessionStorage.getItem("email") != null && sessionStorage.getItem("password") != null && sessionStorage.getItem("role") === "admin") {
    renderPortal = true;
  }
  if (renderPortal) {
    return (
      <>
        <div className="center">
          <div >Welcome to Admin portal</div>
          <div className="right"> Create a poll! </div><span>click here</span>
        </div>
        <div class="columns">
          <div class="column">
            First column
            </div>
          <div class="column">
            Second column
            </div>
          <div class="column">
            Third column
            </div>
          <div class="column">
            Fourth column
            </div>
        </div>
        <article class="message">
          <p>Hello Worl</p>
        </article>
      </>
    );

  }
  else {
    return (
      <>
        <SignIn />
      </>
    );
  }
};