
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignUp from '../SignUp/Signup';
import "./SignIn.css";
import { Link } from 'react-router-dom';
import Admin from '../admin/Admin';

export default function Login() {
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
                window.location.href = "http://localhost:3000/" + user.role;
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
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
            </Button>
                    <p> Do not have an account? Please Sign Up here</p>
                    <Button onClick={handleSignUp}>SignUp</Button>
                </Form>
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