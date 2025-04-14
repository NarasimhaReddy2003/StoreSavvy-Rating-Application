import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import RatingStars from '../../components/RatingStars';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StoreDetails = () => {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const { storeId  } = useParams();
  const navigate = useNavigate();


  const store = {
    name: 'Best Mart',
    email: 'contact@bestmart.com',
    address: '456 Elm St, Cityville, CA A6 98765',
    averageRating: 4.5
  };

  const reviews = [
    { name: 'John Doe', rating: 5, comment: 'Great customer service and product selection.' }
  ];

  const handleRatingClick = (value) => setUserRating(value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { userRating, comment });
    // Call API to submit rating and comment
    setUserRating(0);
    setComment('');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '220px', padding: '40px', backgroundColor: '#F9FAFB', width: '100%', height: '100vh' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>{store.name}</h1>
          <p style={{ fontSize: '14px', color: '#6B7280' }}>{storeId}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '12px 0' }}>
            <RatingStars rating={store.averageRating} />
            <span style={{ fontWeight: '500', fontSize: '16px', color: '#111827' }}>{store.averageRating} stars</span>
          </div>
          <p style={{ fontSize: '14px', color: '#6B7280' }}>{store.email}</p>
          <p style={{ fontSize: '14px', color: '#6B7280' }}>{store.address}</p>
        </div>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Submit a Review</h2>
          <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', maxWidth: '500px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Rating</label>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  style={{ fontSize: '20px', color: (hoverRating || userRating) >= star ? '#FACC15' : '#E5E7EB', cursor: 'pointer' }}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ★
                </span>
              ))}
            </div>

            <label htmlFor="comment" style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience..."
              style={{ width: '90%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E5E7EB', minHeight: '80px', marginBottom: '16px' }}
            />

            <button
              type="submit"
              disabled={!userRating}
              style={{
                backgroundColor: '#EF4444',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                cursor: userRating ? 'pointer' : 'not-allowed'
              }}
            >
              Submit
            </button>
          </form>
        </section>

        <section>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Reviews</h2>
          {reviews.map((r, idx) => (
            <div key={idx} style={{ background: '#fff', padding: '16px 20px', borderRadius: '8px', marginBottom: '16px' }}>
              <p style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px' }}>{r.name} <span style={{ color: '#FACC15' }}>{'★'.repeat(r.rating)}</span></p>
              <p style={{ fontSize: '14px', color: '#374151' }}>{r.comment}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default StoreDetails;
