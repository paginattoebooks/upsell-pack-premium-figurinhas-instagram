
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BENEFITS } from '../types';

const BenefitsList: React.FC = () => {
  return (
    <div className="px-6 py-12 bg-white max-w-xl mx-auto">
      <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
        O QUE VOCÊ LEVA NO <span className="text-gold">PREMIUM:</span>
      </h3>
      
      <ul className="space-y-5">
        {BENEFITS.map((benefit) => (
          <li key={benefit.id} className="flex items-start group">
            <div className="flex-shrink-0 mt-1">
              <CheckCircle2 className={`w-6 h-6 ${benefit.isBonus ? 'text-gold' : 'text-green-500'}`} />
            </div>
            <div className="ml-4">
              <p className={`text-lg leading-tight font-semibold ${benefit.text.includes('VITALÍCIO') ? 'text-gold uppercase' : 'text-gray-800'}`}>
                {benefit.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsList;
