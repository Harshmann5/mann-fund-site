import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-navy-dark border-t border-navy-light/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-cream/40 text-sm">
              © {currentYear} Mann Private Wealth Fund. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#hero" className="text-cream/40 hover:text-gold transition-colors duration-300 text-sm">
              Home
            </a>
            <a href="#philosophy" className="text-cream/40 hover:text-gold transition-colors duration-300 text-sm">
              Philosophy
            </a>
            <a href="#portfolio" className="text-cream/40 hover:text-gold transition-colors duration-300 text-sm">
              Portfolio
            </a>
            <a href="#contact" className="text-cream/40 hover:text-gold transition-colors duration-300 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;