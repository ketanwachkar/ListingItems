import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { createUser, updateUser, fetchUsers } from '../api/Api';
import { Alert, Snackbar } from '@mui/material';

const UserFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsers();
        const user = response.data.find((u) => u.id.toString() === id);
        setInitialData(user);
      } catch (err) {
        setError('Error fetching user data.');
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (user) => {
    try {
      if (id) {
        await updateUser(id, user);
      } else {
        await createUser(user);
      }
      navigate('/');
    } catch (err) {
        // alert(err.response.data.message)
        setError(err.response.data.message);
    }
  };

  const handleClose = () => {
    setError(null);
  };

  return (
    <div>
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <UserForm initialData={initialData} onSubmit={handleSubmit} />
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UserFormPage;
