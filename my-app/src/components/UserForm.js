import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControlLabel, Switch } from '@mui/material';

const UserForm = ({ initialData, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('Ketan1234');
  const [avatar, setAvatar] = useState('');
  const [status, setStatus] = useState(true);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setPassword(initialData.password || '');
      setAvatar(initialData.avatar || '');
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password, avatar, status });
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
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder='Ketan1234'
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
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
