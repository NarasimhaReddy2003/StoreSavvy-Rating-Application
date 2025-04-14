import React from 'react';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const ProfileOwner = () => {
  const navigate = useNavigate();
  
  const owner = {
    name: 'Jane Doe',
    email: 'jane@embom.com',
    address: '123 Elm St, Spingfield, IL 62701'
  };

  const handleUpdatePassword = () => {
    navigate('/owner/change-password', { 
      state: { 
        ownerData: owner 
      }
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role="owner" />
      <main style={{ marginLeft: '240px', padding: '32px', width: '100%', backgroundColor: '#F9FAFB', height: '100vh' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '28px' }}>Profile</h1>

        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 6px rgba(0, 0, 0, 0.08)', maxWidth: '500px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>{owner.name}</h2>

          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#6B7280', fontWeight: '500' }}>Email</p>
            <p style={{ color: '#111827' }}>{owner.email}</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#6B7280', fontWeight: '500' }}>Address</p>
            <p style={{ color: '#111827' }}>{owner.address}</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: '#6B7280', fontWeight: '500' }}>Password</p>
              <p style={{ color: '#111827' }}>********</p>
            </div>
            <Button onClick={handleUpdatePassword} style={{width: '200px'}}>Update Password</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileOwner;
