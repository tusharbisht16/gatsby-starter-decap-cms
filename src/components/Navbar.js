import React, { useState } from "react";
import { Link } from "gatsby";
import { X } from "lucide-react";
import logo from "../img/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent relative" role="navigation" aria-label="main-navigation">
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

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
          
          {/* Side Drawer Navigation Menu */}
          <div className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-lg
            transform transition-transform duration-300 ease-in-out z-50
            lg:relative lg:transform-none lg:transition-none lg:w-auto lg:shadow-none lg:bg-transparent
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
            lg:translate-x-0
          `}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <ul className="
              flex flex-col lg:flex-row 
              items-start lg:items-center
              justify-start lg:justify-end 
              h-full lg:h-auto 
              space-y-4 lg:space-y-0 lg:space-x-6
              pt-16 lg:pt-0
              px-6 lg:px-0
            ">
              <li className="w-full lg:w-auto">
                <Link to="/" className="nav-link text-sm sm:text-base block py-2 hover:bg-gray-100 lg:hover:bg-transparent">Home</Link>
              </li>
              <li className="w-full lg:w-auto">
                <Link to="/about" className="nav-link text-sm sm:text-base block py-2 hover:bg-gray-100 lg:hover:bg-transparent">About</Link>
              </li>
           

              <li className="w-full lg:w-auto">
                <Link to="/products" className="nav-link text-sm sm:text-base block py-2 hover:bg-gray-100 lg:hover:bg-transparent">Products</Link>
              </li>
              <li className="w-full lg:w-auto">
                <Link to="/policies" className="nav-link text-sm sm:text-base block py-2 hover:bg-gray-100 lg:hover:bg-transparent">Privacy Policy</Link>
              </li>
              <li className="w-full lg:w-auto">
                <Link to="/contact" className="nav-link text-sm sm:text-base block py-2 hover:bg-gray-100 lg:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;