import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='recipe-search'>
      <input 
      className='ingredient-input'
      type='text'
      placeholder='Search'/>
    </div>
  )
}

export default Search;
