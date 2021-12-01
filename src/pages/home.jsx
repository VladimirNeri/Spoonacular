import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Search from '../components/search/Search';
import Recipes from '../components/recipes/Recipes';
// import './home.css';
require('dotenv').config({ path: './../config.env' });

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const apiKey = process.env.API_KEY;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=f761424a359f43f4a75d43ca3e741c2d`
        );
        const data = await response.json();
        setLoading(false);
        setRecipes(data.results);
      } catch (error) {
        setErrorMessage(error)
        setLoading(false);
      }
    })();
  }, []);

  const search = (searchValue) => {
    
    setLoading(true);
    setErrorMessage(null);

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients/?ingredients=${searchValue}&apiKey=f761424a359f43f4a75d43ca3e741c2d`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipes(data)
      });
      
  };

  return (
    <>
      <div className='container'>
        <Navbar />
        <Search search={search} />
      </div>
      <p className='App-intro'>Here are the Recipes</p>
      <div className='recipes'>
        {recipes.map((recipe) => {
          return (
            <Recipes
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
