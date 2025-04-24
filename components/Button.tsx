// components/Button.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: ButtonProps) {
  const baseStyles =
    'px-4 py-2 rounded-xl font-semibold transition duration-200';

  const variantStyles = {
    primary: 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg',
    secondary: 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
