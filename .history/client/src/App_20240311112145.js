// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import  HeaderProvider  from './pages/HeaderContext';
import Home from './pages/Home';
import Candetect from './pages/Candetect';


function App() {
 return (
    <HeaderProvider>
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/BreastCancerDetector-app" component={Candetect} />
          <Route path="/Pipe" component={Candetect} />
          </Routes>
        
      </Router>
    </HeaderProvider>
 );
}

export default App;
