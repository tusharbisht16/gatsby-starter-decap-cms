import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent" role="navigation" aria-label="main-navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="py-1" title="Logo">
              <img src={logo} alt="Kaldi" className="w-[88px]" />
            </Link>
            <h1 className="text-[28px] font-bold">Riddhi Siddhi Trader</h1>
          </div>
          
          {/* Hamburger menu */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>
          
          {/* Navigation menu */}
        <div>
        <ul className={`lg:flex flex-grow justify-between items-center ${isOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-white shadow-lg' : 'hidden'}`}>
            <div className={`lg:flex items-center ${isOpen ? 'flex flex-col w-full' : ''}`}>
              <li>
                <Link to="/about" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Products
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/contact/examples" className="block px-4 py-2 text-gray-700 hover:text-gray-900">
                  Form Examples
                </Link>
              </li> */}
            </div>
            
            <li className="text-center">
              <a
                href="https://github.com/decaporg/gatsby-plugin-decap-cms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2"
              >
                {/* <span className="inline-block">
                  <img src={github} alt="Github" className="h-6 w-6" />
                </span> */}
              </a>
            </li>
          </ul>

        </div>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
