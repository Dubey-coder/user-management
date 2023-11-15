import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Send sign-in data to the server
    axios.post('/api/signin', { username, password })
      .then(response => {
        console.log('Sign in successful', response.data);
        // Handle successful sign-in (e.g., set user session)
      })
      .catch(error => console.error('Error signing in', error));
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
