import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './SignUp.css';
import SignIn from '../signIn/SignIn';
import Users from '../models/User';

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [confirmEmail, setconfirmEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [renderState, setRenderState] = useState("");
    let emailExistsFlag = false;
    function checkIfEmailExists(email) {
        let users = localStorage.getItem("users");
        users !== null ? users = JSON.parse(users) : users = [];
        if (users.length > 0) {
            let user = users.find(u => u.email === email);
            if (user)
                emailExistsFlag = true;
        }

    }
    const handleClick = () => {
        checkIfEmailExists(email);
        if (emailExistsFlag === false) {
            setRenderState("SignedUp");
            let users = localStorage.getItem("users");
            users !== null ? users = JSON.parse(users) : users = [];
            let user = new Users();
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setEmail(email);
            user.setConfirmedEmail(confirmEmail);
            user.setPassword(password);
            user.setConfirmedPassword(confirmPassword);
            user.setRole();
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users), false);
        }
    };
    const handleSignIn = () => { setRenderState("SignIn") };



    if (renderState === "") {
        return (
            <div className="signUp-wrapper">
                <p> Please Sign Up</p>
                <div >
                    <div className="field">
                        <div className="field-label is-small">
                            <label className="label has-text-left">First Name</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={firstName} onChange={(v) => setFirstName(v.target.value)}
                                        placeholder="Enter first name"></input>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label is-small">
                            <label className="label has-text-left">Last Name</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="text" value={lastName} onChange={(v) => setlastName(v.target.value)}
                                        placeholder="Enter last name"></input>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label is-small">
                            <label className="label has-text-left">Email</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="email" value={email} onChange={(v) => setemail(v.target.value)}
                                        placeholder="Enter email"></input>
                                    <p className="help">eg: ex@example.com</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label is-small">
                            <label className="label has-text-left">Confirm Email</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="email" value={confirmEmail} onChange={(v) => setconfirmEmail(v.target.value)}
                                        placeholder="Please confirm email"></input>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label is-small">
                            <label className="label has-text-left">Password</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="password" value={password} onChange={(v) => setpassword(v.target.value)}
                                        placeholder="Enter password"></input>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field-label is-small">
                            <label className="label has-text-left">Confirm Password</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input is-primary" type="password" value={confirmPassword} onChange={(v) => setconfirmPassword(v.target.value)}
                                        placeholder="Please confirm password"></input>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Button className="buttons button is-primary" type="submit" onClick={handleClick}>Submit</Button>
                <p> Already have an account? Please Sign in here</p>
                <Button className="buttons button is-primary" onClick={handleSignIn}>SignIn</Button>

            </div>
        );
    }
    else if (renderState === "SignIn") {
        return (
            <>
                <SignIn />
            </>

        )
    }
    else if (renderState === "SignedUp") {
        return (
            <div className="signUp-wrapper">
                Your account is successfully created. Please sign in.
            </div>
        )
    }

}
