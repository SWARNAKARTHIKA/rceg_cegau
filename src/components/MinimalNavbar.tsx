import React from 'react';
import { Home } from 'lucide-react';

const MinimalNavbar = () => {
  const handleHomeClick = () => {
    window.location.href = '/#home';
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-end">
        {/* Home Icon Button */}
        <button
          onClick={handleHomeClick}
          className="p-2 rounded-full text-amber-700 hover:bg-amber-100 transition-colors duration-300"
          aria-label="Go to Home"
        >
          <Home size={24} />
        </button>
      </div>
    </nav>
  );
};

export default MinimalNavbar;
