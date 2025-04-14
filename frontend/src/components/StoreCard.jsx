import React from 'react';
import { useNavigate } from 'react-router-dom';
import RatingStars from './RatingStars';

const StoreCard = ({ name, email, rating, id }) => {
  const navigate = useNavigate();
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      padding: '16px 20px',
      marginBottom: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
    }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>{name}</h3>
        <p style={{ fontSize: '14px', color: '#6B7280' }}>{email}</p>
        <RatingStars rating={rating} />
      </div>
      <button
        onClick={() => navigate(`/user/store/${id}`)}
        style={{
          backgroundColor: '#F43F5E',
          color: '#FFFFFF',
          padding: '10px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        View Details
      </button>
    </div>
  );
};

export default StoreCard;
