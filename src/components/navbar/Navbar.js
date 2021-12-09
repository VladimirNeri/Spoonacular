import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={`/`}>
        <h1 className='title'>Spoonacular API</h1>
      </Link>
    </div>
  )
}

export default Navbar;
