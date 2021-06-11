import React, { useEffect } from 'react';

const AuthCheck = (props:any) => {
    const { children } = props;

    useEffect(() => {
        const Authtoken = localStorage.getItem('token') || null;
        if (!Authtoken && window.location.pathname !== '/login') {
            window.location.href = '/login';
        }
    }, []);
    return (
        <>
            {children}
        </>
    );
};

export default AuthCheck;
