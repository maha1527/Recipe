import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/actions';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    // Example: Filter by cuisine type. You can expand this.
    dispatch(setFilters({ cuisineType: filter }));
  };

  return (
    <div>
      <button onClick={() => handleFilterChange('American')}>American</button>
      <button onClick={() => handleFilterChange('Italian')}>Italian</button>
      {/* Add more filter buttons as needed */}
    </div>
  );
}

export default Filter;