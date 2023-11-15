import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState('username');

  useEffect(() => {
    // Fetch users from the server
    axios.get(`/api/users?sortBy=${sortBy}`)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, [sortBy]);

  const handleSort = (attribute) => {
    setSortBy(attribute);
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => handleSort('username')}>Sort by Username</button>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
