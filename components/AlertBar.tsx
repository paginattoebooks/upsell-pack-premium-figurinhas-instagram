
import React from 'react';

const AlertBar: React.FC = () => {
  return (
    <div className="bg-red-600 text-white font-black py-3 px-4 text-center sticky top-0 z-50 shadow-md">
      <span className="text-sm md:text-lg tracking-widest animate-pulse">
        ⚠️ DESCONTO ESPECIAL LIBERADO!
      </span>
    </div>
  );
};

export default AlertBar;
