import React from 'react';
import Sidebar from '../../components/Sidebar';
import { useNavigate } from 'react-router-dom';

const ProfileUser = () => {
  const navigate = useNavigate();

  // This should come from context or API
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield, USA'
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '240px', padding: '40px', backgroundColor: '#F9FAFB', width: '100%', height: '100vh' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>Profile</h1>

        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: '500', color: '#6B7280' }}>Name</p>
              <p style={{ fontSize: '16px', marginBottom: '20px' }}>{user.name}</p>

              <p style={{ fontWeight: '500', color: '#6B7280' }}>Email</p>
              <p style={{ fontSize: '16px', marginBottom: '20px' }}>{user.email}</p>

              <p style={{ fontWeight: '500', color: '#6B7280' }}>Address</p>
              <p style={{ fontSize: '16px', marginBottom: '20px' }}>{user.address}</p>

              <p style={{ fontWeight: '500', color: '#6B7280' }}>Password</p>
              <p style={{ fontSize: '16px', marginBottom: '0' }}>*********</p>
            </div>

            <button
              onClick={() => navigate('/user/change-password')}
              style={{
                height: '40px',
                padding: '10px 24px',
                backgroundColor: '#EF4444',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Change Password
            </button>
          </div>

          <button
            onClick={() => navigate('/user/edit-profile')}
            style={{
              marginTop: '24px',
              height: '40px',
              padding: '10px 24px',
              backgroundColor: '#6366F1',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Edit Profile
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProfileUser;
