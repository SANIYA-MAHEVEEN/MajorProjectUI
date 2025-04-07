import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-200 transition">
          🐟 FishNet
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex text-lg font-medium">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          <Link to="/login" className="hover:text-blue-200">Login</Link>
          <Link to="/profile" className="hover:text-blue-200">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
