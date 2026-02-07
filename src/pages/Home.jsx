import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="home-page">
            {/* Welcome Section */}
            <section className="welcome-hero">
                <div className="container">
                    <div className="welcome-box">
                        <div className="home-disclaimer">
                            {t('notice_bar')}
                        </div>
                        <h1>{t('home_hero_h1')}</h1>
                        <p className="lead">
                            {t('home_hero_p')}
                        </p>
                        <div className="cta-group">
                            <Link to="/partnership" className="btn-primary">{t('home_btn_partner')}</Link>
                            <Link to="/contact" className="btn-secondary">{t('home_btn_buy')}</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Model Clarity */}
            <section className="model-clarity bg-light">
                <div className="container text-center">
                    <h2>{t('home_clarity_h2')}</h2>
                    <p className="subtitle">{t('home_clarity_p')}</p>

                    <div className="grid two-col clarity-grid">
                        <div className="clarity-box">
                            <h3>{t('home_for_farmers_h3')}</h3>
                            <p>{t('home_for_farmers_p')}</p>
                        </div>
                        <div className="clarity-box">
                            <h3>{t('home_for_buyers_h3')}</h3>
                            <p>{t('home_for_buyers_p')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <div className="container">
                    <span className="section-tag text-center">{t('home_step_1_h3')}</span>
                    <h2 className="text-center">{t('home_hero_h1')}</h2>
                    <div className="process-grid grid">
                        <div className="process-step">
                            <div className="step-num">1</div>
                            <h3>{t('home_step_1_h3')}</h3>
                            <p>{t('home_step_1_p')}</p>
                        </div>
                        <div className="process-step">
                            <div className="step-num">2</div>
                            <h3>{t('home_step_2_h3')}</h3>
                            <p>{t('home_step_2_p')}</p>
                        </div>
                        <div className="process-step">
                            <div className="step-num">3</div>
                            <h3>{t('home_step_3_h3')}</h3>
                            <p>{t('home_step_3_p')}</p>
                        </div>
                        <div className="process-step">
                            <div className="step-num">4</div>
                            <h3>{t('home_step_4_h3')}</h3>
                            <p>{t('home_step_4_p')}</p>
                        </div>
                        <div className="process-step">
                            <div className="step-num">5</div>
                            <h3>{t('home_step_5_h3')}</h3>
                            <p>{t('home_step_5_p')}</p>
                        </div>
                        <div className="process-step">
                            <div className="step-num">6</div>
                            <h3>{t('home_step_6_h3')}</h3>
                            <p>{t('home_step_6_p')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="farmer-cta text-center">
                <div className="container grid two-col">
                    <div className="cta-split">
                        <h3>{t('home_cta_farmer_h3')}</h3>
                        <p>{t('home_cta_farmer_p')}</p>
                        <Link to="/contact" className="btn-primary">{t('landing_btn_inquire')}</Link>
                    </div>
                    <div className="cta-split">
                        <h3>{t('home_cta_buyer_h3')}</h3>
                        <p>{t('home_cta_buyer_p')}</p>
                        <Link to="/contact" className="btn-secondary">{t('landing_btn_sales')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
