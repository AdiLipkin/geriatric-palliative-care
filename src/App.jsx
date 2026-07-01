import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founders from './components/Founders';
import Services from './components/Services';
import BookingForm from './components/BookingForm';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Founders />
      <Services />
      <BookingForm />
      <footer style={{ background: 'var(--teal-900)', color: 'white', textAlign: 'center', padding: '2rem' }}>
        <p>&copy; {new Date().getFullYear()} Compassionate Care Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}