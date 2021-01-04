import React, { useState } from 'react';
import { render } from 'react-dom';
import { NavLink, useHistory } from 'react-router-dom'
import '../Common.css';
import './Header.css';
import SignIn from '../signIn/SignIn';
export default function Header(props) {
    let isUserLoggedIn = false;
    let users = localStorage.getItem("users"), user, compToRender;
    const history = useHistory();
    if (users) {
        users = JSON.parse(users);
    }
    if (sessionStorage.getItem("email") != null) {

        isUserLoggedIn = true;
        user = users.find(u => u.email === sessionStorage.getItem("email"));
    }
    function signOutUser() {
        sessionStorage.removeItem("email");
    }
    function onClicksignUp() {
        props.signinToken(false);
        props.signupToken(true);
    }
    function onClicksignIn() {
        props.signupToken(false);
        props.signinToken(true);
    }
    if (!isUserLoggedIn)
        return (
            <>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        {/* <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a> */}
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">
                                Home
                             </a>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                    More
            </a>
                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        About
              </a>
                                    <a class="navbar-item">
                                        Contact
              </a>
                                    <hr class="navbar-divider" />
                                    <a class="navbar-item">
                                        Report an issue
              </a>
                                </div>
                            </div>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a class="button is-primary">
                                        <strong onClick={onClicksignUp}>Sign up</strong>
                                    </a>
                                    <a class="button is-light" onClick={onClicksignIn}>
                                        Sign in
              </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {compToRender}
            </>
        );

    else
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    {/* <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a> */}
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Home
                 </a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    About
                                </a>
                                <a class="navbar-item">
                                    Jobs
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            Welcome {JSON.stringify(user.firstName)}
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">

                                </a>
                                <div class="navbar-dropdown">
                                    <a onClick={signOutUser} class="navbar-item">
                                        Sign out
              </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );

}