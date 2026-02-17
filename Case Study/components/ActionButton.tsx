
import React from 'react';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  colorClass: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, colorClass }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-24 h-24 md:w-32 md:h-32 
        flex items-center justify-center 
        text-4xl md:text-5xl font-medium 
        rounded-lg border border-slate-700
        transition-colors duration-150 
        ${colorClass}
        focus:outline-none focus:ring-2 focus:ring-slate-500
      `}
    >
      <span>{label}</span>
    </button>
  );
};
