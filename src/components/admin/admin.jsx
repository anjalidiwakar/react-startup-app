import React, { useState } from 'react';
import SignUp from '../SignUp/Signup';
import SignIn from '../signIn/SignIn';
import '../Common.css';
import './Admin.css';
export default function Admin() {
    let renderPortal = false;
    if (sessionStorage.getItem("email") != null && sessionStorage.getItem("password") != null && sessionStorage.getItem("role") === "admin") {
        renderPortal = true;
    }
    if (renderPortal) {
        return (
            <div className="center">
                <div >Welcome to Admin portal</div>
                <div className="right"> Create a poll! </div><span>click here</span>
            </div>
        );

    }
    else {
        return (
            <>
                <SignIn />
            </>
        );
    }
};