// frontend/src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const signup = (userData) => API.post('/auth/signup', userData);
export const login = (userData) => API.post('/auth/login', userData);
export const addMedication = (data) => API.post('/medications/add', data);
export const getMedications = (userId) => API.get(`/medications/${userId}`);
export const markAsTaken = (id) => API.put(`/medications/taken/${id}`);
