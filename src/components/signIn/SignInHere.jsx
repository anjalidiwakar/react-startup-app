import React, { useState } from 'react';
import './SignIn.css';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';

export default function SignInHere() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [renderState, setRenderState] = useState("");
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    const handleSubmit = () => { setRenderState("SignedIn") };
    if (renderState === "") {
        return (
            <div className="login-wrapper">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            autoFocus
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Sign in
                </Button>
                </Form>
            </div>
        );
    }
    else if (renderState === "SignedIn") {
        return (
            <div>
                Welcome {email}
            </div>
        )
    }

}