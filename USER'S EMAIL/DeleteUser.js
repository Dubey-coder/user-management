//DeleteUser.js - Allow the user to delete a user.
//jsx

//DeleteUser.js
import React, { useEffect } from 'react';

const DeleteUser = ({ match, history }) => {
  useEffect(() => {
    // Send a DELETE request to remove the user
    fetch(`/api/users/${match.params.email}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('User deleted');
        history.push('/users');
      })
      .catch(error => console.error('Error deleting user:', error));
  }, [match.params.email, history]);

  return (
    <div>
      <h2>Delete User</h2>
      <p>Deleting user...</p>
    </div>
  );
};

export default DeleteUser;