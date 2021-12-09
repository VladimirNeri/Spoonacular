import React, { useState, useEffect } from 'react';

import Navbar from '../components/navbar/Navbar';
import Search from '../components/search/Search';
import Recipes from '../components/recipes/Recipes';
import Ingredients from '../components/ingredients/Ingredients'; 

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [summary, setSummary] = useState([]); 
  const [loading, setLoading] = useState(true);
  
  const [errorMessage, setErrorMessage] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data.recipes);
        setLoading(false);
        setRecipes(data.recipes);
      } catch (error) {
        setErrorMessage(error);
        setLoading(false);
      }
    })();
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients/?ingredients=${searchValue}&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  };

  return (
    <>
      <div className='container'>
        <Navbar />
  
        <Search search={search} />
       
      </div>

      <div className='recipes'>
      {/* <Recipes
              
            /> */}

        {recipes.map((recipe) => {
          return (

            <Recipes
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              summary={recipe.summary}
            />

          );
        })}

      </div>
      
      
    </>
  );
};

export default Home;
