import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
