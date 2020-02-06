import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
        <Router>
          <div className='App-Router'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route path='/contact_me' component={ContactMe} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/resume' component={Resume} />
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
