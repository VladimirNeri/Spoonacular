import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/titleimage.jpg';

const Home = () => {
  return (
    <div className='home-layout'>
      <div>
        <h1>Online Recipe Search</h1>
        <p>
          Search your favorite recipes with <em>Spoonacular API</em> with our
          easy to use app, and view the recipe and nutrition information.
        </p>
        <Link to='search' className='btn btn-default'>
          Start Searching
        </Link>
      </div>
      <img
        src={logo}
        width='350'
        height='240'
        className='rounded home-image'
        alt=''
      />
    </div>
  );
};

export default Home;
