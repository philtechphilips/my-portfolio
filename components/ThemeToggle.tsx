"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-300 hover:bg-neutral-light hover:bg-opacity-20"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <i className="ri-moon-line text-xl text-text-primary"></i>
      ) : (
        <i className="ri-sun-line text-xl text-background-light"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
