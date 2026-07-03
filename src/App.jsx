import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founders from './components/Founders';
import Services from './components/Services';
import BookingForm from './components/BookingForm';

const content = {
  en: {
    nav: { brand: 'Compassionate Care', home: 'Home', about: 'About Us', booking: 'Book Appointment', toggle: 'עברית' },
    hero: {
      title: 'Dignity, Comfort, and Expert Care',
      text: 'Specializing in geriatric and palliative care for older adults. Our team delivers warm, compassionate support that helps families feel confident and secure.',
      cta: 'Request an Assessment'
    },
    videos: {
  heading: 'Care Area Explainer Videos',
  intro: 'These short videos, generated using AI, provide a clear and general overview of our main areas of care.',
  fallbackText: 'Your browser does not support the video tag.',
  items: [
    { 
      title: 'Palliative Care', 
      caption: 'A compassionate approach to symptom relief, emotional support, and improving the quality of life for the patient and their family.', 
      file: 'video1.mp4' 
    },
    { 
      title: 'Comprehensive Geriatric Assessment', 
      caption: 'An in-depth evaluation of function, cognition, and overall health to tailor a personalized care plan for older adults.', 
      file: 'video2.mp4' 
    },
    { 
      title: 'Diabetic Foot Care', 
      caption: 'Expertise in diagnosis, prevention, and professional treatment to maintain foot health and prevent complications.', 
      file: 'video3.mp4' 
    }
  ]
},
    services: {
      heading: 'Our Services',
      items: [
        { title: 'In-Home Assessment', desc: 'Comprehensive home environment and health evaluations.' },
        { title: 'Palliative Pain Management', desc: 'Advanced protocols to ensure comfort and dignity.' },
        { title: 'Family Counseling', desc: 'Guided support sessions for loved ones navigating care transitions.' }
      ]
    },
    founders: {
      heading: 'Our Expertise Team',
      buttonLabel: 'View resume for',
      founder1: {
        name: 'Jane Doe, RN, BSN',
        role: 'Lead Geriatric Specialist',
        bio: 'Over 15 years of experience in senior care.',
        cv: 'Jane has dedicated her career to elder care, specializing in dementia support and chronic illness management. She holds a BSN from State University and is certified in Palliative Care.'
      },
      founder2: {
        name: 'Sarah Smith, NP',
        role: 'Palliative Nurse Practitioner',
        bio: 'Focuses on pain management and family counseling.',
        cv: 'Sarah is a licensed Nurse Practitioner with advanced training in hospice and palliative medicine. She focuses on holistic pain management and providing emotional support to families.'
      }
    },
    booking: {
      heading: 'Book an Appointment',
      successTitle: 'Appointment Requested Successfully!',
      successMessage: 'Thank you, {name}. We will call you shortly at {phone} to confirm your visit.',
      button: 'Book another appointment',
      name: 'Full Name',
      phone: 'Phone Number',
      date: 'Preferred Date',
      time: 'Preferred Time',
      reason: 'Reason for Visit',
      timeOptions: [
        { value: '', label: 'Select a time...' },
        { value: 'Morning', label: 'Morning (9AM - 12PM)' },
        { value: 'Afternoon', label: 'Afternoon (12PM - 4PM)' }
      ],
      submit: 'Submit Request'
    },
    footer: 'Compassionate Care Clinic. All rights reserved.'
  },
  he: {
    nav: { brand: 'מרכז טיפול מסור', home: 'בית', about: 'עלינו', booking: 'לקבוע תור', toggle: 'English' },
    hero: {
      title: 'טיפול מכל הלב קרוב לבית',
      text: 'מתמחים בטיפול גריאטרי ופאליאטיבי למבוגרים. צוותנו מעניק תמיכה חמה, מסורה ומקצועית שמחזקת את המשפחה ושומרת על איכות חיים.',
      cta: 'בקשת הערכה'
    },
   videos: {
  heading: 'סרטוני הסבר על תחומי הטיפול שלנו',
  intro: 'סרטונים קצרים אלה, שנוצרו באמצעות בינה מלאכותית (AI), מספקים סקירה כללית וברורה על נושאי הטיפול המרכזיים שלנו.',
  fallbackText: 'הדפדפן שלך אינו תומך בהפעלת וידאו.',
  items: [
    { 
      title: 'טיפול פליאטיבי', 
      caption: 'גישה חומלת להקלה על תסמינים, תמיכה רגשית ושיפור איכות החיים של המטופל ומשפחתו.', 
      file: 'video1.mp4' 
    },
    { 
      title: 'הערכה גריאטרית כוללנית', 
      caption: 'אבחון מקיף של תפקוד, קוגניציה ובריאות כללית להתאמת תוכנית טיפול אישית לגיל השלישי.', 
      file: 'video2.mp4' 
    },
    { 
      title: 'טיפול ברגל סוכרתית', 
      caption: 'מומחיות באבחון, מניעה וטיפול מקצועי לשמירה על בריאות כף הרגל ומניעת סיבוכים.', 
      file: 'video3.mp4' 
    }
  ]
},
    services: {
      heading: 'השירותים שלנו',
      items: [
        { title: 'הערכת בית', desc: 'הערכות מקיפות של הסביבה הביתית והמצב הרפואי.' },
        { title: 'ניהול כאבים פאליאטיבי', desc: 'פרוטוקולים מתקדמים להבטחת נוחות וכבוד.' },
        { title: 'ייעוץ משפחתי', desc: 'מפגשי תמיכה המנחים בני משפחה העוברים תקופות של מעבר בטיפול.' }
      ]
    },
    founders: {
      heading: 'צוות המומחיות שלנו',
      buttonLabel: 'הצגת קורות חיים עבור',
      founder1: {
        name: 'ג׳יין דו, RN, BSN',
        role: 'מומחית גריאטרית ראשית',
        bio: 'מעל 15 שנות ניסיון בטיפול במבוגרים.',
        cv: 'ג׳יין הקדישה את הקריירה שלה לטיפול בקשישים, עם התמחות בתמיכה בלקויות זיכרון וניהול מחלות כרוניות. היא בעלת BSN מאוניברסיטת המדינה ומוסמכת בטיפול פאליאטיבי.'
      },
      founder2: {
        name: 'שרה סמית, NP',
        role: 'מתרגלת סיעודית פאליאטיבית',
        bio: 'מתמקדת בניהול כאבים וייעוץ משפחתי.',
        cv: 'שרה היא רופאה מוסמכת עם הכשרה מתקדמת ברפואה פליאטיבית ומסייעת לניהול כאבים הוליסטי ולתמיכה רגשית במשפחות.'
      }
    },
    booking: {
      heading: 'לקבוע תור',
      successTitle: 'הבקשה לתור נשלחה בהצלחה!',
      successMessage: 'תודה, {name}. אנחנו נחזור אליך בקרוב בטלפון {phone} לאישור הביקור.',
      button: 'לקבוע תור נוסף',
      name: 'שם מלא',
      phone: 'מספר טלפון',
      date: 'תאריך מועדף',
      time: 'שעת מועדפת',
      reason: 'סיבת הביקור',
      timeOptions: [
        { value: '', label: 'בחר שעה...' },
        { value: 'Morning', label: 'בוקר (09:00-12:00)' },
        { value: 'Afternoon', label: 'אחר הצהריים (12:00-16:00)' }
      ],
      submit: 'שלח בקשה'
    },
    footer: 'מרכז טיפול מסור. כל הזכויות שמורות.'
  }
};

export default function App() {
  const [language, setLanguage] = useState('en');
  const t = content[language];

  return (
    <div className="app-root" style={{ direction: language === 'he' ? 'rtl' : 'ltr' }}>
      <Navbar
        t={t.nav}
        brand={t.nav.brand}
        language={language}
        onToggleLanguage={() => setLanguage((current) => (current === 'en' ? 'he' : 'en'))}
      />
      <Hero t={t.hero} />
      <section className="section bg-light" id="videos">
        <div className="container">
          <div className="section-heading">
            <h2>{t.videos.heading}</h2>
            <p>{t.videos.intro}</p>
          </div>
          <div className="video-grid">
            {t.videos.items.map((video) => (
              <article className="video-card" key={video.title}>
                <video className="video-player" controls preload="metadata" playsInline>
                  <source src={`/src/assets/${video.file}`} type="video/mp4" />
                  {t.videos.fallbackText}
                </video>
                <h3>{video.title}</h3>
                <p>{video.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Founders t={t.founders} language={language} />
      <Services t={t.services} />
      <BookingForm t={t.booking} />
      <footer style={{ background: 'var(--teal-900)', color: 'white', textAlign: 'center', padding: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} {t.footer}</p>
      </footer>
    </div>
  );
}