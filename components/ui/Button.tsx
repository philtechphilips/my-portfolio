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
  const baseStyles = 'rounded-lg font-medium transition-all duration-300 ease-in-out';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:scale-105 disabled:bg-neutral disabled:cursor-not-allowed',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-background-dark',
    ghost: 'text-primary hover:bg-primary hover:bg-opacity-10 dark:text-primary-light',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
