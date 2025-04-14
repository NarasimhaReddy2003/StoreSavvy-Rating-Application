import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('isAuthenticated');
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem('role') || null;
  });

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setRole(userData?.role || null);

    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
    if (userData?.role) localStorage.setItem('role', userData.role);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setRole(null);

    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('role');
  };

  const updateRole = (r) => {
    setRole(r);
    localStorage.setItem('role', r);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    role,
    setRole: updateRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
