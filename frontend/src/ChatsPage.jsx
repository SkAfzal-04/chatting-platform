import React, { useState } from 'react';

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

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* User List */}
            <div style={{ width: '200px', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
                <h3>Users</h3>
                {usersData.map((userItem) => (
                    <div
                        key={userItem.id}
                        onClick={() => setSelectedUser(userItem)}
                        style={{
                            padding: '10px',
                            cursor: 'pointer',
                            backgroundColor: selectedUser.id === userItem.id ? '#f0f0f0' : 'white',
                        }}
                    >
                        {userItem.username}
                    </div>
                ))}
            </div>

            {/* Chat Window */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, padding: '10px', borderBottom: '1px solid #ccc', overflowY: 'auto' }}>
                    <h2>Chat with {selectedUser.username}</h2>
                    {(messages[selectedUser.username] || []).map((msg, index) => (
                        <div key={index} style={{ margin: '5px 0' }}>
                            <strong>{msg.from}: </strong>{msg.text}
                        </div>
                    ))}
                </div>
                
                {/* Message Input */}
                <form onSubmit={handleSendMessage} style={{ display: 'flex', padding: '10px' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        style={{ flex: 1, padding: '10px' }}
                    />
                    <button type="submit" style={{ padding: '10px' }}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ChatsPage;
