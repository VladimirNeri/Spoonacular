import React, { useState } from 'react';
import './search.css';


const Search = (props) => {
  const [search, setSearch] = useState('');
  

  const onChanges = (e) => {
    setSearch(e.target.value);
  }

  const resetInputField = () => {
    setSearch('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(search);
    resetInputField();
  }

  return (
      <form className='recipe-search'>
        <input
          className='ingredient-input'
          type='text'
          placeholder='Search Recipe by Ingredient'
          value={search}
          onChange={onChanges}
        />
        <input onClick={handleSubmit} type="submit" value="SEARCH" />
      </form>
  );
};

export default Search;
