import React from 'react';

export default function Services({ t }) {
  return (
    <section className="section bg-light">
      <div className="container">
        <h2>{t.heading}</h2>
        <div className="grid-3">
          {t.items.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}