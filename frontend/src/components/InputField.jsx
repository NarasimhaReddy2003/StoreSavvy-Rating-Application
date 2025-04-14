import React from 'react';

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default InputField;
