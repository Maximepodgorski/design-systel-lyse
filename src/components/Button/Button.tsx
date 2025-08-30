import React from 'react';
import './Button.scss';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'neutral';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  state?: 'default' | 'hover' | 'pressed' | 'disabled';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  state = 'default',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const getStateClass = () => {
    if (disabled) return 'disabled';
    return state;
  };

  const buttonClasses = [
    'lyse-button',
    `lyse-button--${variant}`,
    `lyse-button--${size}`,
    `lyse-button--${getStateClass()}`,
    fullWidth ? 'lyse-button--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <span className={`lyse-button__icon lyse-button__icon--${iconPosition}`}>
        {icon}
      </span>
    );
  };

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      type={type}
    >
      {icon && iconPosition === 'left' && renderIcon()}
      <span className="lyse-button__content">
        {children}
      </span>
      {icon && iconPosition === 'right' && renderIcon()}
    </button>
  );
};

export default Button;
