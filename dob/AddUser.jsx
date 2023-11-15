import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const addUser = () => {
    // Send a POST request to the backend to add a new user
    axios.post('/api/users', { name, dateOfBirth })
      .then(response => console.log('User added successfully:', response.data))
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>Date of Birth:</label>
      <input type="date" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />

      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default AddUser;