import React, { useState } from 'react';

export default function Founders({ t }) {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const foundersData = [
  {
    id: 1,
    name: "אסיה ליפקין, RN, MPH, NP",
    role: "מומחית קלינית בגריאטריה",
    bio: "מנהלת מערך אשפוז גריאטרי עם למעלה מ-25 שנות ניסיון בסיעוד ובריאות הציבור.",
    cv: `ניסיון תעסוקתי נבחר:\n
• 2020-היום: מנהלת מערך אשפוז גריאטרי, ביה"ח "משגב לדך", ירושלים.\n
• 2015-2020: אחות ראשית, בית האבות "עידן הזהב", ירושלים.\n
• 2007-2015: אחות ראשית, בית האבות "בית סבאבא", רמת רחל.\n
• 1995-2007: אחות טיפול נמרץ, "הדסה הר הצופים".\n

השכלה והכשרה:\n
• מומחיות קלינית בגריאטריה (ביה"ס לסיעוד שיינברון).\n
• תואר שני (MPH) בבריאות הציבור, כלכלה וניהול - האוניברסיטה העברית.\n
• תואר ראשון (BSN) בסיעוד - האוניברסיטה העברית.\n
• השתלמויות על-בסיסיות: גריאטריה, אתיקה בטיפול בזקן, מניעת זיהומים ואיתור התעללות בזקנים.`
  },
  {
    id: 2,
    // ... הנתונים של האחות השנייה יכנסו לכאן ...
    name: "תמרה סטרטקובסקי, NP",
    role: "Palliative Nurse Practitioner",
    bio: "Focuses on pain management and family counseling.",
    cv: "Sarah is a licensed Nurse Practitioner..."
  }
];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2>{t.heading}</h2>

        <div className="grid-2">
          {foundersData.map((founder) => (
            <div key={founder.id} className="founder-card">
              <button
                onClick={() => setSelectedFounder(founder)}
                className="founder-img-placeholder"
                aria-label={`${t.buttonLabel} ${founder.name}`}
              >
                Photo
              </button>
              <h3>{founder.name}</h3>
              <p style={{ fontWeight: '500', color: 'var(--stone-900)' }}>{founder.role}</p>
              <p>{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedFounder && (
        <div className="modal-overlay" onClick={() => setSelectedFounder(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedFounder(null)}>&times;</button>
            <h3>{selectedFounder.name}</h3>
            <p style={{ fontWeight: 'bold' }}>{selectedFounder.role}</p>
            <p>{selectedFounder.cv}</p>
          </div>
        </div>
      )}
    </section>
  );
}