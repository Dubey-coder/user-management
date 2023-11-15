import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');

  const handleAddUser = () => {
    axios.post('/api/users', { name })
      .then(response => console.log('User added:', response.data))
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default UserForm;