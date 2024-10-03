import axios from 'axios';
import React from 'react';

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post('https://chatting-platform.onrender.com/authenticate', { username: value })
            .then(response => {
                // Assuming your API returns user details upon authentication
                const user = { ...response.data, secret: value };
                props.onAuth(user); // Pass the user data to App
            })
            .catch(error => {
                console.log('Error during authentication', error);
            });
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
