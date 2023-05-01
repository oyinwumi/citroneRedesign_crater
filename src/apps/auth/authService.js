import api from '../../api/axios';

const SIGNUP_URL = '/api/citrone/auth/';
const LOGIN_URL = '/api/citrone/auth/login/';

//SignUp user
const register = async (userData) => {
  const response = await api.post(SIGNUP_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Login User
const login = async (userData) => {
  const response = await api.post(LOGIN_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
