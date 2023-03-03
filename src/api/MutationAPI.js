import axios from 'axios';

const URL = 'http://localhost:8000';
export const loginAPI = async (payload) => {
  const data = await axios.post(`${URL}/api/auth/login`, payload);
  return data;
};
export const registerAPI = (payload) => {
  const data = axios.post(`${URL}/api/auth/register`, payload);
  return data;
};
