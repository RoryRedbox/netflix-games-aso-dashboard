import React from 'react';

const SquidGameThemeToggle = ({ enabled, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-400">Squid Game Theme</span>
      <button 
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-netflix-red focus:ring-offset-2 ${enabled ? 'bg-pink-600' : 'bg-gray-700'}`}
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </button>
    </div>
  );
};

export default SquidGameThemeToggle;