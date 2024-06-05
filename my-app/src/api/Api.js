import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1/users';

export const fetchUsers = () => axios.get(API_URL);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
