//DeclineUser.js - Allow the user to decline an invitation or remove a user.
//jsx
//Copy code
// DeclineUser.js
import React, { useEffect } from 'react';

const DeclineUser = ({ match, history }) => {
  useEffect(() => {
    // Send a DELETE request to decline/remove the user
    fetch(`/api/users/${match.params.userId}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('User declined');
        history.push('/users');
      })
      .catch(error => console.error('Error declining user:', error));
  }, [match.params.userId, history]);

  return (
    <div>
      <h2>Decline User</h2>
      <p>Declining user...</p>
    </div>
  );
};
export default DeclineUser;