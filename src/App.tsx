import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import {
    Dashboard, Login, Signup, Error, Landing,
} from './screens';

const App = () => (
    <main className="App">
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute path="/profile" isAuthorised={false} component={Dashboard} />
            <Route component={Error} />
        </Switch>
    </main>
);

export default App;
