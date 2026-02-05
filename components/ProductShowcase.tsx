import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-8">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
        <img src="/foto.png" alt="Showcase Foto" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default ProductShowcase;
