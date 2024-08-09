import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">Logo</div>
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li className="dropdown">
              <button className="dropdown-toggle" onClick={() => toggleDropdown(0)}>
                Services
              </button>
              <div className={`dropdown-menu ${openDropdown === 0 ? 'show' : ''}`}>
                <a href="#service1">Service 1</a>
                <a href="#service2">Service 2</a>
                <a href="#service3">Service 3</a>
              </div>
            </li>
            <li className="dropdown">
              <button className="dropdown-toggle" onClick={() => toggleDropdown(1)}>
                More
              </button>
              <div className={`dropdown-menu ${openDropdown === 1 ? 'show' : ''}`}>
                <a href="#info1">Info 1</a>
                <a href="#info2">Info 2</a>
                <a href="#info3">Info 3</a>
              </div>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMobileMenu}>

        <span class="material-symbols-outlined">
menu
</span>
        </button>
      </header>
    </div>
  );
};

export default Navbar;
