
import React from 'react';

interface CounterDisplayProps {
  count: number;
}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  return (
    <div className="
      w-48 h-24 md:w-64 md:h-32 
      bg-slate-800
      border border-slate-700
      rounded-lg
      flex items-center justify-center
      relative
    ">
      <span className="text-5xl md:text-6xl font-bold text-white">
        {count}
      </span>
    </div>
  );
};
