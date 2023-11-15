//UserList.js - Display a list of users.
//jsx

// UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API when the component mounts
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;