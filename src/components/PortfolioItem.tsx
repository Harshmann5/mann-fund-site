import React, { useState } from 'react';

interface StockInfo {
  id: number;
  ticker: string;
  name: string;
  url: string;
  description: string;
}

interface PortfolioItemProps {
  stock: StockInfo;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ stock }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-navy-dark border border-navy-light hover:border-gold transition-all duration-500 p-6 lg:p-8 rounded-sm group ${isHovered ? 'shadow-gold/20 shadow-lg' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-gold text-sm tracking-widest">{stock.ticker}</span>
          <h3 className="text-xl md:text-2xl font-medium text-cream mt-1">{stock.name}</h3>
        </div>
        <a 
          href={stock.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cream/60 hover:text-gold transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
      </div>
      
      <p className="text-cream/70 leading-relaxed text-sm md:text-base">
        {stock.description}
      </p>
      
      <div className={`mt-6 w-0 h-px bg-gold transition-all duration-700 ${isHovered ? 'w-full' : ''}`}></div>
    </div>
  );
};

export default PortfolioItem;