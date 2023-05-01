import api from '../../api/axios';

const SIGNUP_URL = '/api/citrone/auth';

//SignUp user
const register = async (userData) => {
  const response = await api.post(SIGNUP_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
