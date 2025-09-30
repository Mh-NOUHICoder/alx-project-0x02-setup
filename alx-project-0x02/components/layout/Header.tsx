import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; 

const Header: React.FC = () => {
  // useRouter hook to get the current path
  const router = useRouter(); 

  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/posts", label: "Posts" },
    { href: "/users", label: "Users" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            MyApp
          </Link>
          
          <nav className="flex space-x-8">
            {navItems.map((item) => {
              // Check if the link is active
              // For the home page, we need an exact match. For others, check if the current path starts with the link.
              const isActive = item.href === '/' ? router.pathname === item.href : router.pathname.startsWith(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "px-3 py-2 rounded-md text-base font-medium transition-colors " +
                    (isActive
                      ? "bg-blue-100 text-blue-700 font-extrabold"
                      : "text-gray-600 hover:text-blue-600")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;