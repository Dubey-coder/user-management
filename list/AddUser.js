// AddUser.js
import React, { useState } from 'react';

const AddUser = () => {
  const [username, setUsername] = useState('');

  const handleAddUser = () => {
    // Make API call to add a new user
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => response.json())
      .then((data) => console.log('User added successfully', data))
      .catch((error) => console.error('Error adding user:', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
