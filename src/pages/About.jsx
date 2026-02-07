import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { language } = useLanguage();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await axios.get('/api/team');
                setTeam(res.data);
            } catch (err) {
                console.error('Error fetching team:', err);
            }
        };
        fetchTeam();
    }, []);

    return (
        <div className="about-page">
            {/* About Hero */}
            <section className="about-hero">
                <div className="container text-center">
                    <h1>{language === 'en' ? 'Trust Built Through Transparency' : 'पारदर्शिता मार्फत निर्मित विश्वास'}</h1>
                    <p className="lead">{language === 'en' ? '10+ years of poultry industry journey—from individual struggles to building a network of successful partner farmers.' : 'कुखुरा उद्योगमा १०+ वर्षको यात्रा—व्यक्तिगत संघर्षदेखि सफल साझेदारी किसानहरूको नेटवर्कसम्म।'}</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="grid split-section">
                        <div className="story-text">
                            <span className="section-tag">{language === 'en' ? 'Our History' : 'हाम्रो इतिहास'}</span>
                            <h2>{language === 'en' ? 'Real Farm Experience, Not Just Business' : 'वास्तविक फार्म अनुभव, व्यवसाय मात्र होइन'}</h2>
                            <p>
                                {language === 'en'
                                    ? 'Our story began in 2014 when we started as a small, independent poultry farm. We faced every challenge a farmer faces—harsh weather, disease outbreaks, and unfair market prices.'
                                    : 'हाम्रो कथा २०१४ मा एक सानो कुखुरा फार्मबाट सुरु भएको थियो। हामीले किसानले भोग्ने हरेक चुनौतीहरूको सामना गर्यौं।'}
                            </p>
                            <p>
                                {language === 'en'
                                    ? 'Today, Sewa Poultry Supplies is more than just a chick supplier. We are a contract farming partner. We leverage our decade of experience to ensure that our partner farmers are rewarded for their hard work.'
                                    : 'आज, सेवा पोल्ट्री सप्लायर्स चल्ला आपूर्तिकर्ता मात्र होइन, हामी एक साझेदारी खेती साझेदार हौं।'}
                            </p>
                        </div>
                        <div className="story-visual">
                            <div className="experience-badge">
                                <span className="number">10+</span>
                                <span className="label">{language === 'en' ? 'Years of Industry Trust' : 'उद्योग विश्वासको वर्ष'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision bg-light">
                <div className="container grid two-col">
                    <div className="mv-card">
                        <h3>{language === 'en' ? 'Our Mission' : 'हाम्रो लक्ष्य'}</h3>
                        <p>{language === 'en' ? 'To create a sustainable and transparent poultry farming ecosystem through contract partnerships.' : 'साझेदारी मार्फत दिगो र पारदर्शी कुखुरापालन पारिस्थितिकी प्रणाली निर्माण गर्ने।'}</p>
                    </div>
                    <div className="mv-card">
                        <h3>{language === 'en' ? 'Our Vision' : 'हाम्रो दृष्टिकोण'}</h3>
                        <p>{language === 'en' ? 'To become the leading name in poultry contract farming, known for our 15-day payment promise.' : '१५ दिने भुक्तानीको वाचाका लागि परिचित कुखुरापालन साझेदारीमा अग्रणी बन्ने।'}</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 className="text-center mb-4">{language === 'en' ? 'Our Team' : 'हाम्रो टोली'}</h2>
                    <div className="team-grid">
                        {team.length > 0 ? (
                            team.map(member => (
                                <div key={member._id} className="team-member-card">
                                    <div className="member-image-wrapper">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">{language === 'en' ? 'Loading team members...' : 'टोली सदस्यहरू लोड हुँदैछ...'}</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="location-section bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">{language === 'en' ? 'Our Location' : 'हाम्रो स्थान'}</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.141525455437!2d83.9806!3d28.2163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595a5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sArchalbot%2C%20Pokhara%2033700!5e0!3m2!1sen!2snp!4v1655555555555!5m2!1sen!2snp"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sewa Poultry Location"
                        ></iframe>
                        <div className="location-info text-center mt-3">
                            <p><strong>{language === 'en' ? 'Address:' : 'ठेगाना:'}</strong> Archalbot, Pokhara 33700 (Plus Code: 6XPM+58G)</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
