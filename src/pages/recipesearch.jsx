import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import spoonacular from '../apis/spoonacular';
import RecipeDetails from '../components/RecipeDetails';
import Ingredients from '../components/Ingredients';
import { matchPath } from 'react-router-dom/cjs/react-router-dom.min';

const RecipeSearch = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [nutritionLabel, setNutritionLabel] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const [result, nutrition] = await Promise.all([
        spoonacular.get(
          `/recipes/${id}/information?includenutrition=false?&apiKey=${apiKey}`
        ),
        spoonacular
          .get(`/recipes/${id}/nutritionLabel.png?&apiKey=${apiKey}`, {
            responseType: 'blob',
            headers: {
              'Content-Type': 'image/png',
            },
          })
          .then((response) => {
            let imgUrl = URL.createObjectURL(response.data);
            return imgUrl;
          }),
      ]);
      setRecipeData(result.data);
      setIngredients(result.data.extendedIngredients);
      setNutritionLabel(nutrition);
      console.log(ingredients);
      console.log(nutrition);
      console.log(result.data);
    };
    fetchData();
  }, [id, ingredients]);

  return (
    <div className='recipe-layout'>
      <h2 className='recipe-title'>{recipeData.title}</h2>
      <img
        src={recipeData.image}
        className='recipe-image'
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
              <NavLink
                exact
                activeClassName='tab-active'
                to={match.url + '/ingredients-list'}
              >
                Ingredients
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName='tab-active'
                to={match.url + '/instructions'}
              >
                Instructions
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName='tab-active'
                to={match.url + '/nutrition'}
              >
                Nutrition
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path={match.path}>
            <RecipeDetails summary={recipeData.summary} />
          </Route>
          <Route exact path={match.path + '/ingredients-list'}>
            {ingredients.map((c, i) => (
              <div key={c.id}>{c.original}</div>
            ))}
          </Route>
          <Route exact path={match.path + '/instructions'}></Route>
          <Route exact path={match.path + '/nutrition'}>
            <img
              src={nutritionLabel}
              alt='Nutrition Facts'
              className='nutrition-facts-png'
              width='275'
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default RecipeSearch;
