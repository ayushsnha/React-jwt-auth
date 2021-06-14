import React, { useEffect, useState } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import {
    Dashboard, Login, Signup, Error, Landing,
} from './screens';

const App = () => {
    const [authorise, setAuthorise] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const Token = localStorage.getItem('token');
        if (Token) {
            fetch('/api/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: Token,
                }),
            }).then((response) => {
                if (response.status === 200) { setAuthorise(true); setLoading(false); } else setAuthorise(false);
            });
        }
        setLoading(false);
    }, []);
    console.log(authorise);
    if (loading) { return <></>; }
    return (
        <main className="App">
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/login" render={() => <Login setAuthorise={setAuthorise} authorise={authorise} />} />
                <Route path="/signup" component={Signup} />
                <ProtectedRoute path="/profile" isAuthorised={authorise} component={Dashboard} />
                <Route component={Error} />
            </Switch>
        </main>
    );
};

export default App;
