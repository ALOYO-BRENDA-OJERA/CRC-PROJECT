import React from 'react';
import '../styles/footer.css'; // Optional: Add styling here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Rhema Christos Church. All rights reserved.</p>
        <p>Designed with love and faith.</p>
      </div>
    </footer>
  );
};

export default Footer;
