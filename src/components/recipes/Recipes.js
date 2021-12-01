import React from 'react';
import { Link } from 'react-router-dom';
import './recipes.css'; 

const Recipes = ({ id, title, image }) => {
  return (
    <div className='recipe'>
      <Link to={`/recipe/${id}`}>
      <h2>{title}</h2>
      <div className='recipe-image'>
        <img src={image} alt='recipe' />
      </div>
      </Link>
    </div>
  )
}

export default Recipes
