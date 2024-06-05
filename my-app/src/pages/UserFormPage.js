import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
import { createUser, updateUser, fetchUsers } from '../api/Api';

const UserFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      fetchUsers().then((response) => {
        console.log("Response from fetchUsers:", response);
        const user = response.data.find((u) => u.id.toString() === id);
        console.log("User to edit:", user);
        setInitialData(user);
      });
    }
  }, [id]);

  const handleSubmit = (user) => {
    console.log("User data to submit:", user);
    if (id) {
      console.log("Updating user with ID:", id);
      updateUser(id, user)
        .then((response) => {
        setInitialData()
          console.log("Update response:", response);
          navigate('/');
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      console.log("Creating new user");
      createUser(user)
        .then((response) => {
          console.log("Create response:", response);
          navigate('/');
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <UserForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  );
};

export default UserFormPage;
