import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Recipe from './pages/recipe'; 
import RecipeSearch from './pages/recipesearch';
import Searchpage from './pages/searchpage';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/recipe' component={Recipe} />
          <Route exact path='/search' component={Searchpage} />
          <Route path='/recipe/:id' component={RecipeSearch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
