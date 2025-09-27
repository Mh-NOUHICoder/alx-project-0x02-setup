import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  size = 'medium', 
  shape = 'rounded-md',
  color = 'primary'
}) => {
  // Size classes based on your interface
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg'
  };

  // Shape classes based on your interface
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-lg': 'rounded-lg',
    'rounded-full': 'rounded-full'
  };

  // Color classes with hover states
  const colorClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    gray: 'bg-gray-500 hover:bg-gray-600 text-white'
  };

  return (    
    <button 
      className={`
        bg-blue-500 hover:bg-blue-600 
        text-white ml-6 items-center font-bold 
        transition-colors duration-200
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        ${colorClasses[color]}
      `} 
      onClick={onClick}
    >
      {text}
    </button>
  );  
}

export default Button;