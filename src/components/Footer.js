import React from "react";
import { Link } from "gatsby";
import logo from "../img/footerLogo.jpeg";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  // Placeholder for social links - you can replace these with actual URLs
  const socialLinks = {
    facebook: "https://facebook.com/your-page",
    instagram: "https://www.instagram.com/_riddhi_siddhi_trader",
    twitter: "https://twitter.com/your-handle",
    youtube: "https://youtube.com/@riddhisiddhitrader-h4w?si=YP58jZ6ggs2gedPW"
  };

  return (
    <footer className="bg-slate-900 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-center">
            <div className="bg-orange-600 w-[300px] h-auto rounded-lg inline-flex items-center justify-center">
              <img src={logo} alt="Kaldi" className="w-[300px]" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/products", label: "Products" },
                { to: "/blogs", label: "Blogs" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy-policy", label: "Privacy Policy" }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="hover:text-white transition duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Section */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <h3 className="text-white text-xl font-semibold mb-4">Stay Connected</h3>
              <div className="space-y-2">
                <p>
                  <span className="block text-white">Address:</span>
                  <a 
                    href="https://maps.google.com/?q=Office No C8, Venus Garden, Thite Vasti, Kharadi, Pune City, Pune, Maharashtra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition duration-300"
                  >
                    Office No 4, Building No 1,<br />
                 Makane Gaon Bodanpada road Navkar complex<br />
                    City Saphale, District Palghar, Maharashtra <br />
                    pin: 401102
                  </a>
                </p>
                <p>
                  <span className="text-white">Mobile:</span>{' '}
                  <a 
                    href="tel:+919225385403" 
                    className="text-green-400 hover:text-green-300 transition duration-300"
                  >
                    +91 922 538 5403
                  </a>
                </p>
                <p>
                  <span className="text-white">Email:</span>{' '}
                  <a 
                    href="mailto:info@riddhisiddhitrader.com" 
                    className="hover:text-white transition duration-300"
                  >
                    info@riddhisiddhitrader.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {[
                { Icon: Facebook, link: socialLinks.facebook },
                { Icon: Instagram, link: socialLinks.instagram },
                { Icon: Twitter, link: socialLinks.twitter },
                { Icon: Youtube, link: socialLinks.youtube }
              ].map(({ Icon, link }) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;