// components/layout/Header.tsx

import React, { useState } from 'react';
import { FiSearch, FiMenu, FiUser } from 'react-icons/fi'; // or any icon set you prefer
import { MdLanguage } from 'react-icons/md';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Center: Search Bar (hidden on small screens) */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="flex items-center border border-gray-200 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="text"
                placeholder="Start your search"
                className="bg-transparent outline-none flex-grow text-sm text-gray-700 placeholder-gray-400"
              />
              <button className="ml-2 text-red-500">
                <FiSearch size={18} />
              </button>
            </div>
          </div>

          {/* Right: Icons / Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex items-center space-x-2 text-sm text-gray-700 hover:bg-gray-100 rounded-full px-3 py-2">
              <MdLanguage size={20} />
              <span>EN</span>
            </button>
            <div className="hidden sm:flex items-center space-x-2 border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <FiMenu size={20} />
              <FiUser size={20} />
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="sm:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar / Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3">
            <div className="flex items-center border border-gray-200 rounded-full py-2 px-4 shadow-sm">
              <input
                type="text"
                placeholder="Start your search"
                className="bg-transparent outline-none flex-grow text-sm text-gray-700 placeholder-gray-400"
              />
              <button className="ml-2 text-red-500">
                <FiSearch size={18} />
              </button>
            </div>
          </div>
          <div className="px-4 py-3 space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
              Language
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
              Profile
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
