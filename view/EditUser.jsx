import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios.get(`/api/users/${props.match.params.id}`)
      .then(response => setUsername(response.data.username))
      .catch(error => console.error('Error fetching user details:', error));
  }, [props.match.params.id]);

  const handleSubmit = () => {
    axios.put(`/api/users/${props.match.params.id}`, { username })
      .then(response => console.log('User updated successfully:', response.data))
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input
        type="text"
        placeholder="Enter new username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Update User</button>
    </div>
  );
};

export default EditUser;
