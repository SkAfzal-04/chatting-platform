import React from 'react';
import "./App.css"; // Ensure this path is correct
import ChatsPage from "./ChatsPage"; // Ensure this path is correct

function App() {
  const user = "afzal"; // Set the user directly for testing

  return (
    <div>
      <ChatsPage user={user} />
    </div>
  );
}

export default App;
