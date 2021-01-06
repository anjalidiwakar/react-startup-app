
import React, { useState } from "react";
import { connect } from 'react-redux';
import Button from "react-bootstrap/Button";
import SignUp from '../SignUp/Signup';
import "./SignIn.css";
import { useHistory } from 'react-router-dom'
import { signOutUser } from '../../redux/signOut/signOutAction'

function SignIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [renderState, setRenderState] = useState("");
    const history = useHistory();
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit() {
        let validationError = ""
        let users = localStorage.getItem("users");
        if (users) {
            users = JSON.parse(users);
        }
        let user = users.find(t => t.email === email);
        if (user) {
            if (user.password === password) {
                props.signOutUser(false);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("password", password);
                if (email ==="anjali.diwakar@talentica.com")
                    sessionStorage.setItem("role", 'admin');
                else
                    sessionStorage.setItem("role", user.role);
                history.push('/' + sessionStorage.getItem("role"))
            }
            else {
                validationError = "Password is incorrect, please try again.";
            }
        }
        else
            validationError = "No user found with this email, plrease try with another one";

    }
    const handleSignUp = () => { setRenderState("SignUp") }

    if (renderState === "") {
        return (
            <div className="login-wrapper">
                <p>Please Sign In</p>
                <div className="field">
                    <label className="label is-large">Email</label>
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

                <Button className="buttons button is-primary" onClick={handleSubmit} type="submit" disabled={!validateForm()}>
                    Sign in
            </Button>
                <p> Do not have an account? Please Sign Up here</p>
                <Button className="buttons button is-primary" onClick={handleSignUp}>SignUp</Button>

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
        signOutUser : (state) => dispatch(signOutUser(state))
    }
}
export default connect(undefined, mapDispatchToProps)(SignIn)