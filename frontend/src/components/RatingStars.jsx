import React from 'react';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} style={{ color: '#FACC15', fontSize: '16px' }}>★</span>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#D1D5DB', fontSize: '16px' }}>★</span>
      ))}
    </div>
  );
};

export default RatingStars;
