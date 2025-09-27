import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);

export const getNotes = (token, search = "") =>
  axios.get(`${API_URL}/notes?search=${search}`, { headers: { Authorization: `Bearer ${token}` } });

export const addNote = (token, data) =>
  axios.post(`${API_URL}/notes`, data, { headers: { Authorization: `Bearer ${token}` } });

export const updateNote = (token, id, data) =>
  axios.put(`${API_URL}/notes/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });

export const deleteNote = (token, id) =>
  axios.delete(`${API_URL}/notes/${id}`, { headers: { Authorization: `Bearer ${token}` } });
