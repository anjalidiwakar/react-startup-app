import { render } from '@testing-library/react';
import React from 'react';
import '../Common.css';
import SignIn from '../signIn/SignIn';

function NavigateToPortal() {
  alert('hey');
}

function Button(props) {
  const handleClick = () => NavigateToPortal();
  return <button onClick={handleClick}> {props.role}</button>
}
export default function HomePage() {
  return (
      <div className="wrapper">
        Welcome to Home Page
        <SignIn />
      </div>
    );
  
}
