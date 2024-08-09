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
                <div className="logo">
                    <span class="material-symbols-outlined">
                        trending_up
                    </span>
                    <a href='/' >LevelUp</a>
                </div>
                <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#home">About</a></li>
                        <li><a href="#about">Projects</a></li>
                        <li><a href="#contact">Courses</a></li>
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
