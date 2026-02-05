
import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const handleAccept = () => {
    alert("Redirecionando para o Checkout Premium!");
  };

  const handleDecline = () => {
    if (confirm("Você tem certeza? Essa oferta de R$ 10,99 nunca mais aparecerá e você ficará limitado a 3 meses de acesso.")) {
       alert("Prosseguindo com o Pack Básico...");
    }
  };

  return (
    <div className="px-6 pb-16 flex flex-col items-center space-y-8 max-w-md mx-auto">
      <button 
        onClick={handleAccept}
        className="w-full bg-gold hover:bg-[#b8972e] text-white font-black text-2xl py-6 rounded-2xl shadow-2xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 animate-pulse-gold uppercase tracking-tighter"
      >
        QUERO O PACK PREMIUM
        <ChevronRight className="ml-2 w-8 h-8" />
      </button>
      
      <button 
        onClick={handleDecline}
        className="text-gray-400 hover:text-gray-600 font-bold text-sm underline transition-colors"
      >
        Não, obrigado! Quero apenas o acesso básico de 3 meses.
      </button>
    </div>
  );
};

export default CTASection;
