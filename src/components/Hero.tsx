import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;

    if (heading && subheading) {
      heading.classList.add('animate-fade-in');
      setTimeout(() => {
        subheading.classList.add('animate-fade-in');
      }, 400);
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-navy to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-navy to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 z-10 text-center max-w-5xl">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-8 opacity-0 transition-opacity duration-1000 leading-tight"
        >
          Mann Private Wealth Fund
        </h1>
        <p 
          ref={subheadingRef}
          className="text-lg md:text-xl lg:text-2xl text-cream/80 mb-12 opacity-0 transition-opacity duration-1000 delay-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Investing in global stock markets with a blend of assets and cash, targeting a consistent 30% annual return.
        </p>
        <div className="mt-12 opacity-0 animate-fade-in animation-delay-700">
          <a 
            href="#philosophy" 
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 px-8 py-3 rounded-sm tracking-wider"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#philosophy" className="text-cream/50 hover:text-cream transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;