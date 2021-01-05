import React from 'react';
import SignIn from '../signIn/SignIn';

function NavigateToPortal() {
}
function Button(props) {
    const handleClick = () => NavigateToPortal();
    return <button onClick={handleClick}> {props.role}</button>
}
export default function User() {
    let renderUserPortal = false;
    if (sessionStorage.getItem("email") != null && sessionStorage.getItem("password") != null && sessionStorage.getItem("role") === "User") {
        renderUserPortal = true;;
    }
    if (renderUserPortal) {
        return (
            <div>
                <div>Welcome to User portal</div>
                <div> Check out active polls!</div>
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
}

