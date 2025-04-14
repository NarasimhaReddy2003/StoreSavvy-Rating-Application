import React from 'react';

const SearchBar = ({ value, onChange, placeholder = 'Search stores', height = '44px' }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        height: height,
        padding: '12px 16px',
        fontSize: '14px',
        width: '100%',
        maxWidth: '320px',
        borderRadius: '8px',
        border: '1px solid #E5E7EB',
        backgroundColor: '#FFFFFF',
        color: '#111827'
      }}
    />
  );
};

export default SearchBar;
