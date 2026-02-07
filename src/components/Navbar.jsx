import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="nav-wrapper">
            <div className="notice-bar">
                <div className="container">
                    <p>{t('notice_bar')}</p>
                </div>
            </div>
            <nav className="navbar">
                <div className="container nav-container">
                    <Link to="/" className="logo">
                        <img src="/Logo.png" alt="Sewa Poultry Logo" className="logo-img" />
                        <span className="logo-sewa">Sewa</span>
                        <span className="logo-poultry"> Poultry</span>
                    </Link>

                    {/* Mobile Toggle */}
                    <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={`nav-menu-wrapper ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>{t('nav_home')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/partnership" onClick={() => setIsMenuOpen(false)}>{t('nav_partnership')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav_about')}</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="nav-cta" onClick={() => setIsMenuOpen(false)}>{t('nav_contact')}</NavLink>
                            </li>
                        </ul>
                        <button className="lang-toggle-btn" onClick={toggleLanguage}>
                            {language === 'en' ? '🇳🇵 Nepali' : '🇺🇸 English'}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
