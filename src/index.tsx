import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthCheck from './AuthCheck';

import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <AuthCheck>
            <Router>
                <App />
            </Router>
        </AuthCheck>
    </React.StrictMode>,
    document.getElementById('root'),
);
