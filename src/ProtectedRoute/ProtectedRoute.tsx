import React from 'react';
import {
    Route, Redirect, RouteProps,
} from 'react-router-dom';

const ProtectedRoute = ({ isAuthorised, component: Component, ...rest }:any) => (
    <Route
        {...rest}
        render={(props:RouteProps) => {
            if (isAuthorised) { return <Component />; }
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }}
    />
);

export default ProtectedRoute;
