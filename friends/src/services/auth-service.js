import axios from 'axios';

export const login = async (username, password) => {
  const url = 'http://localhost:5000/api/login'
  const res = await axios.post(url, {
    username,
    password
  })
  const token = res.data.payload;
   localStorage.setItem('token', token)
};
