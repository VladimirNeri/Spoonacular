import React from 'react';
// import { Link } from 'react-router-dom';
import './recipes.css';


const Recipes = (props) => {
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
  return <div dangerouslySetInnerHTML={{ __html: tagHtmlSummary(props.summary) }}/>
};

const renderInstructions = () => {
  return <div dangerouslySetInnerHTML={{ __html: tagHtmlInstructions(props.instructions) }}/>
};


  return (
    <div className='recipe'>
      
        <h2 className='recipe-title'>{props.title}</h2>
        <div className='recipe-image'>
          <img src={props.image} alt='recipe' />
        </div>
        <div className='recipe-summary'>{renderSummary()}</div>
        <br></br>
        <div className='recipe-instructions'>{renderInstructions()}</div>
        <br></br>
        <div className='recipe-ingredients'>{props.ingredients}</div>
    </div>
  );
};

export default Recipes;
