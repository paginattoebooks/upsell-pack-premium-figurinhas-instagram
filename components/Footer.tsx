
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-white text-center text-xs text-gray-400 font-medium">
      <div className="flex justify-center space-x-4 mb-4">
        <button className="hover:text-gray-600 transition-colors">Termos de Uso</button>
        <span className="text-gray-200">|</span>
        <button className="hover:text-gray-600 transition-colors">Política de Privacidade</button>
      </div>
      <p>&copy; {currentYear} Figurinhas Premium Pro. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
