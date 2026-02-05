
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <div className="px-6 py-10 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-md mx-auto flex flex-col items-center text-center">
        <ShieldCheck className="w-16 h-16 text-green-600 mb-4" />
        <h4 className="text-xl font-black text-gray-900 uppercase">
          Garantia Incondicional de 7 Dias
        </h4>
        <p className="mt-2 text-gray-600 text-base leading-relaxed">
          Sua satisfação é nossa prioridade absoluta. Se você não amar o conteúdo, devolvemos 100% do seu dinheiro sem perguntas.
        </p>
      </div>
    </div>
  );
};

export default Guarantee;
