import React, { useEffect, useRef } from 'react';

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="philosophy" 
      ref={sectionRef}
      className="py-24 bg-navy-light opacity-0 transition-all duration-1000"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-cream mb-4">Investment Philosophy</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-navy-dark/50 p-8 md:p-12 border-l-2 border-gold shadow-xl">
          <p className="text-cream/90 leading-relaxed mb-6">
            MPWF invests exclusively with proprietary capital. We utilize a combination of fundamental, long/short, and multi-strategy approaches across global equity markets.
          </p>
          <p className="text-cream/90 leading-relaxed mb-6">
            Our philosophy centers on disciplined risk-taking, deep research, and the agility to adapt to market opportunities.
          </p>
          <p className="text-cream/90 leading-relaxed mb-6">
            We seek undervalued companies with strong fundamentals and growth potential. Our diverse portfolio is carefully constructed to balance risk while maximizing returns.
          </p>
          <p className="text-cream/90 leading-relaxed">
            <span className="text-gold font-medium">Note: </span> We are not currently accepting outside investors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;