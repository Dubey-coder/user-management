import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [username, setUsername] = useState('');

  const handleAddUser = () => {
    // Add user to the server
    axios.post('/api/users', { username })
      .then(response => {
        console.log('User added successfully:', response.data);
        // Optionally, update the user list or redirect to the user list page
      })
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;
