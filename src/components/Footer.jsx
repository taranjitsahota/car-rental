import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {

  X,

  Mail,
  Phone,
  MapPin,
  MessageCircle, // or PhoneCall
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li className="mb-2"><Link to="/cars" className="text-gray-300 hover:text-white">Our Cars</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Contact Information</h3>
            {/* <p className="text-gray-300 mb-2">Anjuna</p> */}
            <p className="text-gray-300 mb-2">Phone: +91 75064 94862</p>
            <p className="text-gray-300">Email: info@carrental.com</p>
          </div>

          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Follow Us</h3>
               <div className="flex items-center space-x-4">
                      <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center  p-1 transition duration-300">
                        <FaFacebook />
                      </a>
                      <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center  p-1 transition duration-300">
                        <X />
                      </a>
                      <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center  p-1 transition duration-300">
                        <FaInstagram />
                      </a>
                      <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center  p-1 transition duration-300">
                        <FaYoutube />
                      </a>
                    </div>
          </div>

          {/* <div className="footer-section">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for exclusive deals and updates.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white rounded-l-md p-2 w-3/4 focus:outline-none" />
              <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-md p-2 w-1/2">Subscribe</button>
            </form>
          </div> */}
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-600 pt-8">
        <p className="text-gray-300">&copy; {new Date().getFullYear()} RS Goa Car Rental. All Rights Reserved.</p>
        <div className="mt-2">
          <Link to="/privacy" className="text-gray-300 hover:text-white mx-2">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-300 hover:text-white mx-2">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;