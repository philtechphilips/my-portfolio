"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="badge"
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <i className={theme === 'light' ? 'ri-moon-line' : 'ri-sun-line'} />
    </button>
  );
};

export default ThemeToggle;
