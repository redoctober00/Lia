import React from 'react';
import type { BentoCardProps } from '../types';

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', gradient = '' }) => {
  return (
    <div
      className={`rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm ${gradient} ${className}`}
    >
      {children}
    </div>
  );
};

export default BentoCard;
