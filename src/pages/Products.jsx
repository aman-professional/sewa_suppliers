import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Products.css';

const Partnership = () => {
    const { t, language } = useLanguage();

    const services = [
        {
            id: 'chick-supply',
            title: language === 'en' ? '1-Day-Old Chick Supply' : '१ दिनको चल्ला आपूर्ति',
            description: language === 'en' ? 'We provide healthy, vaccinated 1-day-old chicks from high-yield breeds to ensure a strong start for your batch.' : 'हामी स्वस्थ र खोप लगाइएका १ दिनका चल्लाहरू उपलब्ध गराउँछौं।',
            benefits: language === 'en' ? ['High survival rate', 'Vaccinated breeds', 'Direct delivery'] : ['उच्च बाँच्ने दर', 'खोप लगाइएका प्रजातिहरू', 'प्रत्यक्ष डेलिभरी'],
            icon: '🐣'
        },
        {
            id: 'feed-support',
            title: language === 'en' ? 'Premium Feed (Dana) Support' : 'प्रिमियम दाना सहयोग',
            description: language === 'en' ? 'Quality feed is essential for growth. We supply scientifically formulated feed optimized for each growth stage.' : 'गुणस्तरीय दाना वृद्धिको लागि आवश्यक छ। हामी वैज्ञानिक रूपमा तयार पारिएको दाना आपूर्ति गर्छौं।',
            benefits: language === 'en' ? ['Optimal weight gain', 'Nutrient rich', 'Regular supply'] : ['इष्टतम वजन वृद्धि', 'पोषक तत्वले भरिपूर्ण', 'नियमित आपूर्ति'],
            icon: '🌾'
        },
        {
            id: 'tech-guidance',
            title: language === 'en' ? 'Technical Guidance' : 'प्राविधिक मार्गदर्शन',
            description: language === 'en' ? 'Our experienced team provides regular farm visits and technical advice to help you maintain high bird health.' : 'हाम्रो अनुभवी टोलीले नियमित फार्म भ्रमण र प्राविधिक सल्लाह प्रदान गर्दछ।',
            benefits: language === 'en' ? ['Expert farm visits', 'Crisis management', 'Growth monitoring'] : ['विशेषज्ञ फार्म भ्रमण', 'संकट व्यवस्थापन', 'वृद्धि अनुगमन'],
            icon: '👨‍🔧'
        },
        {
            id: 'buy-back',
            title: language === 'en' ? 'Guaranteed Buy-Back & Market' : 'ग्यारेन्टी फिर्ता खरिद र बजार',
            description: language === 'en' ? 'Stop worrying about the market. We buy back every grown bird at a pre-agreed profit sharing rate.' : 'बजारको चिन्ता नगर्नुहोस्। हामी प्रत्येक हुर्किएको कुखुरा पूर्व-सहमत नाफा बाँडफाँड दरमा किन्छौं।',
            benefits: language === 'en' ? ['Zero marketing stress', 'Export opportunities', 'Fair profit sharing'] : ['मार्केटिङको तनाव छैन', 'निर्यात अवसरहरू', 'निष्पक्ष नाफा बाँडफाँड'],
            icon: '📈'
        },
        {
            id: 'financial-trust',
            title: language === 'en' ? 'Transparent Accounting' : 'पारदर्शी लेखा प्रणाली',
            description: language === 'en' ? 'Every transaction is documented. Security deposits and profit shares are managed with total transparency.' : 'प्रत्येक कारोबारको अभिलेख राखिन्छ। सुरक्षा धरौटी र नाफा पारदर्शी रूपमा व्यवस्थापन गरिन्छ।',
            benefits: language === 'en' ? ['15-day settlement', 'Cheque payments', 'Recurring cycles'] : ['१५ दिने भुक्तानी', 'चेक मार्फत भुक्तानी', 'पुनरावृत्ति चक्र'],
            icon: '💳'
        }
    ];

    return (
        <div className="partnership-page">
            <section className="partnership-header">
                <div className="container text-center">
                    <h1>{language === 'en' ? 'Farmer Partnership Services' : 'किसान साझेदारी सेवाहरू'}</h1>
                    <p className="subtitle">{language === 'en' ? 'From supply to market, we are with you at every step. Join the most trusted poultry network in the region.' : 'आपूर्ति देखि बजार सम्म, हामी हरेक पाइलामा तपाईंसँग छौं।'}</p>
                </div>
            </section>

            <section className="services-grid-section bg-light">
                <div className="container">
                    <div className="grid services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <div className="service-info">
                                    <h2>{service.title}</h2>
                                    <p className="serv-desc">{service.description}</p>

                                    <div className="serv-meta">
                                        <h4>{language === 'en' ? 'What we offer:' : 'हामी के प्रदान गर्छौं:'}</h4>
                                        <ul>
                                            {service.benefits.map((benefit, index) => (
                                                <li key={index}>✓ {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="enrollment text-center">
                <div className="container">
                    <h2>{language === 'en' ? 'Enrollment & Security' : 'दर्ता र सुरक्षा'}</h2>
                    <p>{language === 'en' ? 'Joining the Sewa Partnership is simple. A security deposit is required to ensure the commitment of both parties. This deposit can be carried over to future cycles as you grow with us.' : 'सेवा साझेदारीमा आबद्ध हुन सरल छ। सुरक्षा धरौटी आवश्यक छ।'}</p>
                    <div className="info-box">
                        <p>📍 <strong>{language === 'en' ? 'Contact our office for current deposit rates and partnership terms.' : 'हालको धरौटी दर र सर्तहरूको लागि हाम्रो कार्यालयमा सम्पर्क गर्नुहोस्।'}</strong></p>
                    </div>
                    <button className="btn-primary">{language === 'en' ? 'Download Partnership Guide' : 'साझेदारी निर्देशिका डाउनलोड गर्नुहोस्'}</button>
                </div>
            </section>
        </div>
    );
};

export default Partnership;
