import React, { useState, useEffect } from 'react';
import UserList from './UserList';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from API and update state
    // Example: fetch('/api/users').then(response => response.json()).then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <UserList users={users} />
    </div>
  );
};

export default UserManagement;