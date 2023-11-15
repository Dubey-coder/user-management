import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignOut = () => {
  const history = useHistory();

  const handleSignOut = () => {
    // Call the sign-out API
    axios.post('/api/auth/signout')
      .then(response => {
        console.log('User signed out successfully:', response.data);
        // Redirect to the login page or any other desired page
        history.push('/login');
      })
      .catch(error => console.error('Error signing out:', error));
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
