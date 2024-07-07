// app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function Button({ children, href, className = '' }: ButtonProps) {
  const baseClasses = 'h-8 px-4 text-xs w-full inline-flex items-center justify-between space-x-2 shadow-sm rounded border border-border hover:border-accent hover:bg-accent';
  
  const buttonContent = (
    <span className="flex items-center space-x-2 text-primary">{children}</span>
  );

  if (href) {
    return (
      <a href={href}>
        <button className={`${baseClasses} ${className}`}>
          {buttonContent}
        </button>
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`}>
      {buttonContent}
    </button>
  );
}
