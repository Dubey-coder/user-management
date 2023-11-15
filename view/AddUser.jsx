import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    axios.post('/api/users', { username })
      .then(response => console.log('User added successfully:', response.data))
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
      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
};

export default AddUser;
