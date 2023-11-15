import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.username}</li>
      ))}
    </ul>
  );
};

export default UserList;