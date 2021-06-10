import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import {
    Dashboard, Login, Signup, Error,
} from './screens';

const App = () => (
    <main className="App">
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Error} />
        </Switch>
    </main>
);

export default App;
