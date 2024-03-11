import React, { useState } from 'react';
import './Chatbox.css';
import enter from "../assets/enter.svg";
import axios from 'axios';
const Chatbox = () => {
 const [loading, setLoading] = useState(false);
 const [userMessage, setUserMessage] = useState('');
 const [fetchedData, setFetchedData] = useState('');
 const [input, setInput] = useState('');
 const [darkMode, setDarkMode] = useState(true);
 const [assistantWords, setAssistantWords] = useState([]);

 const fetchData = async (message) => {
  setLoading(true);
  try {
     const response = await axios.post('http://192.168.0.132:5000/v1/chat/completions', {
       messages: [{ role: 'user', content: message }]
     });
     const assistantMessage = response.data.choices[0].message.content;
     // Split the message into words
     const words = assistantMessage.split(' ');
     setAssistantWords(words);
  } catch (error) {
     console.error('Error fetching data:', error);
     setFetchedData('An error occurred while fetching data.');
  } finally {
     setLoading(false);
  }
 };
 
 

 const sendMessage = () => {
    setUserMessage(input);
    setInput('');
    fetchData(input);
 };

 return (
    <div className='overall'>
    <div className={`chat-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header">
        <h1>RAYi-AI</h1>
        <label className="switch-container">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="messages">
 {userMessage && <div className="message user">User: {userMessage}</div>}
 {loading && <div className="loading">Loading...</div>}
 {assistantWords.map((word, index) => (
    <span key={index} className="message assistant-word" style={{ animationDelay: `${index * 0.5}s` }}>
      {word} 
    </span>
  ))}
</div>

      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            className='input'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }}}
              
            placeholder="Type a message..."
          />
          <button className="send-button" onClick={sendMessage}>
            <button>
            <img alt='enter' src={enter} style={{height:"20px"}} />
            </button>
          </button>
        </div>
      </div>
    </div>
    </div>
 );
};

export default Chatbox;
