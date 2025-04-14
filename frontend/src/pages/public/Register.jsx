import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register as registerUser } from '../../services/authService';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: ''
  });
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      return setErrors(['Passwords do not match']);
    }

    try {
      const { confirmPassword, ...submitData } = formData;
      const res = await registerUser(submitData);
      setSuccess(res.data.message || 'Registered successfully!');
      setFormData({ name: '', email: '', password: '', confirmPassword: '', address: '' });
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors(['Registration failed']);
      }
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

        <h1 className="auth-title">Sign Up</h1>
        <p className="auth-subtitle">Create an account to get started</p>

        {success && <div className="success-message">{success}</div>}
        <ErrorMessage messages={errors} />

        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <InputField
            label="Email"
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

          <InputField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <Button type="submit">Sign Up</Button>

          <div style={{textAlign: 'center', marginTop: '25px'}}>
            <Link to="/login">Already have an account? Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
