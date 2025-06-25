'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type FancyButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export default function FancyButton({
  onClick,
  children,
  className = '',
  disabled = false,
}: FancyButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden inline-flex items-center border border-gray-300 rounded-full pl-5 pr-2 py-2 transition-all duration-300 ease-in-out ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {/* Animated Blue Hover Background (rounded-full applied) */}
      <span className="absolute inset-y-0 right-0 w-0 group-hover:w-[95%] bg-blue-500 transition-all duration-300 ease-in-out rounded-full z-0"></span>

      {/* Text (appears above background) */}
      <span className="relative z-10 font-medium transition-all group-hover:text-white whitespace-nowrap">
        {children}
      </span>

      {/* Blue Circle with Arrow Icon */}
      <span className="relative z-10 ml-3 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white transition-all shrink-0">
        <FaArrowRight size={12} />
      </span>
    </button>
  );
}
