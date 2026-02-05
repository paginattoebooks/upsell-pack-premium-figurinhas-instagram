
import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 gap-6">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
          <img 
            src="https://picsum.photos/seed/stickers1/800/500" 
            alt="Showcase Figurinhas 1" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
            +15.000 Elementos
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img 
              src="https://picsum.photos/seed/bonus1/400/300" 
              alt="Bônus 1" 
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <img 
              src="https://picsum.photos/seed/bonus2/400/300" 
              alt="Bônus 2" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
