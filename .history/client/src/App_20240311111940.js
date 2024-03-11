// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeaderProvider } from './HeaderContext';
import Home from './Home';
import Candetect from './Candetect';


function App() {
 return (
    <HeaderProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/BreastCancerDetector-app" component={Candetect} />
          <Route path="/Pipe" component={Candetect} />
          
        </Switch>
      </Router>
    </HeaderProvider>
 );
}

export default App;
