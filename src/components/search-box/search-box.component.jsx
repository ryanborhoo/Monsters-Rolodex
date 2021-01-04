import React from 'react';
import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    // onChange={(e) => console.log(e)}
    // onChange={(e) => console.log(e.target)}
    // onChange={(e) => console.log(e.target.value)}
    onChange={handleChange}
  />
);
