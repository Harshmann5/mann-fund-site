import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';

interface StockInfo {
  id: number;
  ticker: string;
  name: string;
  url: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [stocks] = useState<StockInfo[]>([
    { 
      id: 1, 
      ticker: 'NVDA', 
      name: 'NVIDIA', 
      url: 'https://www.nvidia.com/en-us/',
      description: 'Leader in GPU technology and AI computing solutions. A cornerstone of our tech-focused portfolio strategy.'
    },
    { 
      id: 2, 
      ticker: 'IONQ', 
      name: 'IonQ', 
      url: 'https://ionq.com/',
      description: 'Pioneer in quantum computing hardware and software, representing our investment in next-generation computing technology.'
    },
    { 
      id: 3, 
      ticker: 'PLTR', 
      name: 'Palantir', 
      url: 'https://www.palantir.com/',
      description: 'Specializes in big data analytics with significant government and commercial applications. A key holding in our data-driven future thesis.'
    },
    { 
      id: 4, 
      ticker: 'INTC', 
      name: 'Intel', 
      url: 'https://www.intel.com/',
      description: 'Established semiconductor manufacturer with strong potential for revival in the chip manufacturing space. A strategic value investment.'
    },
  ]);

  return (
    <section id="portfolio" className="py-24 bg-navy relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-cream mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-cream/80 max-w-3xl mx-auto">
            Our carefully selected investments in innovative technology companies positioned for long-term growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stocks.map((stock) => (
            <PortfolioItem key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;