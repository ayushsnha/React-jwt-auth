import React, { useState } from 'react';

const signup = () => {
    const [state, setState] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        // console.log(state);
        await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: state.userName,
                email: state.email,
                password: state.password,
            }),
        }).then((response) => response.json())
            .then((data) => console.log(data));
    };

    return (
        <div style={{ height: '100vh' }}>
            Signup Page
            <div style={{
                display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center',
            }}
            >
                <form>
                    <div>User Name:</div>
                    <input
                        type="text"
                        value={state.userName}
                        onChange={(e:any) => {
                            setState((prev) => ({
                                ...prev,
                                userName: e.target.value,
                            }));
                        }}
                    />
                    <div>Email:</div>
                    <input
                        type="email"
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
                    <button type="button" onClick={(e) => handleSubmit(e)}>Click to Signup</button>
                </form>
            </div>
        </div>
    );
};

export default signup;
