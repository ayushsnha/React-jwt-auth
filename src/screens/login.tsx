import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const login = ({ history }:any) => {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: state.email,
                password: state.password,
            }),
        }).then((response) => response.json())
            .then((data) => {
                localStorage.setItem('token', data.accessToken);
                history.push('/profile');
            });
    };

    return (
        <div style={{ height: '100vh' }}>
            Login Page
            <div style={{
                display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center',
            }}
            >
                <form>
                    <div>Email:</div>
                    <input
                        type="text"
                        value={state.email}
                        onChange={(e:any) => {
                            setState((prev) => ({
                                ...prev,
                                email: e.target.value,
                            }));
                        }}
                    />
                    <div>Password:</div>
                    <input
                        type="password"
                        value={state.password}
                        onChange={(e:any) => {
                            setState((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }));
                        }}
                    />
                    <button type="button" onClick={(e) => handleSubmit(e)}>Click to login</button>
                </form>
                <div>
                    Dont have a account?
                    <Link to="/signup">SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default login;
