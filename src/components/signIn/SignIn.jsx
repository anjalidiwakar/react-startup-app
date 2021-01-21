
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import SignUp from '../SignUp/Signup';
import "./SignIn.css";
import { useHistory } from 'react-router-dom'
import { userSignedIn } from '../../redux/signOut/userLoggedAction';
import SuccessNotification from '../feedback/SuccessNotofication';
import { CreatePollAction } from '../../redux/polls/AddPollAction';
import { AddPollOptions } from '../../redux/pollOption/AddPollOptionAction';

function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [renderState, setRenderState] = useState("");
    const history = useHistory();
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit() {
        let users = localStorage.getItem("users");
        if (users) {
            users = JSON.parse(users);
        }
        let user = users.find(t => t.email === email);
        if (user) {
            if (user.password === password) {
                props.signInUser(true);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("password", password);
                if (email === "anjali.diwakar@talentica.com")
                    sessionStorage.setItem("role", 'admin');
                else
                    sessionStorage.setItem("role", user.role);
                history.push('/' + sessionStorage.getItem("role"));
                SuccessNotification("Signed in successfullyy !!", '');
            }
            else {
                SuccessNotification("Password is incorrect, please try again.", '');
            }
        }
        else
        SuccessNotification("No user found with this email, plrease try with another one", '');

    }
    const handleSignUp = () => { setRenderState("SignUp") }

    if (renderState === "") {
        return (
            <div className="login-wrapper">
                <p>Please Sign In</p>
                <div className="field">
                    <label className="label is-normal">Email</label>
                    <div className="control">
                        <input className="input is-normal" type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </div>
                </div>
                <div className="field">
                    <label className="label is-normal">Password</label>
                    <div className="control">
                        <input className="input is-normal" type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                    </div>
                </div>

                <Button className="button is-info" onClick={handleSubmit} type="submit" disabled={!validateForm()}>
                    Sign in
            </Button>
                <p> Do not have an account? Please Sign Up here</p>
                <Button className="button is-info" onClick={handleSignUp}>Sign Up</Button>

            </div>
        );
    }
    else if (renderState === "SignUp") {
        return (
            <div>
                <SignUp />
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signInUser: (state) => dispatch(userSignedIn(state))
    }
}
export default connect(undefined, mapDispatchToProps)(SignIn)