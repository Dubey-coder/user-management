//UserList.js - Display a list of users.
//jsx
//Copy code
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

  const handleDeleteUser = (userId) => {
    // Send a DELETE request to remove the user
    fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('User deleted');
        // Refresh the user list after deletion
        fetch('/api/users')
          .then(response => response.json())
          .then(data => setUsers(data))
          .catch(error => console.error('Error fetching users:', error));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;