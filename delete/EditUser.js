//EditUser.js - Allow the user to edit an existing user.
//jsx
//Copy code

// EditUser.js
import React, { useState, useEffect } from 'react';

const EditUser = ({ match }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    // Fetch the user details when the component mounts
    fetch(`/api/users/${match.params.userId}`)
      .then(response => response.json())
      .then(data => setName(data.name))
      .catch(error => console.error('Error fetching user details:', error));
  }, [match.params.userId]);

  const handleEditUser = () => {
    // Send a PUT request to update the user details
    fetch(`/api/users/${match.params.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(() => {
        console.log('User updated');
        // You might want to redirect or update the user list after editing
      })
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleEditUser}>Save Changes</button>
    </div>
  );
};

export default EditUser;