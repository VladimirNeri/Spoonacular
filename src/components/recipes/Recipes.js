import React from 'react';
// import { Link } from 'react-router-dom';
import './recipes.css';


const Recipes = ({ id, title, image, instructions, summary, ingredients }) => {
// add line breaks to rendered string
const tagHtmlSummary = (summary) => {
  let string = summary.replace(/(?:\r\n|\r|\n)/g, '<br>');
  return string;
};

const tagHtmlInstructions = (instructions) => {
  let string = instructions.replace(/(?:\r\n|\r|\n)/g, '<br>');
  return string;
};

const renderSummary = () => {
  return <div dangerouslySetInnerHTML={{ __html: tagHtmlSummary(summary) }}/>
};

const renderInstructions = () => {
  return <div dangerouslySetInnerHTML={{ __html: tagHtmlInstructions(instructions) }}/>
};


  return (
    <div className='recipe'>
      
        <h2 className='recipe-title'>{title}</h2>
        <div className='recipe-image'>
          <img src={image} alt='recipe' />
        </div>
        <div className='recipe-summary'>{renderSummary()}</div>
        <br></br>
        <div className='recipe-instructions'>{renderInstructions()}</div>
        <br></br>
        <div className='recipe-ingredients'>{ingredients}</div>
    </div>
  );
};

export default Recipes;
