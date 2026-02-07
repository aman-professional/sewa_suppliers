import React, { useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { language, t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: 'Partnership Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', formData);
            alert(language === 'en' ? 'Thank you. Our Pokhara office will contact you soon.' : 'धन्यवाद। हाम्रो पोखरा कार्यालयले तपाईंलाई चाँडै सम्पर्क गर्नेछ।');
            setFormData({ name: '', phone: '', email: '', subject: 'Partnership Inquiry', message: '' });
        } catch (err) {
            const errorMsg = err.response?.data?.message || err.message;
            alert(language === 'en'
                ? `Error sending message: ${errorMsg}`
                : `सन्देश पठाउँदा त्रुटि भयो: ${errorMsg}`);
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-header">
                <div className="container text-center">
                    <h1>{language === 'en' ? 'Start Your Partnership' : 'साझेदारी सुरु गर्नुहोस्'}</h1>
                    <p className="lead">{language === 'en' ? 'Join our network of successful Broiler farmers in Pokhara today.' : 'आजै पोखराका सफल ब्रोइलर कुखुरापालक किसानहरूको नेटवर्कमा सामेल हुनुहोस्।'}</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container grid split-section">
                    <div className="contact-info">
                        <h2>{language === 'en' ? 'Contact Our Office' : 'कार्यालयमा सम्पर्क गर्नुहोस्'}</h2>
                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div>
                                    <h4>{language === 'en' ? 'Phone' : 'फोन'}</h4>
                                    <p>{t('contact_phone')}</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">📧</div>
                                <div>
                                    <h4>{language === 'en' ? 'Email' : 'इमेल'}</h4>
                                    <p>partnership@sewapoultry.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div>
                                    <h4>{language === 'en' ? 'Office Address' : 'कार्यालयको ठेगाना'}</h4>
                                    <p>{t('contact_address')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>{language === 'en' ? 'Full Name' : 'पूरा नाम'}</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{language === 'en' ? 'Phone Number' : 'फोन नम्बर'}</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{language === 'en' ? 'Email Address' : 'इमेल ठेगाना'}</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>{language === 'en' ? 'Inquiry Type' : 'सोधपुछको प्रकार'}</label>
                                <select name="subject" value={formData.subject} onChange={handleChange} className="form-select">
                                    <option value="Partnership Inquiry">{language === 'en' ? 'Become a Partner Farmer' : 'साझेदार किसान बन्नुहोस्'}</option>
                                    <option value="Bulk Purchase">{language === 'en' ? 'Bulk Broiler Purchase' : 'थोक ब्रोइलर खरिद'}</option>
                                    <option value="Other">{language === 'en' ? 'Other Inquiry' : 'अन्य सोधपुछ'}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>{language === 'en' ? 'Message / Farm Details' : 'सन्देश / फार्म विवरण'}</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required placeholder={language === 'en' ? 'Tell us about your farm location...' : 'तपाईंको फार्मको स्थान बारे बताउनुहोस्...'}></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-100">{language === 'en' ? 'Submit Application' : 'आवेदन पठाउनुहोस्'}</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
