import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', reason: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="section bg-white">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2>Book an Appointment</h2>
        
        {isSubmitted ? (
          <div style={{ background: 'var(--teal-50)', padding: '2rem', textAlign: 'center', borderRadius: '8px' }}>
            <h3>Appointment Requested Successfully!</h3>
            <p>Thank you, {formData.name}. We will call you shortly at {formData.phone} to confirm your visit.</p>
            <button onClick={() => setIsSubmitted(false)} className="btn-primary" style={{ marginTop: '1rem' }}>
              Book another appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid-2" style={{ gap: '1rem' }}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" required className="form-control" onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" required className="form-control" onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" required className="form-control" onChange={e => setFormData({...formData, date: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <select required className="form-control" onChange={e => setFormData({...formData, time: e.target.value})}>
                  <option value="">Select a time...</option>
                  <option value="Morning">Morning (9AM - 12PM)</option>
                  <option value="Afternoon">Afternoon (12PM - 4PM)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Reason for Visit</label>
              <textarea rows="4" required className="form-control" onChange={e => setFormData({...formData, reason: e.target.value})}></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Submit Request</button>
          </form>
        )}
      </div>
    </section>
  );
}