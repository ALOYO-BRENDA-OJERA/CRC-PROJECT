import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Optional: Add styling here

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/crc_logo.png" alt="Rhema Christos Church Logo" />
        <h1>CHRISTOS RHEMA CHURCH</h1>  {/* Logo text */}
      </div>
      {/* Hamburger Menu Icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>
      {/* Navigation Links */}
      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/sermons">Sermons</Link></li>
          <li><Link to="/ministry">Ministry</Link></li>
          <li><Link to="/give">Give</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
