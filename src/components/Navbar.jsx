import React from 'react';

export default function Navbar({ t, onToggleLanguage, language }) {
  return (
    <nav className={`navbar ${language === 'he' ? 'navbar-rtl' : ''}`}>
      <div className="nav-brand">Compassionate Care</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ul className="nav-links">
          <li><a href="#home">{t.home}</a></li>
          <li><a href="#about">{t.about}</a></li>
          <li><a href="#booking">{t.booking}</a></li>
        </ul>
        <button type="button" className="lang-toggle" onClick={onToggleLanguage}>
          {t.toggle}
        </button>
      </div>
    </nav>
  );
}