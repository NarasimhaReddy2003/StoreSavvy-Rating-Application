import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import SearchBar from '../../components/SearchBar';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ViewUsers = () => { 
  const [search, setSearch] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  const users = [
    { name: 'John Doe', email: 'john@example.com', role: 'User', address: '123 Elm St, Springfield, IL 62701' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', address: '456 Oak St, Metropolis, NY 10001' },
    { name: 'Michael Johnson', email: 'michael@example.com', role: 'User', address: '789 Pine St, Lincoln, NE 68508' },
    { name: 'Emily Brown', email: 'emily@example.com', role: 'User', address: '321 Maple St, Gotham, MA 02110' }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={user?.role || 'admin'}/>
      <main style={{ marginLeft: '240px', padding: '32px', backgroundColor: '#F9FAFB', width: '100%', height: '100vh' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: '#111827' }}>Users</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users" height='15px'/>
          <button
            onClick={() => navigate('/admin/add-user')}
            style={{
            backgroundColor: '#6366F1',
            color: '#FFFFFF',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}>
            Add User
          </button>
        </div>

        <table style={{ width: '100%', background: '#fff', borderRadius: '12px', borderCollapse: 'collapse', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid #E5E7EB' }}>
              <th style={{ padding: '16px 24px' }}>Name</th>
              <th style={{ padding: '16px 24px' }}>Email</th>
              <th style={{ padding: '16px 24px' }}>Role</th>
              <th style={{ padding: '16px 24px' }}>Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <td style={{ padding: '16px 24px' }}>{user.name}</td>
                <td style={{ padding: '16px 24px' }}>{user.email}</td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{
                    backgroundColor: '#E5E7EB',
                    color: '#374151',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {user.role}
                  </span>
                </td>
                <td style={{ padding: '16px 24px' }}>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ViewUsers;
