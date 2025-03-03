import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/actions';

function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTerm(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={term}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;