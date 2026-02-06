import React from "react";
import { ChevronRight } from "lucide-react";

const CHECKOUT_PREMIUM = "https://somasoundsolutions.mycartpanda.com/checkout/206809489:1";
const CHECKOUT_BASICO = "https://figurinhas-downsell.vercel.app/";

const CTASection: React.FC = () => {
  return (
    <div className="px-6 pb-16 flex flex-col items-center space-y-8 max-w-md mx-auto">
      <a
        href={CHECKOUT_PREMIUM}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-black text-2xl py-6 rounded-2xl shadow-2xl flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 animate-pulse-gold uppercase tracking-tighter"
      >
        QUERO O PACK PREMIUM
        <ChevronRight className="ml-2 w-8 h-8" />
      </a>

      <a
        href={CHECKOUT_BASICO}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold text-sm py-3 px-6 rounded-md transition-colors text-center"
      >
        Não, obrigado! Quero apenas o acesso básico de 3 meses.
      </a>
    </div>
  );
};

export default CTASection;
