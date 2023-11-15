import React from 'react';

const UserProfile = ({ username }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default UserProfile;
