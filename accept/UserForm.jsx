import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to create a new user
    axios.post('/api/users', { username })
      .then(response => {
        console.log(response.data);
        // You may want to update the user list or perform other actions after creating a user
      })
      .catch(error => console.error(error));
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