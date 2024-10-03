import axios from 'axios';
import React from 'react';

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        // For testing, define static user
        const staticUser = { username: value, secret: 'staticSecret' }; // Static user for testing
        
        // Simulating user authentication
        // Normally, you'd authenticate with an API, but here we just use the static user.
        if (value) {
            props.onAuth(staticUser); // Pass the static user to App
        } else {
            console.log('Username is required');
        }
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>
                <div className="form-subtitle">Set a username to get started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" required />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;
