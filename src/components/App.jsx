import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './user/User';
import Header from './header/Header';
import Admin from './admin/Admin';
import HomePage from './home/home';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/user" component={User} />
                </Switch>
            </div>
        </Provider>
    );
}