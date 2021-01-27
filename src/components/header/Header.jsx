import React from 'react';
import { connect, useSelector } from 'react-redux'
import PrimaryButton from '../buttons/PrimaryButton'
import '../Common.css';
import './Header.css';
import { showSignInForm } from '../../redux/signIn/signInAction'
import { showSignUpForm } from '../../redux/signUp/signUpAction'
import { userSignedIn } from '../../redux/signOut/userLoggedAction'

function Header(props) {
    let users = localStorage.getItem("users");
    if (users) {
        users = JSON.parse(users);
    }
    const isLoggedIn = useSelector((state) => state.checkLogin.state_User_Logged_In);                    
    let user = sessionStorage.getItem("email");
    function signOutUser() {
        sessionStorage.removeItem("email");
        props.userLoggedIn(false);
    }
    function signUpHandle() {
        props.showSignIn(false);
        props.showSignUp(true);
    }
    function signInHandle() {
        props.showSignUp(false);
        props.showSignIn(true);
    }
   
    if (isLoggedIn === true) {
        user = users.find(u => u.email === sessionStorage.getItem("email"));
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
                            Welcome {user.firstName}
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
    else {

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
                                    <PrimaryButton text={'Sign up'} callBack={signUpHandle} />
                                    <PrimaryButton text={'Sign in'} callBack={signInHandle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        showSignIn: (state) => dispatch(showSignInForm(state)),
        showSignUp: (state) => dispatch(showSignUpForm(state)),
        userLoggedIn: (state) => dispatch(userSignedIn(state))
    }
}
export default connect(undefined, mapDispatchToProps)(Header)