import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
  const baseClasses = 'w-full font-bold py-4 px-6 rounded-2xl text-lg transition-colors';
  const variantClasses = {
    primary: 'bg-yellow-400 hover:bg-yellow-500 text-gray-800',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
