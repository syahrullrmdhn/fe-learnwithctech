import React from 'react';

const Button = ({ text, color }) => {
  const buttonClass = `px-6 py-3 text-white rounded-md ${
    color === 'blue' ? 'bg-blue-500' : 'bg-gray-800'
  }`;

  return <button className={buttonClass}>{text}</button>;
};

export default Button;
