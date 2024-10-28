// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Flipkart Clone</Link>
        <div className="flex space-x-4">
          <input 
            type="text" 
            placeholder="Search for products..."
            className="px-4 py-2 rounded-lg w-96"
          />
        </div>
        <div className="flex space-x-6">
          <Link to="/cart" className="text-white">Cart</Link>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;