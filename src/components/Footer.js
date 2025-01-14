import React from "react";
import { Link } from "gatsby";
import logo from "../img/footerLogo.jpeg"
const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-[60px] flex justify-around text-gray-300">
      <div className="px-[20px] ">
        <div className="bg-orange-600 w-24 h-24 rounded-lg inline-flex items-center justify-center my-8">
     
          <img src={logo} alt="Kaldi" className="w-[98px]" />
        </div>
      </div>
      <div className="text-center bg-slate-900 text-gray-300">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white transition duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition duration-300">
                    Products
                  </Link>
                </li>
              
                <li>
                  <Link to="/blogs" className="hover:text-white transition duration-300">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-white transition duration-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Product Range */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">Our Product Range</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/products/spices" className="hover:text-white transition duration-300">
                    Spices
                  </Link>
                </li>
                <li>
                  <Link to="/products/dry-fruits" className="hover:text-white transition duration-300">
                    Dry Fruits
                  </Link>
                </li>
                <li>
                  <Link to="/products/fruits-vegetables" className="hover:text-white transition duration-300">
                    Fruits & Vegetables
                  </Link>
                </li>
                <li>
                  <Link to="/products/oil" className="hover:text-white transition duration-300">
                    Oil
                  </Link>
                </li>
                <li>
                  <Link to="/products/coconut" className="hover:text-white transition duration-300">
                    Coconut and Products
                  </Link>
                </li>
                <li>
                  <Link to="/products/engineering" className="hover:text-white transition duration-300">
                    Engineering
                  </Link>
                </li>
              </ul>
            </div>

            {/* Stay Connected */}
            <div className="md:col-span-2">
              <h3 className="text-white text-xl font-semibold mb-4">Stay Connected</h3>
              <div className="space-y-2">
                <p className="mb-2">
                  <span className="block text-white">Address:</span>
                  <a 
                    href="https://maps.google.com/?q=Office No C8, Venus Garden, Thite Vasti, Kharadi, Pune City, Pune, Maharashtra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition duration-300"
                  >
                    Office No C8, Venus Garden,<br />
                    Thite Vasti, Kharadi,<br />
                    Pune City, Pune, Maharashtra<br />
                    Pin:411014
                  </a>
                </p>
                <p>
                  <span className="text-white">Mobile:</span>{' '}
                  <a 
                    href="tel:+917249310616" 
                    className="text-green-400 hover:text-green-300 transition duration-300"
                  >
                    +91 724 931 0616
                  </a>
                </p>
                <p>
                  <span className="text-white">Email:</span>{' '}
                  <a 
                    href="mailto:info@hindaviempire.com" 
                    className="hover:text-white transition duration-300"
                  >
                    info@hindaviempire.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;