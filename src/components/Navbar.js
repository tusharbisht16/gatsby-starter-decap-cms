import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent relative" role="navigation" aria-label="main-navigation">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center py-2 sm:py-4">
          {/* Logo and Title Container */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/" className="py-1" title="Logo">
              <img src={logo} alt="Riddhi Siddhi Trader" className="w-[50px] sm:w-[88px]" />
            </Link>
            <h1 className="text-[18px] sm:text-[28px] font-bold">Riddhi Siddhi Trader</h1>
          </div>
          
          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
          
          {/* Navigation Menu */}
          <div className={`
            fixed inset-0 bg-white z-40 
            lg:static lg:bg-transparent lg:z-0
            ${isOpen ? 'block' : 'hidden'} 
            lg:block
          `}>
            <ul className="
              flex flex-col lg:flex-row 
              items-center justify-center lg:justify-end 
              h-full lg:h-auto 
              space-y-4 lg:space-y-0 lg:space-x-2
              pt-16 lg:pt-0
            ">
              <li><Link to="/about" className="nav-link text-sm sm:text-base">About</Link></li>
              <li><Link to="/products" className="nav-link text-sm sm:text-base">Products</Link></li>
              <li><Link to="/contact" className="nav-link text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;