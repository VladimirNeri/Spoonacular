import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Recipe from './pages/recipe'; 
import Searchpage from './pages/searchpage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recipe' component={Recipe} />
          <Route exact path='/search' component={Searchpage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
