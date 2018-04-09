import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Dashboard from './resources/Dashboard'
import Moderate from './resources/Moderate'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/moderate">Moderate</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
            <hr/>
           <Route path="/moderate" component={Moderate}/>
           <Route path="/dashboard" component={Dashboard}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
