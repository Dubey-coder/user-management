//EditUser.js - Allow the user to edit an existing user.
//jsx

// EditUser.js
import React, { useState, useEffect } from 'react';

const EditUser = ({ match }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch the user details when the component mounts
    fetch(`/api/users/${match.params.email}`)
      .then(response => response.json())
      .then(data => setEmail(data.email))
      .catch(error => console.error('Error fetching user details:', error));
  }, [match.params.email]);

  const handleEditUser = () => {
    // Send a PUT request to update the user details
    fetch(`/api/users/${match.params.email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => console.log('User updated:', data))
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleEditUser}>Save Changes</button>
    </div>
  );
};

export default EditUser;