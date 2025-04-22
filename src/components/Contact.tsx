import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-navy-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-cream mb-4">Contact</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 max-w-3xl mx-auto">
            For qualified inquiries regarding our investment strategies and approach.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-navy-dark/60 p-8 md:p-12 border-b-2 border-gold shadow-xl text-center">
          <div className="mb-8">
            <h3 className="text-xl text-cream mb-2 font-medium">Email</h3>
            <a 
              href="mailto:harshmanna5@gmail.com" 
              className="text-gold hover:text-gold/80 transition-colors duration-300 text-lg"
            >
              harshmanna5@gmail.com
            </a>
          </div>
          
          <div className="mt-12 mb-6">
            <div className="w-16 h-px bg-cream/20 mx-auto"></div>
          </div>
          
          <p className="text-cream/60 text-sm italic">
            Please note: Mann Private Wealth Fund invests exclusively with proprietary capital and is not currently accepting outside investors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;