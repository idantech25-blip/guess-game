import { ReactNode } from 'react';

interface GameCardProps {
  children: ReactNode;
  className?: string;
}

export const GameCard = ({ children, className = '' }: GameCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className={`bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm text-center ${className}`}>
        {children}
      </div>
    </div>
  );
};
