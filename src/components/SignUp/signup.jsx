import React, { useState } from "react";
import Form from "react-bootstrap/form";
import Button from 'react-bootstrap/Button';
import './SignUp.css';
import SignIn from '../signIn/SignIn';
import SignInHere from '../signIn/SignInHere';
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
                <Form onSubmit={handleClick}>
                    <Form.Group controlId='firstName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            autoFocus
                            value={firstName}
                            onChange={(v) => setFirstName(v.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='lastName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            value={lastName}
                            onChange={(v) => setlastName(v.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            value={email}
                            onChange={(v) => setemail(v.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='confirmEmail'>
                        <Form.Label>Confirm Email</Form.Label>
                        <Form.Control
                            required
                            type="confirmEmail"
                            value={confirmEmail}
                            onChange={(v) => setconfirmEmail(v.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            value={password}
                            onChange={(v) => setpassword(v.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            value={confirmPassword}
                            onChange={(v) => setconfirmPassword(v.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                    <p> Already have an account? Please Sign in here</p>
                    <Button onClick={handleSignIn}>SignIn</Button>
                </Form>
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
                Your account is successfully created. Please sign in here.
                <SignInHere />
            </div>
        )
    }

}
