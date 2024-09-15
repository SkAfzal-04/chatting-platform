import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Alert to confirm main.jsx is hit
alert('main.jsx is loaded!');

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
