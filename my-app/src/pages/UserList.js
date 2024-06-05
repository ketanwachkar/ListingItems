import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/Api';
import UserTable from '../components/UserTable';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then((response) => setUsers(response.data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/add-user')}
        style={{ marginBottom: '16px' }}
      >
        Add User
      </Button>
      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default UserList;
