import React from 'react';

const Button = ({ type = 'button', children, className = '', ...rest }) => {
  return (
    <button
      type={type}
      className={`btn-primary ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;