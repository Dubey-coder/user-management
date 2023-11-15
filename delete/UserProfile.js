//UserProfile.js - Display detailed information about a user.
//jsx
//Copy code
// UserProfile.js
import React, { useState, useEffect } from 'react';

const UserProfile = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user details when the component mounts
    fetch(`/api/users/${match.params.userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [match.params.userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      {/* Add other user details here */}
    </div>
  );
};

export default UserProfile;