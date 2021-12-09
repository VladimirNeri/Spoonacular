import React from 'react';
// import { Link } from 'react-router-dom';
import './recipes.css';
import logo from './images/image.jpg';

const Recipes = ({ id, title, image, summary }) => {
  return (
    <div className='recipe'>
      
        <h2 className='recipe-title'>{title}</h2>
        <div className='recipe-image'>
          <img src={image} alt='recipe' />
        </div>
        <div className='recipe-summary'>
          <p>
            {summary}
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. */}
          </p>
        </div>
    
    </div>
  );
};

export default Recipes;
