import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import spoonacular from '../apis/spoonacular';
import Recipesummary from '../components/Recipesummary.js';
import Recipeinstructions from '../components/Recipeinstructions.js';
import Ingredients from '../components/Ingredients.js';
import Navbar from '../components/Navbar.js';

const RecipeSearch = () => {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState([]);
  const [summary, setSummary ] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [nutritionLabel, setNutritionLabel] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const result = await spoonacular.get(
        `/recipes/${id}/information?includenutrition=false?&apiKey=${apiKey}`
      );
      setRecipeData(result.data);
      setSummary(result.data.summary); 
      setIngredients(result.data.extendedIngredients);
      setInstructions(result.data.analyzedInstructions);
      // console.log(result.data.extendedIngredients[0]);
      // console.log(result.data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const nutrition = await spoonacular
        .get(`/recipes/${id}/nutritionLabel.png?&apiKey=${apiKey}`, {
          responseType: 'blob',
          headers: {
            'Content-Type': 'image/png',
          },
        })
        .then((response) => {
          let imgUrl = URL.createObjectURL(response.data);
          return imgUrl;
        });
      setNutritionLabel(nutrition);
      // console.log(nutrition);
    };
    fetchData();
  }, [id]);


  return (
    <>
    <Navbar />
    <div className='recipe-layout'>
      <NavLink to={'/search'} className='back-button'>
      ←
      </NavLink>
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
              <NavLink
                exact
                activeClassName='tab-active'
                to={match.url + '/about'}
              >
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
          <Route exact path={match.path + '/about'}>
            <Recipesummary summary={summary} />
          </Route>
          <Route exact path={match.path + '/ingredients-list'}>
            {ingredients.map((c, i) => (
              <Ingredients key={i} ingredients={c.original} />
            ))}
          </Route>
          <Route exact path={match.path + '/instructions'}>
            {instructions.map((e, i) =>
              e.steps.map((steps, i) => (
                <Recipeinstructions
                  key={steps.ingredients.id}
                  step={steps.number}
                  instruction={steps.step}
                />
              ))
            )}
          </Route>
          <Route exact path={match.path + '/nutrition'}>
            <div className='nutrition-label'>
              <img
                src={nutritionLabel}
                alt='Nutrition Facts'
                className='nutrition-facts-png'
                width='275'
              />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
    </>
  );
};

export default RecipeSearch;
