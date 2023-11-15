import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send user data to the API to create a new user
    axios.post('/api/users', { name })
      .then(response => {
        console.log(response.data);
        // Optionally, you can update the user list or perform other actions
      })
      .catch(error => console.error(error));

    // Clear the form after submission
    setName('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
