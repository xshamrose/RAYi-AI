import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Candetect from './pages/Candetect';


function App() {
 return (
   
      <Router>
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/BreastCancerDetector-app" component={Candetect} />
          <Route path="/Pipe" component={Candetect} />
          </Routes>
        
      </Router>
   
 );
}

export default App;
