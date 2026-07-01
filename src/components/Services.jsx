import React from 'react';

const services = [
  { title: "In-Home Assessment", desc: "Comprehensive home environment and health evaluations." },
  { title: "Palliative Pain Management", desc: "Advanced protocols to ensure comfort and dignity." },
  { title: "Family Counseling", desc: "Guided support sessions for loved ones navigating care transitions." }
];

export default function Services() {
  return (
    <section className="section bg-light">
      <div className="container">
        <h2>Our Services</h2>
        <div className="grid-3">
          {services.map((service, index) => (
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