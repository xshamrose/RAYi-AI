import React, { useState } from 'react';
import './Chatbox.css';
import enter from "../assets/enter.svg";

const Chatbox = () => {
 const [loading, setLoading] = useState(false);
 const [userMessage, setUserMessage] = useState('');
 const [fetchedData, setFetchedData] = useState('');
 const [input, setInput] = useState('');
 const [darkMode, setDarkMode] = useState(true);

 const fetchData = async (message) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
    setFetchedData('This is a simulated response from RAYi-AI.');
    setLoading(false);
 };

 const sendMessage = () => {
    setUserMessage(input);
    setInput('');
    fetchData(input);
 };

 return (
    <div className={`chat-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header">
        <h1>RAYi-AI</h1>
        <label className="switch-container">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="messages">
        {userMessage && <div className="message user">User:{userMessage}</div>}
        {loading && <div className="loading">Loading...</div>}
        {fetchedData && <div className="message assistant">Assistant{fetchedData}</div>}
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
            <img alt='enter' src={enter} style={{height:"20px"}} />
          </button>
        </div>
      </div>
    </div>
 );
};

export default Chatbox;
