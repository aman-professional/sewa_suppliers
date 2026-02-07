import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Landing.css';

const Landing = () => {
    const { t } = useLanguage();

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <span className="disclaimer-tag">{t('landing_disclaimer')}</span>
                    <h1>{t('landing_hero_h1')}</h1>
                    <p>{t('landing_hero_p')}</p>
                    <div className="hero-btns single-line-btns">
                        <Link to="/contact" className="btn-primary">{t('landing_btn_partner')}</Link>
                        <Link to="/contact" className="btn-secondary">{t('landing_btn_buy')}</Link>
                    </div>
                </div>
            </section>

            {/* Experience Section (New Highlight) */}
            <section className="experience-legacy-section">
                <div className="container">
                    <div className="legacy-badge-box">
                        <div className="legacy-icon">🎖️</div>
                        <div className="legacy-content">
                            <h2>{t('exp_badge_title')} {t('exp_badge_subtitle')}</h2>
                            <p>{t('exp_badge_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Statement Section */}
            <section className="business-statement">
                <div className="container">
                    <div className="statement-card">
                        <h2>{t('landing_statement_h2')}</h2>
                        <p>{t('landing_statement_p')}</p>
                        <div className="grid two-col statement-paths">
                            <div className="path">
                                <h3>{t('landing_path_farmer_h3')}</h3>
                                <p>{t('landing_path_farmer_p')}</p>
                                <Link to="/contact" className="btn-primary">{t('landing_btn_inquire')}</Link>
                            </div>
                            <div className="path">
                                <h3>{t('landing_path_buyer_h3')}</h3>
                                <p>{t('landing_path_buyer_p')}</p>
                                <Link to="/contact" className="btn-secondary">{t('landing_btn_sales')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Journey Story Section */}
            <section className="journey bg-light">
                <div className="container grid split-section">
                    <div className="journey-text">
                        <span className="section-tag">{t('Our History')}</span>
                        <h2>{t('landing_legacy_h2')}</h2>
                        <p>{t('landing_legacy_p1')}</p>
                        <p>{t('landing_legacy_p2')}</p>
                        <Link to="/about" className="text-link">Read our full story &rarr;</Link>
                    </div>
                    <div className="journey-visual">
                        <div className="trust-badge">
                            <span className="big-text">{t('landing_trust_badge_big')}</span>
                            <span className="small-text">{t('landing_trust_badge_small')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="contact-cta">
                <div className="container text-center">
                    <h2>{t('landing_cta_h2')}</h2>
                    <p>{t('landing_cta_p')}</p>
                    <div className="hero-btns">
                        <Link to="/contact" className="btn-primary">{t('landing_btn_partner')}</Link>
                        <Link to="/contact" className="btn-secondary">{t('landing_btn_buy')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
