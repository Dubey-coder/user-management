//AddUser.js - Allow the user to add a new user.
//jsx
//Copy code
// AddUser.js
import React, { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');

  const handleAddUser = () => {
    // Send a POST request to add a new user
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(() => {
        console.log('User added');
        // You might want to redirect or update the user list after adding
      })
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUser;