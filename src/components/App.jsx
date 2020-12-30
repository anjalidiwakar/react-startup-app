import React from 'react';
import { Route } from 'react-router-dom';
import User from './user/User';
import Header from './header/Header';
import Admin from './admin/Admin';
import HomePage from './home/home';
import Polls from './polls/polls';

export default function App() {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route path="/polls" component={Polls} />
        </div>
    );
}