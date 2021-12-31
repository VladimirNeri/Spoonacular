import React, { useState, useEffect } from 'react';
import Recipes from '../components/recipes/Recipes';
import Recipesummary from '../components/recipeSummary/Recipesummary';
import Recipeinstructions from '../components/recipeInstructions/Recipeinstructions';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    (async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log(data.recipes);

        setRecipes(data.recipes);
      } catch (error) {}
    })();
  }, []);

  return (
    <div className='recipe-layout'>
      <h1>Recipe of the Day</h1>
      <div className='recipe-container'>
        {recipes.map((recipe) => {
          return (
            <>
              <Recipes
                key={recipe.id}
                title={recipe.title}
                image={recipe.image}
                instructions={recipe.instructions}
                summary={recipe.summary}
              />
              <Recipesummary summary={recipe.summary} />
              <br></br>
              <Recipeinstructions instructions={recipe.instructions} />

            </>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
