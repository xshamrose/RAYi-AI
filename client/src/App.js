import "./App.css";
import React from "react";
import { useState } from "react";
import Candetect from "./pages/Candetect";
import Home from "./pages/Home";
import "./pages/home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [headerTitle, setHeaderTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home setTitle={setHeaderTitle} setContent={setContent} />}
          />
          <Route
            path="/Can"
            element={<Candetect title={headerTitle} content={content} />}
          />
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
