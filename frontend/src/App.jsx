import React, { useState } from 'react';
import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';
import './App.css'; // Ensure your styles are imported

function App() {
    const [user, setUser] = useState(null);

    const handleAuth = (authenticatedUser) => {
        setUser(authenticatedUser);
    };

    return (
        <div className="background">
            {user ? (
                <ChatsPage user={user} />
            ) : (
                <AuthPage onAuth={handleAuth} />
            )}
        </div>
    );
}

export default App;
