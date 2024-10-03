import { useState } from "react";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(null); // Start with no user

  // If no user is set, show the AuthPage
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  }
  // If a user is present, show the ChatsPage
  return <ChatsPage user={user} />;
}

export default App;
