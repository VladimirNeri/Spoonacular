import React, { useState } from 'react';
import spoonacular from '../apis/spoonacular';
import Search from '../components/Search';
import Searchresults from '../components/Searchresults';

const Searchpage = () => {
  const [foods, setFoods] = useState([]);

  const search = (searchValue) => {
    
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const result = await spoonacular.get(
        `/recipes/findByIngredients/?ingredients=${searchValue}?&apiKey=${apiKey}&number=6`
      );
      setFoods(result.data);
      console.log(result.data);
    };
    fetchData();
  };

  return (
    <>
      <div>
        <Search search={search} />
      </div>
      <div className='recipe-container'></div>
      {foods.map((recipe, i) => (
        <div>
          <Searchresults
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        </div>
      ))}
    </>
  );
};

export default Searchpage;
