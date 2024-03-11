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

           Future Use for Pipe Counting Detection
          <Route
            path="/Pipe"
            element={<Candetect title={headerTitle} content={content} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
