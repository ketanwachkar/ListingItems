import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../store';

const SearchFilter = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const query = event.target.value;
    dispatch(fetchPosts(query));
  };

  return (
    <input
      type="text"
      placeholder="Search by title"
      onChange={handleSearch}
    />
  );
};

export default SearchFilter;
