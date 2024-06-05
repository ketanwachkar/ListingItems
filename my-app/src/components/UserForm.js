// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControlLabel, Switch } from '@mui/material';

const UserForm = ({ initialData, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setPhone(initialData.phone);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { name, email, phone, status });
    onSubmit({ name, email, phone, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={
          <Switch
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        }
        label="Active"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
