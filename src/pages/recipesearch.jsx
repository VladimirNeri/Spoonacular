import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import spoonacular from '../apis/spoonacular';
import RecipeDetails from '../components/RecipeDetails';



const RecipeSearch = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const result = await spoonacular.get(
        `/recipes/${id}/information?includenutrition=false?&apiKey=${apiKey}`
      );
      setRecipeData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className='recipe-details-layout'>
      <h2>{recipeData.title}</h2>
      <img
        src={recipeData.image}
        width="470"
        className="recipeData-image"
        alt={recipeData.name}
      />

      <div>
        <div className='tabs'>
          <ul>
            <li>
              <NavLink exact activeClassName='tab-active' to={match.url}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='tab-active' to={match.url + '/ingredients-list'}>
                Ingredients
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='tab-active' to={match.url + '/instructions'}>
                Instructions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
