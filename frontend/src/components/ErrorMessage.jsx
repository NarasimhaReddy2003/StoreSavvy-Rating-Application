import React from 'react';

const ErrorMessage = ({ messages = [] }) => {
  if (!messages.length) return null;

  return (
    <ul className="error-message">
      {messages.map((msg, idx) => (
        <li key={idx}>{msg}</li>
      ))}
    </ul>
  );
};

export default ErrorMessage;
