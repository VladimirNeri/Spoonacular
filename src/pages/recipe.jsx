import React, { useState, useEffect } from 'react';
import Recipes from '../components/recipes/Recipes';
import spoonacular from '../apis/spoonacular';
// import Recipesummary from '../components/recipeSummary/Recipesummary';
// import Recipeinstructions from '../components/recipeInstructions/Recipeinstructions';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const result = await spoonacular.get(
        `/recipes/random?number=1&apiKey=${apiKey}`
      );
      setRecipes(result.data.recipes);
      console.log(result.data.recipes);
    };
    fetchData();
  }, []);

  return (
    <div className='recipe-layout'>
      <h1>Recipe of the Day</h1>
      <div className='recipe-container'>
        {recipes.map((recipe, i) => (
          <div>
            <Recipes
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              instructions={recipe.instructions}
              summary={recipe.summary}
            />
            {recipe.extendedIngredients.map((c, i) => (
              <div className='ingredient-list'>{c.original}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
