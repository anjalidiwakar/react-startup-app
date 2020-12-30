import React from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom'
import '../Common.css';
import './Header.css';
export default function Header() {
    return (
        <nav className="align-right">
            <NavLink to="/admin" >Admin </NavLink> {" | "}
            <NavLink to="/User" >User </NavLink>
        </nav>
    );
}