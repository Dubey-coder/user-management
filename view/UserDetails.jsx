import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetails = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/api/users/${props.match.params.id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [props.match.params.id]);

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Username:</strong> {user.username}</p>
    </div>
  );
};

export default UserDetails;
