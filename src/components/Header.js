import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import the CSS file for header styles

function Header() {
  return (
    <header className="header">
      <div className="logo">Your Logo Here</div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/donate">Donate</Link>
      </nav>
      <div className="search">Search</div>
    </header>
  );
}

export default Header;
