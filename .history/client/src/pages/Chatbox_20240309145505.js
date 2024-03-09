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
        <div className="header">
        <h2>RAYi - AI</h2>
        <button className="dark-mode-button"   onClick={() => setDarkMode(!darkMode)}>
        <label class="switch-container">
  <input type="checkbox" />
  <span class="slider"></span>
</label>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      </div>
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
      
    </div>
 );
};

export default Chatbox;
