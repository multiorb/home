import React from 'react';

interface GreetingProps {
  className?: string;
}

export function Greeting({ className = '' }: GreetingProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    if (hour < 21) return 'Good Evening';
    return 'Good Night';
  };

  return (
    <h1 className={`text-4xl font-bold ${className}`}>
      {getGreeting()}
    </h1>
  );
}
