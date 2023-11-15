//AddUser.js - Allow the user to add a new user.
//jsx

// AddUser.js
import React, { useState } from 'react';

const AddUser = () => {
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    // Send a POST request to add a new user
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => console.log('User added:', data))
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;