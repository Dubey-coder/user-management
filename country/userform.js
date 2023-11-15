// UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');

  const handleSave = () => {
    // Send data to the server to create a new user
    axios.post('/api/users', { username, country })
      .then(response => {
        console.log('User saved successfully:', response.data);
        // Optionally, update the user list or perform other actions
      })
      .catch(error => console.error('Error saving user:', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <label>Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
      <label>Country: <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} /></label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserForm;