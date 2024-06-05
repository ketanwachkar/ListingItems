import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from '../pages/UserList';
import UserFormPage from '../pages/UserFormPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<UserList />} />
      <Route path="/add-user" element={<UserFormPage />} />
      <Route path="/edit-user/:id" element={<UserFormPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
