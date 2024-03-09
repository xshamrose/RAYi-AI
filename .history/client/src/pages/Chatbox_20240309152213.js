import React, { useState } from 'react';
import './Chatbox.css'; // Ensure this path is correct
import enter from "../assets/enter.svg"
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
        <h1>RAYi - AI</h1>
        <label className="switch-container">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
        </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            className='input'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button className="send-button" onClick={sendMessage}>
          <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
           <img alt='enter' src={enter} style={{height:"20px"}} />
          </button>
        </div>
      </div>
    </div>
 );
};

export default Chatbox;
