// UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send user data to the server
    axios.post('/api/users', { username })
      .then(response => console.log('User created successfully', response.data))
      .catch(error => console.error('Error creating user', error));
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleInputChange} />
        </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;
