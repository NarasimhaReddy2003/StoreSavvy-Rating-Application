import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const ownerData = location.state?.ownerData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match.');
      return;
    }
    console.log('Password updated:', { currentPassword, newPassword });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');

    if (user?.role === 'owner') navigate('/owner/profile');
    else if (user?.role === 'admin') navigate('/admin/profile');
    else navigate('/user/profile');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={user?.role} />
      <main style={{ marginLeft: '240px', padding: '40px', backgroundColor: '#F9FAFB', width: '100%' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>
          {ownerData?.name || user?.name || 'Change Password'}
        </h1>
        <div style={{ marginBottom: '24px' }}>
          <p style={{ color: '#6B7280' }}>Email: {ownerData?.email || user?.email}</p>
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>Change Password</h2>

        <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '24px', borderRadius: '10px', maxWidth: '480px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              style={{ width: '90%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #D1D5DB' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              style={{ width: '90%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #D1D5DB' }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: '90%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #D1D5DB' }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#EF4444',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Save
          </button>
        </form>
      </main>
    </div>
  );
};

export default ChangePassword;
