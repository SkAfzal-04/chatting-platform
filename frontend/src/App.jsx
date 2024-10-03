import React, { useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  const handleAuth = (userData) => {
    setUser(userData); // Set the user state with the data received from AuthPage
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
