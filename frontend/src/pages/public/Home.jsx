import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { setRole } = useAuth();


  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F43F5E, #6366F1)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: '#fff',
      fontFamily: 'Inter, Poppins, sans-serif'
    }}>

      <nav style={{
        height: '64px',
        padding: '0 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 
          onClick={() => navigate('/')}
          style={{ 
            fontSize: '20px', 
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            ':hover': {
              opacity: 0.8
            }
          }}
        >
          StoreSavvy
        </h1>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={() => navigate('/login')}
            style={{
              background: 'transparent',
              color: '#fff',
              fontWeight: 500,
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            style={{
              backgroundColor: '#F43F5E',
              color: '#fff',
              fontWeight: 600,
              fontSize: '14px',
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
          >
            Register
          </button>
        </div>
      </nav>

      <div style={{ textAlign: 'center', padding: '80px 16px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: '700', lineHeight: '52px', marginBottom: '24px' }}>
          Discover, Rate, and Review<br />Stores You Love
        </h2>
        <p style={{ fontSize: '18px', lineHeight: '28px', color: '#E5E7EB', maxWidth: '700px', margin: '0 auto 40px' }}>
          Share your experience, explore top-rated stores, and help others make better choices.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={() => {setRole('admin'); navigate('/admin/dashboard')}} style={{ backgroundColor: '#EF4444', width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Admin
          </Button>
          <Button onClick={() => {setRole('user'); navigate('/user/stores')}} style={{ backgroundColor: '#6366F1', width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            User
          </Button>
          <Button onClick={() => {setRole('owner'); navigate('/owner/dashboard')}} style={{ backgroundColor: '#10B981', width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Store Owner
          </Button>
        </div>
      </div>

      <div style={{ height: '32px' }} />
    </div>
  );
};

export default Home;
