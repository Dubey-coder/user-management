import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send user data to the server
    axios.post('/api/users', { username })
      .then(response => {
        console.log('User added successfully', response.data);
        // Reset the form or update the user list
      })
      .catch(error => console.error('Error adding user', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
