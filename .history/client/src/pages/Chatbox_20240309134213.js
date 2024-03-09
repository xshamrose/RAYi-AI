import React, { useState } from 'react';
import './Chatbox.css'; // We'll create this file next

const Chatbox = () => {
 const [messages, setMessages] = useState([]);
 const [input, setInput] = useState('');
 const [darkMode, setDarkMode] = useState(false);

 const sendMessage = () => {
    setMessages([...messages, input]);
    setInput('');
 };

 return (
    <div className={`chat-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
 );
};

export default Chatbox;
