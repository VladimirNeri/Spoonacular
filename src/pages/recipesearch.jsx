import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import spoonacular from '../apis/spoonacular';
import RecipeDetails from '../components/RecipeDetails';

const RecipeSearch = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const result = await spoonacular.get(
        `/recipes/${id}/information?includenutrition=false?&apiKey=${apiKey}`
      );
      setRecipeData(result.data);
      console.log(result.data.title);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <RecipeDetails />
    </div>
  );
};

export default RecipeSearch;
