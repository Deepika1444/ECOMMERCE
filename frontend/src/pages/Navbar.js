import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import '../App.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>📧 info@company.com</span>
          <span>📞 010-020-0340</span>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="logo">
          <h1>E-Commerce</h1>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="nav-icons">
          <a href="/cart">🛒 <span className="cart-count">7</span></a>
          <a href="/profile">👤</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
