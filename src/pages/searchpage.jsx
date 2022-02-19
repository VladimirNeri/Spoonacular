import React, { useState } from 'react';
import spoonacular from '../apis/spoonacular';
import Search from '../components/Search';
import Searchresults from '../components/Searchresults';
import Navbar from '../components/Navbar';

const Searchpage = () => {
  const [foods, setFoods] = useState([]);

  const search = (searchValue) => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const result = await spoonacular.get(
        `/recipes/findByIngredients/?ingredients=${searchValue}?&apiKey=${apiKey}&number=6`
      );
      setFoods(result.data);
      // console.log(result.data);
    };
    fetchData();
  };

  return (
    <>
    <Navbar />
    <div className='search-layout'>
      <Search search={search} />
    
      <div className='search-container'>
        {foods.map((recipe, i) => (
          <Searchresults
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Searchpage;
