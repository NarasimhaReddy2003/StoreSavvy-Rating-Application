import React from 'react';

const Dropdown = ({ label, name, value, onChange, options = [], required = false, height = '44px' }) => {
  return (
    <div className="form-group" style={{ marginBottom: '28px' }}>
      <label htmlFor={name} style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #D1D5DB',
          height: height,
          fontSize: '14px'
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;