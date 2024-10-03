import React, { useState } from 'react';
import './App.css'; // Make sure to include your CSS

// Sample user data for demonstration
const usersData = [
    { id: 1, username: 'Alice' },
    { id: 2, username: 'Bob' },
    { id: 3, username: 'Charlie' },
    { id: 4, username: 'David' },
    { id: 5, username: 'Eve' },
];

const ChatsPage = ({ user }) => {
    const [messages, setMessages] = useState({});
    const [input, setInput] = useState('');
    const [selectedUser, setSelectedUser] = useState(usersData[0]); // Default to first user
    const [showUsers, setShowUsers] = useState(false); // State to toggle user list

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const newMessage = {
                from: user.username,
                text: input,
                to: selectedUser.username,
            };
            setMessages((prev) => ({
                ...prev,
                [selectedUser.username]: [...(prev[selectedUser.username] || []), newMessage],
            }));
            setInput(''); // Clear the input field after sending
        }
    };

    const toggleUserList = () => {
        setShowUsers(!showUsers);
    };

    return (
        <div className="chat-wrapper">
            <div className={`user-list ${showUsers ? 'open' : ''}`}>
                <button className="hamburger" onClick={toggleUserList}>
                    ☰
                </button>
                {showUsers && (
                    <div className="user-list-content">
                        <h3 style={{ color: '#e8e8e8' }}>Users</h3>
                        {usersData.map((userItem) => (
                            <div
                                key={userItem.id}
                                onClick={() => {
                                    setSelectedUser(userItem);
                                    setShowUsers(false); // Close user list on selection
                                }}
                                className={`user-item ${selectedUser.id === userItem.id ? 'active' : ''}`}
                            >
                                {userItem.username}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="chat-window">
                <div className="chat-header">
                    <h2 style={{ color: '#e8e8e8' }}>Chat with {selectedUser.username}</h2>
                </div>
                <div className="chat-messages">
                    {(messages[selectedUser.username] || []).map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.from === user.username ? 'sent' : 'received'}`}>
                            <strong>{msg.from}: </strong>{msg.text}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSendMessage} className="message-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="auth-input" // Use existing auth-input class
                    />
                    <button type="submit" className="auth-button">Send</button> {/* Use existing auth-button class */}
                </form>
            </div>
        </div>
    );
};

export default ChatsPage;
