import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero onGetStarted={() => setShowForm(true)} />
      <Features />
      <Footer />
      {showForm && <RegistrationForm />}
    </div>
  );
}

export default App;