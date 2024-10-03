import React, { useState } from 'react';

const ChatsPage = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const newMessage = {
                username: user.username,
                text: input,
            };
            setMessages([...messages, newMessage]);
            setInput(''); // Clear the input field after sending
        }
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', overflowY: 'auto' }}>
                <h2>Chat with {user.username}</h2>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.username}: </strong>{msg.text}
                    </div>
                ))}
            </div>
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
    );
};

export default ChatsPage;
