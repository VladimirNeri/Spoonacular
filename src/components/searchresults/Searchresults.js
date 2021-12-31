import React from 'react';
// import { Link } from 'react-router-dom';

const Searchresults = ({ id, title, image, summary }) => {
  return (
    <div className='recipe'>
      <h2 className='recipe-title'>{title}</h2>
      <div className='recipe-image'>
        <img src={image} alt='recipe' />
      </div>
    </div>
  );
};

export default Searchresults;
