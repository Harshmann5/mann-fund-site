import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-serif bg-navy text-cream min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;