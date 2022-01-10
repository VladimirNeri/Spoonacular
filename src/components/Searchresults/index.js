import React from 'react';
// import { Link } from 'react-router-dom';
import './searchresults.css';

const Searchresults = (props) => {
  return (

    <div className='search-results'>

      <div className='recipe-card'>
        <h4 className='recipe-title'>{props.title}</h4>
        <div className='recipe-image'>
          <img src={props.image} alt='recipe' />
        </div>
      </div>

    </div>
    
  );
};

export default Searchresults;
