import React, { useState } from 'react';
import './Chatbox.css'; // Ensure this path is correct
import enter from "../assets/enter.svg"
const Chatbox = () => {
 const [messages, setMessages] = useState([]);
 const [input, setInput] = useState('');
 const [darkMode, setDarkMode] = useState(false);
 const [loading, setLoading] = useState(false);
 const [fetchedData, setFetchedData] = useState('');
 const sendMessage = () => {
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    fetchData(input);
   };
   
   const fetchData = async (userMessage) => {
    setLoading(true);
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    // Here you would make the actual API call and set the fetched data
    // For example:
    // const response = await fetch(`your-api-url?message=${userMessage}`);
    // const data = await response.json();
    // setFetchedData(data.response);
    setFetchedData('This is a simulated response from Phind.'); // Set the fetched data
    setLoading(false);
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
    <div key={index} className={`message ${message.type}`}>
     User : {message.text}
    </div>
  ))}
 {loading && <div className="loading">Loading...</div>}
 {fetchedData && <div className="message assistant">{fetchedData}</div>}
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
