
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignUp from '../SignUp/Signup';
import "./SignIn.css";
import { Link } from 'react-router-dom';
import Admin from '../admin/Admin';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [renderState, setRenderState] = useState("");

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
                setRenderState("SignedIn");
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("password", password);
                sessionStorage.setItem("role", user.role);
                props.setUserToken(true);
               // window.location.href = "http://localhost:3000/" + user.role;
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
            <>
            <div className="login-wrapper">
                <p>Please Sign In</p>
                <div class="field">
                    <label class="label is-large">Email</label>
                    <div class="control">
                        <input class="input is-normal" type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </div>
                </div>
                <div class="field">
                    <label class="label is-normal">Password</label>
                    <div class="control">
                        <input class="input is-normal" type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                    </div>
                </div>

                <Button className="buttons button is-primary" onClick={handleSubmit} type="submit" disabled={!validateForm()}>
                    Login
            </Button>
                <p> Do not have an account? Please Sign Up here</p>
                <Button className="buttons button is-primary" onClick={handleSignUp}>SignUp</Button>
                
            </div>
            
    </>
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