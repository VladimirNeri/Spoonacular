import React from 'react';
import './recipe.css';

const Recipes = (props) => {
  // add line breaks to rendered string
  const tagHtmlSummary = (text) => {
    let string = text.toString().replace(/(?:\r\n|\r|\n)/g, '<br>');
    return string;
  };

  const renderSummary = () => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: tagHtmlSummary(props.summary) }}
      />
    );
  };

  return (
    <div className='recipe-container'>
      <h2 className='recipe-title'>{props.title}</h2>

      <div className='recipe-child'>
        <img className='recipe-image' src={props.image} alt='recipe' />
      </div>

      <div className='recipe-child'>{renderSummary()}</div>
    </div>
  );
};

export default Recipes;
