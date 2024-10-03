import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      const response = await axios.post('https://talk-two-xi.vercel.app/authenticate', { username });

      // Ensure the response contains the expected data
      if (response.data.username && response.data.secret) {
        props.onAuth({ username: response.data.username, secret: response.data.secret });
      } else {
        setError("Authentication failed. Please try again.");
      }
    } catch (err) {
      console.error('Authentication error:', err);
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input 
            className="auth-input" 
            name="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="auth-button" type="submit">Enter</button>
          {error && <div className="error-message">{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
