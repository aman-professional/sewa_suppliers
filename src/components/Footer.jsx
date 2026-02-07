import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="logo">
                        <img src="/Logo.png" alt="Sewa Poultry Logo" className="logo-img-footer" />
                        <span className="logo-sewa">Sewa</span>
                        <span className="logo-poultry"> Poultry</span>
                    </Link>
                    <p className="footer-desc">
                        {t('footer_desc')}
                    </p>
                </div>

                <div className="footer-links">
                    <h3>{t('footer_quick_links')}</h3>
                    <ul>
                        <li><Link to="/">{t('nav_home')}</Link></li>
                        <li><Link to="/partnership">{t('nav_partnership')}</Link></li>
                        <li><Link to="/about">{t('nav_about')}</Link></li>
                        <li><Link to="/contact">{t('nav_contact')}</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>{t('footer_contact_us')}</h3>
                    <p>{t('footer_email')}: partnership@sewapoultry.com</p>
                    <p>{t('footer_phone')}: {t('contact_phone')}</p>
                    <p>{t('footer_location')}: {t('contact_address')}</p>
                </div>

                <div className="footer-social">
                    <h3>{t('footer_connect')}</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://wa.me/9779856039637" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sewa Poultry Supplies. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
