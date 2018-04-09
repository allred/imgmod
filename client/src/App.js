import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Dashboard from './resources/Dashboard'
import Moderator from './resources/Moderator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/moderator">Moderator</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
            <hr/>
           <Route path="/moderator" component={Moderator}/>
           <Route path="/dashboard" component={Dashboard}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
