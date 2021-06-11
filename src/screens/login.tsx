import React from 'react';

const login = () => (
    <div>
        Login Page
        <button type="button" onClick={() => { localStorage.setItem('token', 'tt'); window.location.href = '/'; }}>Click to login</button>
    </div>
);

export default login;
