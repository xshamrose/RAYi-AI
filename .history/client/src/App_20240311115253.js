import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Candetect from './pages/Candetect';
import Chatbox from "./pages/Chatbox"

function App() {
 return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BreastCancerDetector-app" element={<Candetect />} />
          <Route path="/Pipe" element={<Candetect />} />
          <Route path="/chatbox" element={<Chatbox />} />
          </Routes>
        
      </Router>
   
 );
}

export default App;
