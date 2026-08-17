import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const variantStyles = {
    primary: 'btn-solid disabled:bg-fg-subtle disabled:cursor-not-allowed',
    secondary: 'btn-outline',
    ghost: 'border-transparent text-fg hover:bg-accent hover:text-accent-fg',
  };

  const sizeStyles = {
    sm: 'px-4 py-2.5 text-meta',
    md: 'px-5 py-3.5 text-meta-lg',
    lg: 'px-7 py-4 text-meta-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
