import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './user/User';
import Header from './header/Header';
import Admin from './admin/Admin';
import HomePage from './home/home';
import Polls from './polls/polls';

export default function App() {
    const [showSignin, setShowLogin] = useState(false);
    const [showSignup, setSignup] = useState(false);
   
    return (
        <div>
            <Header signinToken={setShowLogin} signupToken={setSignup}/>
            <Switch>
            {/* <Route exact path="/" component={HomePage} token={showLogin}/> */}
            <Route exact path="/"  component={() => <HomePage signinToken={showSignin} signupToken={showSignup} />} />
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route path="/polls" component={Polls} />
            </Switch>
        </div>
    );
}