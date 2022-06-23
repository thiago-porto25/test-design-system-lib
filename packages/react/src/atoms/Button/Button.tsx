import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className="dse-button-container" {...props}>
      {label}
    </button>
  );
};

export default Button;
// filler comment
