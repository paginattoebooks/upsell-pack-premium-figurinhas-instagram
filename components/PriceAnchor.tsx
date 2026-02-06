
import React from 'react';

const PriceAnchor: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 text-center shadow-inner relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gold opacity-50"></div>
      
      <p className="text-gray-400 text-lg line-through font-medium">
        Preço normal: R$ 15,99
      </p>
      
      <div className="mt-2 flex flex-col items-center">
        <span className="text-sm uppercase tracking-widest text-gold font-bold mb-1">
          Oferta Única Agora:
        </span>
        <h2 className="text-6xl md:text-7xl font-black text-white">
          <span className="text-3xl align-top mr-1">R$</span>
          19,90
        </h2>
      </div>
      
      <p className="mt-4 text-red-500 font-bold bg-red-100/10 inline-block px-4 py-2 rounded-full border border-red-500/20 text-sm">
        Esse valor é exclusivo desta página e não será exibido novamente.
      </p>
    </div>
  );
};

export default PriceAnchor;
