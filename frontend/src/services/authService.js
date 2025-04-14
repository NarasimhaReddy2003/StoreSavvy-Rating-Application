import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/auth';

export const register = async (formData) => {
  const { confirmPassword, ...data } = formData;
  try {
    const response = await axios.post(`${API_BASE}/register`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE}/login`, formData);
    // For development/testing, if no backend is available yet
    if (!response.data) {
      // Simulate a response with user data
      return {
        data: {
          id: 1,
          name: 'Test User',
          email: formData.email,
          role: formData.email.includes('admin') ? 'admin' : 
                formData.email.includes('owner') ? 'owner' : 'user'
        }
      };
    }
    return response;
  } catch (error) {
    throw error;
  }
};
