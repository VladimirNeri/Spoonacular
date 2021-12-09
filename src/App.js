import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Searchpage from './pages/searchpage'

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/searchpage' component={Searchpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
