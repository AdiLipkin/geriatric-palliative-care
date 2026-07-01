import React, { useState } from 'react';

export default function BookingForm({ t }) {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', reason: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const successMessage = t.successMessage.replace('{name}', formData.name).replace('{phone}', formData.phone);

  return (
    <section id="booking" className="section bg-white">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2>{t.heading}</h2>

        {isSubmitted ? (
          <div style={{ background: 'var(--teal-50)', padding: '2rem', textAlign: 'center', borderRadius: '8px' }}>
            <h3>{t.successTitle}</h3>
            <p>{successMessage}</p>
            <button onClick={() => setIsSubmitted(false)} className="btn-primary" style={{ marginTop: '1rem' }}>
              {t.button}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid-2" style={{ gap: '1rem' }}>
              <div className="form-group">
                <label>{t.name}</label>
                <input type="text" required className="form-control" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label>{t.phone}</label>
                <input type="tel" required className="form-control" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div className="form-group">
                <label>{t.date}</label>
                <input type="date" required className="form-control" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              </div>
              <div className="form-group">
                <label>{t.time}</label>
                <select required className="form-control" onChange={(e) => setFormData({ ...formData, time: e.target.value })}>
                  {t.timeOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>{t.reason}</label>
              <textarea rows="4" required className="form-control" onChange={(e) => setFormData({ ...formData, reason: e.target.value })}></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>{t.submit}</button>
          </form>
        )}
      </div>
    </section>
  );
}