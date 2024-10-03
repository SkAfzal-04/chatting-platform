import React, { useState } from 'react';
import "./App.css"; // Ensure this path is correct
import AuthPage from "./AuthPage"; // Ensure this path is correct
import ChatsPage from "./ChatsPage"; // Ensure this path is correct

function App() {
  const [user, setUser] = useState(null);

  const handleAuth = (username) => {
    // Check if the username matches (for example, we check against "afzal")
    if (username === "afzal") {
      // If it matches, set the user state
      setUser(username);
    } else {
      // You can handle invalid usernames as needed
      alert("Invalid username. Please try again.");
    }
  };

  return (
    <div>
      {!user ? (
        <AuthPage onAuth={handleAuth} />
      ) : (
        <ChatsPage user={user} />
      )}
    </div>
  );
}

export default App;
