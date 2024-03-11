import "./App.css";
import React from "react";
import Candetect from "./pages/Candetect";
import Home from "./pages/Home";
import "./pages/home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbox from "./pages/Chatbox";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/BreastCancerDetector-app" element={<Candetect />} />
          <Route exact path="/chatbox" element={<Chatbox />} />

     
          <Route
            path="/Pipe"
            element={<Candetect />}
          /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
