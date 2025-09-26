// components/layout/Header.tsx
"use client";  // <-- this ensures it's a client component

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiMenu, FiUser } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },   
  ];

  return (
    <header className="sticky top-0 z-50 bg-indigo-100 text-black bg-opacity-80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Links */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-600/90">MyLogo</h1>
            </Link>

            <nav className="hidden ml-12 md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "text-md font-medium " +
                    (pathname === item.href
                      ? "text-gray-900"
                      : "text-gray-700 hover:text-gray-900")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: Search Bar (md+) */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="flex items-center border border-gray-200 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
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

          {/* Right side icons / menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex items-center space-x-2 text-sm text-gray-700 hover:bg-indigo-200 rounded-full px-3 py-2">
              <MdLanguage size={20} />
              <span>EN</span>
              
            </button>

            <div className="hidden sm:flex items-center space-x-2 border border-gray-200 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <FiMenu size={20} />
              <FiUser size={20} />
            </div>

            <button
              className="sm:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-100  border-t border-gray-200">
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
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100">
                  {item.label}
                </span>
              </Link>
            ))}
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
