
import React from 'react';

const Headline: React.FC = () => {
  return (
    <div className="px-6 pt-10 pb-6 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
        Espere! <br />
        <span className="text-red-600">Leve o combo Premium agora por apenas:</span> R$19,90
      </h1>
      <div className="mt-6 p-4 bg-gray-50 border-l-4 border-red-600 rounded-r-lg shadow-sm">
        <p className="text-lg text-gray-700 leading-relaxed font-medium">
          Você está tendo essa chance por este ser o último dia <span className="font-bold underline">dessa promoção maluca que fizemos.</span>.
        </p>
        <p className="mt-2 text-xl text-gray-900 font-bold">
          Com o <span className="text-gold">Pack Premium</span>, você garante acesso vitalício e desbloqueia todos os bônus agora.
        </p>
        <div className="mt-4 flex justify-center">
        </div>
      </div>
    </div>
  );
};

export default Headline;
