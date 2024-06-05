import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/Api';
import UserTable from '../components/UserTable';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then((response) => 
    setUsers(response.data)
);
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/add-user')}
      >
        Add User
      </Button>
      <UserTable users={users} />
    </div>
  );
};

export default UserList;
