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
        { title: 'Geriatric Care', desc: 'In addition to geriatric assessments, we provide interventions that address, relieve, and help restore balance in the patient’s condition.' },
        { title: 'Palliative Care', desc: 'Assessment, guidance, support, and improved quality of life for the patient and family through prevention, balance, and relief of symptom burden while addressing physical, emotional, and spiritual needs.' },
        { title: 'Complex Symptom Relief', desc: 'Relief of pain, nausea, constipation, fatigue, shortness of breath, confusion, and restlessness.' }
      ]
    },
    founders: {
      heading: 'About Us',
      buttonLabel: 'View resume for',
      founder1: {
        name: 'Assia Lipkin, RN, MSN',
        role: 'Lead Geriatric and Palliative Care Specialist',
        bio: 'Nursing manager with a Master of Science in Nursing and broad experience in clinic management, clinical training, and care for complex patients in the community.',
        cv: 'Nursing manager with a Master of Science in Nursing and broad experience in clinic management, clinical training, and care for complex patients in the community.'
      },
      founder2: {
        name: 'Tamara Tartakovsky, NP',
        role: 'Palliative Nurse Practitioner',
        bio: 'Focused on pain management, symptom relief, and family support.',
        cv: 'Tamara is a licensed Nurse Practitioner with advanced training in palliative medicine, dedicated to holistic symptom management and compassionate family support.'
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
        { title: 'טיפול גריאטרי', desc: 'בנוסף להערכות גריאטריות, אנו מספקים התערבויות המטפלות, מקלות ויוצרות איזון במצב המטופל.' },
        { title: 'טיפול פליאטיבי', desc: 'הערכה, ליווי ותמיכה, ושיפור איכות החיים של המטופל ומשפחתו באמצעות מניעה, איזון והקלה על עומס הסימפטומים תוך מענה לצרכים גופניים, נפשיים ורוחניים.' },
        { title: 'הקלה על סימפטומים מורכבים', desc: 'הקלה על כאב, בחילה, עצירות, תשישות, קוצר נשימה, בלבול וחוסר שקט.' }
      ]
    },
    founders: {
      heading: 'קצת עלינו',
      buttonLabel: 'הצגת קורות חיים עבור',
      founder1: {
        name: 'אסיה ליפקין, RN, MSN',
        role: 'מומחית גריאטרית ופליאטיבית ראשית',
        bio: 'מנהלת סיעוד, בעלת תואר שני בסיעוד (MSN) ומומחית קלינית בטיפול פליאטיבי עם ניסיון נרחב בניהול קליניקה, הכשרה קלינית וטיפול בחולים מורכבים בקהילה.',
        cv: 'מנהלת סיעוד, בעלת תואר שני בסיעוד (MSN) ומומחית קלינית בטיפול פליאטיבי עם ניסיון נרחב בניהול קליניקה, הכשרה קלינית וטיפול בחולים מורכבים בקהילה.'
      },
      founder2: {
        name: 'תמרה טרטקובסקי, NP',
        role: 'מתרגלת סיעודית פליאטיבית',
        bio: 'מנהלת סיעוד, בעלת תואר שני בסיעוד (MSN) ומומחית קלינית בטיפול פליאטיבי עם ניסיון נרחב בניהול קליניקה, הכשרה קלינית וטיפול בחולים מורכבים בקהילה.',
        cv: 'תמרה היא מתרגלת סיעודית מוסמכת עם הכשרה מתקדמת ברפואה פליאטיבית, המתמקדת בניהול סימפטומים הוליסטי ותמיכה חומלת במשפחות.'
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