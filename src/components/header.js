import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Optional: Add styling here

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSermonsDropdownOpen, setIsSermonsDropdownOpen] = useState(false);
  const [isMinistryDropdownOpen, setIsMinistryDropdownOpen] = useState(false);

  const dropdownRef = useRef(null); // Ref for the About dropdown
  const sermonsDropdownRef = useRef(null); // Ref for the Sermons dropdown
  const ministryDropdownRef = useRef(null); // Ref for the Ministry dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSermonsDropdown = () => {
    setIsSermonsDropdownOpen(!isSermonsDropdownOpen);
  };

  const toggleMinistryDropdown = () => {
    setIsMinistryDropdownOpen(!isMinistryDropdownOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        sermonsDropdownRef.current &&
        !sermonsDropdownRef.current.contains(event.target)
      ) {
        setIsSermonsDropdownOpen(false);
      }
      if (
        ministryDropdownRef.current &&
        !ministryDropdownRef.current.contains(event.target)
      ) {
        setIsMinistryDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/crc_logo.png" alt="Rhema Christos Church Logo" />
        <h1>CHRISTOS RHEMA CHURCH</h1> {/* Logo text */}
      </div>
      {/* Hamburger Menu Icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>
      {/* Navigation Links */}
      <nav>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
  <li className="home-link"><Link to="/">Home</Link></li>
  <li className="dropdown" ref={dropdownRef}>
    <span className="dropdown-toggle" onClick={toggleDropdown}>
      About
    </span>
    <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
      <li><Link to="/about-pastor">Pastor</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
    </ul>
  </li>
  <li className="dropdown" ref={sermonsDropdownRef}>
    <span className="dropdown-toggle" onClick={toggleSermonsDropdown}>
      Sermons
    </span>
    <ul className={`dropdown-menu ${isSermonsDropdownOpen ? 'show' : ''}`}>
      <li><Link to="/audio">Audio Sermons</Link></li>
      <li><Link to="/video">Video Sermons</Link></li>
    </ul>
  </li>
  <li className="dropdown" ref={ministryDropdownRef}>
    <span className="dropdown-toggle" onClick={toggleMinistryDropdown}>
      Ministry
    </span>
    <ul className={`dropdown-menu ${isMinistryDropdownOpen ? 'show' : ''}`}>
      <li><Link to="/women-children">Women & Children</Link></li>
      <li><Link to="/rhema-college">Rhema College</Link></li>
      <li><Link to="/inreach-outreach">Inreach & Outreach</Link></li>
      <li><Link to="/media-communication">Media & Communication</Link></li>
      <li><Link to="/help-directorate">Help Directorate</Link></li>
      <li><Link to="/gends-marrieds">Gends & Marrieds</Link></li>
      <li><Link to="/the-cornet">The Cornet</Link></li>
    </ul>
  </li>
  <li className="give-link"><Link to="/give">Give</Link></li>
</ul>

      </nav>
    </header>
  );
};

export default Header;
