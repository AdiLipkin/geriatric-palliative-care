import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="section bg-light">
      <div className="container hero-content">
        <h1>Dignity, Comfort, and Expert Care</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Specializing in Geriatric and Palliative Care. We provide warm, compassionate, and professional support for the elderly and their families, ensuring quality of life at every stage.
        </p>
        <a href="#booking" className="btn-primary">Request an Assessment</a>
      </div>
    </section>
  );
}