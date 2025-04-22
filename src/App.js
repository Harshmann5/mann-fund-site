
// React App Entry Point (App.js)
import React from "react";

const portfolio = [
  {
    name: "NVIDIA",
    ticker: "NVDA",
    link: "https://www.nvidia.com/en-us/",
  },
  {
    name: "IonQ",
    ticker: "IONQ",
    link: "https://ionq.com/",
  },
  {
    name: "Palantir",
    ticker: "PLTR",
    link: "https://www.palantir.com/",
  },
  {
    name: "Intel",
    ticker: "INTC",
    link: "https://www.intel.com/",
  },
];

export default function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white font-sans">
      <header className="flex flex-col items-center py-10 border-b border-gray-800">
        
        <h1 className="text-4xl font-semibold tracking-wide text-[#facc15]">Mann Private Wealth Fund</h1>
        <p className="mt-2 text-gray-400">Global Investment Firm</p>
      </header>

      <main className="px-6 md:px-20 py-10 space-y-14">
        <section>
          <h2 className="text-2xl font-light border-l-4 border-[#facc15] pl-4 mb-4">About the Fund</h2>
          <p className="text-gray-300 leading-relaxed">
            Mann Private Wealth Fund invests in global stock markets with a balanced portfolio
            of high-performing equities and strategic cash positions. Our philosophy is
            centered on delivering a consistent 30% annual return through calculated,
            disciplined investment strategies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-light border-l-4 border-[#facc15] pl-4 mb-4">Investment Policy Statement</h2>
          <p className="text-gray-300 leading-relaxed">
            MPWF invests exclusively with proprietary capital. We utilize a combination of fundamental,
            long/short, and multi-strategy approaches across global equity markets. Our philosophy centers
            on disciplined risk-taking, deep research, and the agility to adapt to market opportunities. We
            are not currently accepting outside investors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-light border-l-4 border-[#facc15] pl-4 mb-4">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.map((stock) => (
              <div
                key={stock.ticker}
                className="bg-[#1e293b] p-4 rounded-lg border border-gray-700 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-medium text-[#facc15]">{stock.name}</h3>
                <p className="text-gray-400 text-sm mb-2">Ticker: {stock.ticker}</p>
                <a
                  href={stock.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Learn More ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light border-l-4 border-[#facc15] pl-4 mb-4">Contact Us</h2>
          <ul className="text-gray-300 space-y-2">
            <li><strong>Email:</strong> harshmanna5@gmail.com</li>
          </ul>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-gray-800 text-gray-600 text-sm">
        &copy; 2025 Mann Private Wealth Fund. All rights reserved.
      </footer>
    </div>
  );
}
