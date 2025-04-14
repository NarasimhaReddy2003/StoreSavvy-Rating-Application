import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import { useNavigate } from 'react-router-dom';

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    role: 'User'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === '' || formData.email === '' || formData.address === '' || formData.password === '' || formData.confirmPassword === '' || formData.role === '') {
      alert("Please fill all the fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('User Submitted:', formData);
    navigate('/admin/users');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role="admin" />
      <main style={{ marginLeft: '220px', padding: '40px', width: '100%', backgroundColor: '#F9FAFB', width: '100%', height: '100vh' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '32px' }}>Add User</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
          <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #D1D5DB', marginBottom: '20px' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '4%', marginBottom: '20px' }}>
            <div style={{ width: '48%' }}>
              <InputField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ width: '48%' }}>
              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <Dropdown
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            options={['User', 'Admin', 'Owner']}
            required
          />

          <Button type="submit" onClick={handleSubmit}>Add</Button>
        </form>
      </main>
    </div>
  );
};

export default AddUserForm;
