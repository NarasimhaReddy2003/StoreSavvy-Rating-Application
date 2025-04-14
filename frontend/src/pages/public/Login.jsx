import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as loginUser } from '../../services/authService';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      const response = await loginUser(formData);
      const userData = response.data;
      login(userData);
      
      switch(userData.role?.toLowerCase()) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'owner':
          navigate('/owner/dashboard');
          break;
        default:
          navigate('/user/stores');
      }
    } catch (err) {
      setErrors([err.response?.data?.message || 'Login failed. Please try again.']);
    }
  };

  return (
    <div className="auth-container" style={{ position: 'relative' }}>
      <div
       style={{
        position: 'absolute',
        top: '24px',
        left: '32px',
        fontSize: '20px',
        fontWeight: '700',
        color: '#FFFFFF',
        zIndex: 50,
        cursor: 'pointer'
      }} onClick={() => navigate('/')}>
        StoreSavvy
      </div>

      <div className="auth-card">

        <h1 className="auth-title">Login</h1>
        <p className="auth-subtitle">Sign in to your account</p>

        <ErrorMessage messages={errors} />

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="forgot-password-container">
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot password?
            </Link>
          </div>

          <Button type="submit">Login</Button>

          <div style={{textAlign: 'center', marginTop: '25px'}}>
            <Link to="/register">Don't have an account? Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
