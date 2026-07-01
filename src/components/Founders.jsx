import React, { useState } from 'react';

const foundersData = [
  {
    id: 1,
    name: "Jane Doe, RN, BSN",
    role: "Lead Geriatric Specialist",
    bio: "Over 15 years of experience in senior care.",
    cv: "Jane has dedicated her career to elder care, specializing in dementia support and chronic illness management. She holds a BSN from State University and is certified in Palliative Care."
  },
  {
    id: 2,
    name: "Sarah Smith, NP",
    role: "Palliative Nurse Practitioner",
    bio: "Focuses on pain management and family counseling.",
    cv: "Sarah is a licensed Nurse Practitioner with advanced training in hospice and palliative medicine. She focuses on holistic pain management and providing emotional support to families."
  }
];

export default function Founders() {
  const [selectedFounder, setSelectedFounder] = useState(null);

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2>Meet Our Founders</h2>
        
        <div className="grid-2">
          {foundersData.map((founder) => (
            <div key={founder.id} className="founder-card">
              <button 
                onClick={() => setSelectedFounder(founder)}
                className="founder-img-placeholder"
                aria-label={`View resume for ${founder.name}`}
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
          <div className="modal-content" onClick={e => e.stopPropagation()}>
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