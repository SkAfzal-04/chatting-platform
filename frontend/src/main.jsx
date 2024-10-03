import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Alert to confirm main.jsx is hit
alert('main.jsx is loaded!');
const a=<div>afzal</div>
ReactDOM.createRoot(document.getElementById('root')).render(a);
