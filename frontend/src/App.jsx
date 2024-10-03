import React from 'react';
import "./App.css"; // Ensure this path is correct
import ChatsPage from "./ChatsPage"; // Ensure this path is correct

function App() {
    const user = {
        username: "afzal", // Set the username directly for testing
        secret: "your_secret_here" // Provide a secret value (can be any string for testing)
    };

    return (
        <div>
            <ChatsPage user={user} />
        </div>
    );
}

export default App;
