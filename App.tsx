
import React from 'react';
import AlertBar from './components/AlertBar';
import Headline from './components/Headline';
import PriceAnchor from './components/PriceAnchor';
import BenefitsList from './components/BenefitsList';
import CTASection from './components/CTASection';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen flex flex-col items-stretch selection:bg-gold selection:text-white">
      {/* 1. BARRA DE ALERTA */}
      <AlertBar />
      
      {/* 2. HEADLINE & 3. MENSAGEM DE CONTRASTE */}
      <Headline />
      
      {/* 4. PROVA VISUAL (removida) */}
      
      {/* 5. ANCORAGEM DE PREÇO */}
      <PriceAnchor />
      
      {/* 6. LISTA DE BENEFÍCIOS */}
      <BenefitsList />
      
      {/* 7. CTA PRINCIPAL */}
      <CTASection />
      
      {/* 8. GARANTIA */}
      <Guarantee />
      
      {/* 9. RODAPÉ */}
      <Footer />
    </main>
  );
}

export default App;
