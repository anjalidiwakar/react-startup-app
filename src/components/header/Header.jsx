import React from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../Common.css';
import './Header.css';
import { showSignInForm } from '../../redux/signIn/signInAction'
import { showSignUpForm } from '../../redux/signUp/signUpAction'

function Header(props) {
    let isUserLoggedIn = false;
    let users = localStorage.getItem("users"), user;
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
        props.showSignIn(false);
        props.showSignUp(true);

    }
    function onClicksignIn() {
        props.showSignUp(false);
        props.showSignIn(true);
    }
    if (!isUserLoggedIn)
        return (
            <>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item">
                                Home
                             </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    More
                                </a>
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        About
                                    </a>
                                    <a className="navbar-item">
                                        Contact
                                    </a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item">
                                        Report an issue
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <div> {props.showForm}</div>
                                    <a className="button is-primary">
                                        <strong onClick={onClicksignUp}>Sign up</strong>
                                    </a>
                                    <a className="button is-light" onClick={onClicksignIn}>
                                        Sign in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );

    else
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                       </a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            Welcome {JSON.stringify(user.firstName)}
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">

                                </a>
                                <div className="navbar-dropdown">
                                    <a onClick={signOutUser} className="navbar-item">
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


const mapDispatchToProps = (dispatch) => {
    return {
        showSignIn: (state) => dispatch(showSignInForm(state)),
        showSignUp: (state) => dispatch(showSignUpForm(state))
    }
}
export default connect(undefined, mapDispatchToProps)(Header)