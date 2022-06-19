import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className="dse-button-container">{label}</button>;
};

export default Button;
