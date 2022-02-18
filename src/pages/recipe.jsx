import React, { useState, useEffect } from 'react';
import Recipes from '../components/Recipes';
import spoonacular from '../apis/spoonacular';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const result = await spoonacular.get(
        `/recipes/random?number=1&apiKey=${apiKey}`
      );
      setRecipes(result.data.recipes);
      // console.log(result.data.recipes);
    };
    fetchData();
  }, []);

  return (
    <div>
      {recipes.map((recipe, i) => (
        <div key={i} className='recipe-layout'>
          <Recipes
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            summary={recipe.summary}
          />
          <br></br>

          <div className='recipe-ingredient'>
            <h4>Ingredients:</h4>
            <br></br>
            {recipe.extendedIngredients.map((c, i) => (
              <div key={c.id}>{c.original}</div>
            ))}
          </div>
          <div className='recipe-steps'>
            <h4>Instructions:</h4>
            <br></br>
            {recipe.analyzedInstructions.map((e, i) =>
              e.steps.map((steps, i) => (
                <div key={i} className='recipe-instructions'>
                  <div key={steps.ingredients.id}>
                    Step {steps.number}
                    <br></br>
                    <br></br>
                    {steps.step}
                  </div>
                  <br></br>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
