import React from 'react';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../context/AuthContext';

const DashboardAdmin = () => {
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={user?.role || 'admin'} />
      <main style={{ marginLeft: '240px', padding: '32px', backgroundColor: '#F9FAFB', minHeight: '100vh', width: 'calc(100% - 220px)', height: '100%' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px' }}>Dashboard</h1>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={cardStyle}>
            <p style={labelStyle}>Total Users</p>
            <p style={valueStyle}>120</p>
          </div>
          <div style={cardStyle}>
            <p style={labelStyle}>Total Stores</p>
            <p style={valueStyle}>35</p>
          </div>
          <div style={cardStyle}>
            <p style={labelStyle}>Total Ratings</p>
            <p style={valueStyle}>350</p>
          </div>
        </div>
      </main>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '20px 24px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  width: '200px'
};

const labelStyle = {
  fontSize: '16px',
  fontWeight: '500',
  color: '#6B7280',
  marginBottom: '8px'
};

const valueStyle = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#111827'
};

export default DashboardAdmin;
