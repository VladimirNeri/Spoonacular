import React from 'react';
// import { Link } from 'react-router-dom';
import './recipes.css';


const Recipes = ({ id, title, image, instructions, summary }) => {
// add line breaks to rendered string
const tagHtml = (summary) => {
  let string = summary.replace(/(?:\r\n|\r|\n)/g, '<br>');
  return string;
};

const renderInstructions = () => {
  return <div dangerouslySetInnerHTML={{ __html: tagHtml(instructions) }}/>
};


  return (
    <div className='recipe'>
      
        <h2 className='recipe-title'>{title}</h2>
        <div className='recipe-image'>
          <img src={image} alt='recipe' />
        </div>
    </div>
  );
};

export default Recipes;
