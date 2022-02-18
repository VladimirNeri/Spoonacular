import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' className='nav-brand'>
        Spoonacular
      </NavLink>
      <ul>
        <li className='nav-item'>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact activeClassName='active' to='/recipe'>
            Recipe of the Day
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink exact activeClassName='active' to='/search'>
            Search
          </NavLink>
        </li>
        <li className='nav-item'>
          <Link to={{ pathname: "https://github.com/VladimirNeri/Spoonacular" }} target="_blank" >
            Github
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
