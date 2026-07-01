import React from 'react';

export default function Hero({ t }) {
  return (
    <section id="home" className="section bg-light">
      <div className="container hero-content">
        <h1>{t.title}</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          {t.text}
        </p>
        <a href="#booking" className="btn-primary">{t.cta}</a>
      </div>
    </section>
  );
}