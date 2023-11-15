// UserSearch.js
import React, { useState } from 'react';

const UserSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserSearch;
