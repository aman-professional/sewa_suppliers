import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        // Navbar & Global
        nav_home: "Home",
        nav_partnership: "Partnership",
        nav_about: "About",
        nav_contact: "Become a Partner",
        notice_bar: "Note: We do not sell poultry equipment. We specialize in 45-day Broiler chickens partnership & supply.",
        footer_desc: "10+ years of industry experience in Pokhara. A trusted poultry partnership model built on transparency and timely broiler bird collection.",
        footer_quick_links: "Quick Links",
        footer_contact_us: "Contact Us",
        footer_email: "Email",
        footer_phone: "Phone",
        footer_location: "Location",
        footer_connect: "Connect",
        contact_phone: "9856039637 / 9805845986",
        contact_address: "Archalbot (Near Uttam Petrol Pump), Pokhara (Bindabashini Mandir area)",

        // Landing Page
        landing_disclaimer: "We are NOT sellers of poultry equipment. We deal ONLY in Broiler Chickens.",
        landing_hero_h1: "10+ Years Poultry Industry Experience — Trusted Broiler Partnership Model",
        landing_hero_p: "Sewa Poultry Supplies works as a poultry chicks supplier and farmer partnership company in Pokhara. We supply 1-day-old Broiler chicks and collect them after 45 days.",
        landing_btn_partner: "Become a Partner Farmer",
        landing_btn_buy: "Buy Broiler Chickens (Bulk)",
        landing_statement_h2: "The 45-Day Broiler Model",
        landing_statement_p: "We deal exclusively in Broiler chickens. We provide 1-day-old chicks and feed to farmers in the Pokhara region. Birds are collected after 45 days, and profits are settled within 15 days via cheque.",
        landing_path_farmer_h3: "Become a Farmer Partner",
        landing_path_farmer_p: "Join our Broiler farming partnership program in Pokhara and grow with us.",
        landing_path_buyer_h3: "Buy Broiler Chickens",
        landing_path_buyer_p: "Contact us for bulk Broiler chicken purchase for butcher shops or wholesale in Pokhara area.",
        landing_btn_inquire: "Inquire for Partnership",
        landing_btn_sales: "Contact Sales",
        landing_legacy_h2: "A Legacy of Trust in Pokhara",
        landing_legacy_p1: "Located near Bindabashini Mandir, Archalbot, we've served the Pokhara poultry community for over a decade. Our focus on 45-day Broiler birds ensures market consistency.",
        landing_legacy_p2: "Every 45-day batch collection is backed by our 15-day payment promise. Trust is our foundation.",
        landing_trust_badge_big: "15 Days",
        landing_trust_badge_small: "Payment Guarantee",
        landing_cta_h2: "Start Your Broiler Journey",
        landing_cta_p: "Whether you want to grow birds or buy them in bulk, Sewa Poultry is your trusted partner in Pokhara.",

        // Home Page
        home_hero_h1: "The Trusted Broiler Partnership Network",
        home_hero_p: "Specializing in 45-day Broiler chickens. We supply chicks to farmers and sell grown birds to butcher shops across Pokhara.",
        home_btn_partner: "Become a Partner Farmer",
        home_btn_buy: "Buy Broiler in Bulk",
        home_clarity_h2: "Specialized Broiler Model",
        home_clarity_p: "We do not sell any poultry equipment. We deal ONLY in 45-day Broiler chickens for farmers and buyers.",
        home_for_farmers_h3: "For Farmers",
        home_for_farmers_p: "We provide 1-day-old Broiler chicks and feed. We collect them after 45 days. Guaranteed profit sharing via cheque within 15 days.",
        home_for_buyers_h3: "For Buyers",
        home_for_buyers_p: "Bulk Broiler chicken purchase available for butcher shops and wholesale. Fresh and reliable supply from Pokhara farms.",
        home_step_1_h3: "Register at Archalbot",
        home_step_1_p: "Visit our office near Uttam Petrol Pump to register with a security deposit.",
        home_step_2_h3: "Chick Supply",
        home_step_2_p: "We supply high-quality 1-day-old Broiler chicks and formulated feed.",
        home_step_3_h3: "45-Day Growing",
        home_step_3_p: "Grow the Broiler birds for 45 days with our technical support and guidelines.",
        home_step_4_h3: "Bird Collection",
        home_step_4_p: "We collect the ready Broiler chickens after the 45-day growth cycle.",
        home_step_5_h3: "Pokhara Market",
        home_step_5_p: "Birds are sold to our established network of butcher shops and hotels in Pokhara.",
        home_step_6_h3: "Profit Payment",
        home_step_6_p: "Your profit share is paid via cheque within 15 days of bird collection.",
        home_cta_farmer_h3: "Join the Partnership",
        home_cta_farmer_p: "Become a partner farmer and start growing Broilers with a 10-year industry expert.",
        home_cta_buyer_h3: "Purchase Bulk Broilers",
        home_cta_buyer_p: "Reliable 45-day Broiler supply for your business in Pokhara.",

        // Experience Badge
        exp_badge_title: "10+ Years",
        exp_badge_subtitle: "Of Broiler Excellence",
        exp_badge_desc: "Serving farmers in Archalbot and the wider Pokhara region."
    },
    np: {
        // Navbar & Global
        nav_home: "गृहपृष्ठ",
        nav_partnership: "साझेदारी",
        nav_about: "हाम्रो बारेमा",
        nav_contact: "साझेदार बन्नुहोस्",
        notice_bar: "नोट: हामी कुखुरापालनका उपकरणहरू बिक्री गर्दैनौं। हामी केवल ४५ दिने ब्रोइलर कुखुराको साझेदारी र आपूर्तिमा विशेषज्ञ छौं।",
        footer_desc: "पोखरामा १०+ वर्षको उद्योग अनुभव। पारदर्शिता र समयमै ब्रोइलर कुखुरा संकलनमा आधारित एक विश्वसनीय साझेदारी मोडेल।",
        footer_quick_links: "द्रुत लिङ्कहरू",
        footer_contact_us: "हामीलाई सम्पर्क गर्नुहोस्",
        footer_email: "इमेल",
        footer_phone: "फोन",
        footer_location: "स्थान",
        footer_connect: "जोडिनुहोस्",
        contact_phone: "९८५६०३९६३७ / ९८०५८४५९८६",
        contact_address: "अर्चलबोट (उत्तम पेट्रोल पम्प नजिकै), पोखरा (विन्ध्यवासिनी मन्दिर क्षेत्र)",

        // Landing Page
        landing_disclaimer: "हामी कुखुरापालन उपकरणका विक्रेता होइनौं। हामी केवल ब्रोइलर कुखुराको कारोबार गर्छौं।",
        landing_hero_h1: "१०+ वर्षको कुखुरा उद्योग अनुभव — विश्वसनीय ब्रोइलर साझेदारी मोडेल",
        landing_hero_p: "सेवा पोल्ट्री सप्लायर्सले पोखरामा चल्ला आपूर्तिकर्ता र किसान साझेदारी कम्पनीको रूपमा काम गर्दछ। हामी १ दिनको ब्रोइलर चल्ला उपलब्ध गराउँछौं र ४५ दिन पछि संकलन गर्छौं।",
        landing_btn_partner: "साझेदार किसान बन्नुहोस्",
        landing_btn_buy: "ब्रोइलर कुखुरा किन्नुहोस् (थोक)",
        landing_statement_h2: "४५ दिने ब्रोइलर मोडेल",
        landing_statement_p: "हामी विशेष रूपमा ब्रोइलर कुखुराको कारोबार गर्छौं। हामी पोखरा क्षेत्रका किसानहरूलाई १ दिनको चल्ला र दाना उपलब्ध गराउँछौं। चराहरू ४५ दिन पछि संकलन गरिन्छ र नाफा १५ दिन भित्र चेक मार्फत भुक्तानी गरिन्छ।",
        landing_path_farmer_h3: "साझेदार किसान बन्नुहोस्",
        landing_path_farmer_p: "पोखरामा हाम्रो ब्रोइलर कुखुरापालन साझेदारी कार्यक्रममा सामेल हुनुहोस् र हामीसँगै बढ्नुहोस्।",
        landing_path_buyer_h3: "ब्रोइलर कुखुरा किन्नुहोस्",
        landing_path_buyer_p: "पोखरा क्षेत्रमा कसाई पसल वा थोक बिक्रीको लागि ठू量 ब्रोइलर कुखुरा किन्न हामीलाई सम्पर्क गर्नुहोस्।",
        landing_btn_inquire: "साझेदारीको लागि सोधपुछ गर्नुहोस्",
        landing_btn_sales: "बिक्री टोलीलाई सम्पर्क गर्नुहोस्",
        landing_legacy_h2: "पोखरामा विश्वासको विरासत",
        landing_legacy_p1: "विन्ध्यवासिनी मन्दिर नजिकै अर्चलबोटमा अवस्थित हामीले एक दशकभन्दा बढी समयदेखि पोखराको पोल्ट्री समुदायलाई सेवा दिइरहेका छौं।",
        landing_legacy_p2: "प्रत्येक ४५ दिने लटको संकलनलाई हाम्रो १५ दिने भुक्तानीको वाचाले समर्थन गर्दछ। विश्वास नै हाम्रो आधार हो।",
        landing_trust_badge_big: "१५ दिन",
        landing_trust_badge_small: "भुक्तानी ग्यारेन्टी",
        landing_cta_h2: "आफ्नो ब्रोइलर यात्रा सुरु गर्नुहोस्",
        landing_cta_p: "तपाईं चरा हुर्काउन चाहनुहुन्छ वा तिनीहरूलाई थोकमा किन्न चाहनुहुन्छ, सेवा पोल्ट्री पोखरामा तपाईंको विश्वसनीय साझेदार हो।",

        // Home Page
        home_hero_h1: "विश्वसनीय ब्रोइलर साझेदारी नेटवर्क",
        home_hero_p: "४५ दिने ब्रोइलर कुखुरामा विशेषज्ञता। हामी किसानहरूलाई चल्ला आपूर्ति गर्छौं र पोखराभरिका कसाई पसलहरूमा हुर्किएका कुखुराहरू बिक्री गर्छौं।",
        home_btn_partner: "साझेदार किसान बन्नुहोस्",
        home_btn_buy: "थोकमा ब्रोइलर किन्नुहोस्",
        home_clarity_h2: "विशेष ब्रोइलर मोडेल",
        home_clarity_p: "हामी कुखुरापालनका कुनै पनि उपकरणहरू बिक्री गर्दैनौं। हामी केवल ४५ दिने ब्रोइलर कुखुराको कारोबार गर्छौं।",
        home_for_farmers_h3: "किसानहरूको लागि",
        home_for_farmers_p: "हामी १ दिनको ब्रोइलर चल्ला र दाना उपलब्ध गराउँछौं। ४५ दिन पछि संकलन गर्छौं। १५ दिन भित्र चेक मार्फत नाफा भुक्तानीको ग्यारेन्टी।",
        home_for_buyers_h3: "खरिदकर्ताहरूको लागि",
        home_for_buyers_p: "कसाई पसल र थोक वितरणको लागि थोक ब्रोइलर खरिद उपलब्ध छ। पोखराका फार्महरूबाट ताजा र विश्वसनीय आपूर्ति।",
        home_step_1_h3: "अर्चलबोटमा दर्ता",
        home_step_1_p: "उत्तम पेट्रोल पम्प नजिकै रहेको हाम्रो कार्यालयमा सुरक्षा धरौटी सहित दर्ता गर्नुहोस्।",
        home_step_2_h3: "चल्ला आपूर्ति",
        home_step_2_p: "हामी उच्च गुणस्तरका १ दिनका ब्रोइलर चल्ला र दाना उपलब्ध गराउँछौं।",
        home_step_3_h3: "४५ दिनको हुर्काइ",
        home_step_3_p: "हाम्रो प्राविधिक सहयोग र मार्गनिर्देशनमा ४५ दिनसम्म ब्रोइलर कुखुरा हुर्काउनुहोस्।",
        home_step_4_h3: "कुखुरा संकलन",
        home_step_4_p: "४५ दिनको उत्पादन चक्र पूरा भएपछि हामी तयार ब्रोइलर कुखुरा संकलन गर्छौं।",
        home_step_5_h3: "पोखरा बजार",
        home_step_5_p: "पोखराका कसाई पसल र होटलहरूको हाम्रो स्थापित नेटवर्कमा कुखुरा बिक्री गरिन्छ।",
        home_step_6_h3: "नाफा भुक्तानी",
        home_step_6_p: "कुखुरा संकलन भएको १५ दिन भित्र चेक मार्फत तपाईंको नाफाको हिस्सा भुक्तानी गरिन्छ।",
        home_cta_farmer_h3: "साझेदारीमा सामेल हुनुहोस्",
        home_cta_farmer_p: "साझेदार किसान बन्नुहोस् र १० वर्षको उद्योग विशेषज्ञसँग ब्रोइलर उत्पादन सुरु गर्नुहोस्।",
        home_cta_buyer_h3: "थोक ब्रोइलर खरिद गर्नुहोस्",
        home_cta_buyer_p: "पोखरामा तपाईंको व्यवसायको लागि विश्वसनीय ४५ दिने ब्रोइलर आपूर्ति।",

        // Experience Badge
        exp_badge_title: "१०+ वर्ष",
        exp_badge_subtitle: "ब्रोइलर उत्कृष्टताको",
        exp_badge_desc: "अर्चलबोट र बृहत् पोखरा क्षेत्रका किसानहरूलाई सेवा प्रदान गर्दै।"
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'np' : 'en'));
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
