import React, { useEffect } from 'react';
import axios from 'axios';

const DeleteUser = (props) => {
  useEffect(() => {
    axios.delete(`/api/users/${props.match.params.id}`)
      .then(response => console.log('User deleted successfully:', response.data))
      .catch(error => console.error('Error deleting user:', error));
  }, [props.match.params.id]);

  return (
    <div>
      <h2>Delete User</h2>
      <p>User deleted successfully.</p>
    </div>
  );
};

export default DeleteUser;
