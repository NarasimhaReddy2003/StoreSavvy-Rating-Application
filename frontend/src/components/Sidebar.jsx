import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ role = 'user' }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const links = {
    admin: [
      { label: 'Dashboard', path: '/admin/dashboard' },
      { label: 'Users', path: '/admin/users' },
      { label: 'Stores', path: '/admin/stores' },
      { label: 'Logout', path: '/' }
    ],
    user: [
      { label: 'Store List', path: '/user/stores' },
      { label: 'Profile', path: '/user/profile' },
      { label: 'Logout', path: '/' }
    ],
    owner: [
      { label: 'Dashboard', path: '/owner/dashboard' },
      { label: 'Profile', path: '/owner/profile' },
      { label: 'Logout', path: '/' }
    ]
  };

  const navLinks = links[role] || [];

  const sidebarStyle = {
    width: '220px',
    // backgroundColor: '#1F2937',
    color: '#FFFFFF',
    padding: '24px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '20px',
    cursor: 'pointer',
    color: '#FFFFFF',
    textDecoration: 'none'
  };

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      color: '#FFFFFF',
      fontWeight: isActive ? '600' : '500',
      fontSize: '16px',
      textDecoration: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      transition: 'all 0.2s ease-in-out',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
      }
    };
  };

  return (
    <aside style={sidebarStyle}>
      <h1 style={logoStyle} onClick={() => navigate('/')}>StoreSavvy</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={getLinkStyle(link.path)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
