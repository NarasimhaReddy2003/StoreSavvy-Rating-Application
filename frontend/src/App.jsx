import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Outlet />
    </div>
  );
};

export default App;
