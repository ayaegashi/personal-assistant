import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Welcome from './Welcome'


ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/to-do'>
        <App />
      </Route>
      <Route path='/'>
        <Welcome />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

