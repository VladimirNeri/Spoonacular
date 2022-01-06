import React from 'react';
// import { Link } from 'react-router-dom';

const Searchresults = (props) => {
  return (
    <div className='recipe'>
      <h2 className='recipe-title'>{props.title}</h2>
      <div className='recipe-image'>
        <img src={props.image} alt='recipe'/>
      </div>
    </div>
  );
};

export default Searchresults;
