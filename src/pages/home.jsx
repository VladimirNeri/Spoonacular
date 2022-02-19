import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/titleimage.jpg';
import Navbar from '../components/Navbar.js';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='home-layout'>
      <div>
        <h1>Online Recipe Search</h1>
        <p>
          Search your favorite recipes by ingredient with our
          easy to use app, and view the recipe along with cooking instructions.  All
          data is provided by the <em>Spoonacular API</em>. 
        </p>
        <p>
          <Link to='recipe' className='btn btn-default'>
            Recipe of the Day
          </Link>
          <Link to='search' className='btn btn-default'>
            Start Searching
          </Link>
        </p>
      </div>
      <img
        src={logo}
        width='450'
        height='auto'
        className='rounded home-image'
        alt=''
      />
    </div>
    </>
  );
};

export default Home;
