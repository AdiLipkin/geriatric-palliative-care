import React, { useState } from 'react';
import asiaImg from '../assets/asia.jpeg';
import tamaraImg from '../assets/tamara.jpeg';

export default function Founders({ t, language }) {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const foundersData = [
    {
      id: 1,
      image: asiaImg,
      name: "אסיה ליפקין, RN, MPH, NP",
      englishName: "Assia Lipkin",
      role: "מומחית קלינית בגריאטריה",
      englishRole: "Lead Geriatric Specialist",
      bio: "מומחית קלינית בגריאטריה ומוסמכת בבריאות הציבור (MPH), בעלת למעלה מ-25 שנות ניסיון בניהול מערכי סיעוד, טיפול מורכב והמשך טיפול בקהילה.",
      englishBio: "Geriatric Nurse Practitioner and Public Health expert (MPH) with over 25 years of leadership experience in complex care, nursing management, and continuous community care.",
      cv: `ניסיון תעסוקתי נבחר:
      כיום אחות ביחידת קש"ב - יחידה להמשך טיפול קופ"ח כללית
• 2020-2025 מנהלת מערך אשפוז גריאטרי, ביה"ח "משגב לדך", ירושלים.
• 2015-2020: אחות ראשית, בית האבות "עידן הזהב", ירושלים.
• 2007-2015: אחות ראשית, בית האבות "בית סבאבא", רמת רחל.
• 1995-2007: אחות טיפול נמרץ, "הדסה הר הצופים".

השכלה והכשרה:
• מומחיות קלינית בגריאטריה (ביה"ס לסיעוד שיינברון).
• תואר שני (MPH) בבריאות הציבור, כלכלה וניהול - האוניברסיטה העברית.
• תואר ראשון (BSN) בסיעוד - האוניברסיטה העברית.
• השתלמויות על-בסיסיות: גריאטריה, אתיקה בטיפול בזקן, מניעת זיהומים ואיתור התעללות בזקנים.`,
      englishCv: `Selected experience:
      Currently working as a nurse in the 'Keshev' Continuing Care Unit at Clalit Health Services
• 2020–2025: Director of geriatric inpatient care at Mishgav Ladach Hospital, Jerusalem.
• 2015–2020: Head nurse at Eden HaZahav nursing home, Jerusalem.
• 2007–2015: Head nurse at Beit Sababa nursing home, Ramat Rachel.
• 1995–2007: Intensive care nurse, Hadassah Mount Scopus.

Education and training:
• Clinical specialization in geriatrics (Shenbron School of Nursing).
• Master of Public Health (MPH) in Public Health, Health Economics, and Management – Hebrew University.
• Bachelor of Science in Nursing (BSN) – Hebrew University.
• Advanced trainings: geriatrics, elder care ethics, infection prevention, and elder abuse detection.`,
    },
    {
      id: 2,
      image: tamaraImg,
      name: "תמרה טרטקובסקי, RN, MSN",
      englishName: "Tamara Tartakovsky",
      role: "מומחית קלינית בטיפול תומך (פליאטיבי)",
      englishRole: "Palliative Care Clinical Specialist",
      bio: "מנהלת סיעוד ואחות מומחית עם ניסיון עשיר בניהול מרפאות, הדרכה קלינית וטיפול פליאטיבי.",
      englishBio: "Nursing director and clinical expert with extensive experience in clinic management, clinical training, and palliative care.",
      cv: `ניסיון תעסוקתי נבחר:
• 2019-היום: מנהלת סיעוד מרכז רפואי יהלום, מחוז ירושלים (כללית). אחראית מתחמי חיסונים.
• 2017-2019: מנהלת סיעוד מרפאת לב תלפיות ראשונית, מחוז ירושלים.
• 2014-2017: סגנית אחות ראשית ורכזת הדרכה, מחלקת פגים "הדסה הר הצופים".
• 2002-2014: אחות מוסמכת, אחראית משמרת ומדריכה קלינית ("הדסה ה"צ", ביה"ח "העמק").

השכלה והכשרה:
• מומחיות קלינית בטיפול תומך (פליאטיבי), המרכז האקדמי לב.
• תואר שני בסיעוד (MSN), המרכז האקדמי לב.
• תואר ראשון (BA) במנהל מערכות בריאות, המכללה האקדמית עמק יזרעאל.
• קורסים והסמכות: ניהול (תובנה ותל"מ), הדרכה קלינית, טריאז', וטיפול נמרץ.`,
      englishCv: `Selected experience:
• 2019–present: Nursing director at Yahalom Medical Center, Jerusalem (Clalit), responsible for vaccination centers.
• 2017–2019: Director of nursing at Talpiot Primary Heart Clinic, Jerusalem.
• 2014–2017: Deputy head nurse and training coordinator in the NICU at Hadassah Mount Scopus.
• 2002–2014: Registered nurse, shift supervisor and clinical instructor at HaEmek Hospital.

Education and training:
• Clinical specialization in palliative care, Lev Academic Center.
• Master of Science in Nursing (MSN), Lev Academic Center.
• Bachelor of Arts in Health Systems Management, Emek Yezreel Academic College.
• Certifications: management, clinical teaching, triage, and intensive care.`,
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2>{t.heading}</h2>

        <div className="grid-2 founders-grid">
          {foundersData.map((founder) => (
            <div key={founder.id} className="founder-card">
              <button
                onClick={() => setSelectedFounder(founder)}
                className="founder-img-placeholder"
                aria-label={`${t.buttonLabel} ${language === 'he' ? founder.name : founder.englishName}`}
              >
                <img
                  src={founder.image}
                  alt={language === 'he' ? `תמונה של ${founder.name}` : `Photo of ${founder.englishName}`}
                  className="founder-img"
                />
              </button>
              <h3>{language === 'he' ? founder.name : founder.englishName}</h3>
              <p className="founder-role">{language === 'he' ? founder.role : founder.englishRole}</p>
              <p>{language === 'he' ? founder.bio : founder.englishBio}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedFounder && (
        <div className="modal-overlay" onClick={() => setSelectedFounder(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedFounder(null)}>&times;</button>
            <h3>{language === 'he' ? selectedFounder.name : selectedFounder.englishName}</h3>
            <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
              {language === 'he' ? selectedFounder.cv : selectedFounder.englishCv}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}