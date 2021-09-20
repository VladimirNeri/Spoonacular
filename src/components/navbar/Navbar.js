import React from 'react'
import Search from '../search/Search'; 
import './navbar.css'; 

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='title'>Spoonacular API</h1>
        <Search />
    </div>
  )
}

export default Navbar;
