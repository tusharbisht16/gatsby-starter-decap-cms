import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="text-center">
        <img
          src={logo}
          alt="Kaldi"
          className="w-56 h-40 inline-block" 
        />
      </div>
      <div className="text-center bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen">
            <div>
              <section>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="hover:text-gray-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="/contact/examples">
                      Form Examples
                    </Link>
                  </li>
                  <li>
                    <a
                      className="hover:text-gray-300"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div>
              <section>
                <ul className="space-y-2">
                  <li>
                    <Link className="hover:text-gray-300" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-gray-300" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="flex justify-center space-x-4">
              <a 
                title="facebook" 
                href="https://facebook.com"
                className="hover:opacity-75"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </a>
              <a 
                title="twitter" 
                href="https://twitter.com"
                className="hover:opacity-75"
              >
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-4 h-4"
                />
              </a>
              <a 
                title="instagram" 
                href="https://instagram.com"
                className="hover:opacity-75"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </a>
              <a 
                title="vimeo" 
                href="https://vimeo.com"
                className="hover:opacity-75"
              >
                <img
                  src={vimeo}
                  alt="Vimeo"
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;