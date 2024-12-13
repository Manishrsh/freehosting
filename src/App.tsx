import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero onGetStarted={() => setShowForm(true)}/>
      <Features />
      <Footer />
      {showForm && <RegistrationForm  onGetExited={() => setShowForm(false)} />}
    </div>
  );
}

export default App;