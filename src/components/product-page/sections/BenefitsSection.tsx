import React from 'react';
import { familyBenefits, pcoBenefits } from '../../../data/productData';

export const BenefitsSection: React.FC = () => {
  return (
    <section className="benefits-section bg-gray-50" id="benefits">
      <div className="container mx-auto py-12 px-4">
        <h2 className="section-title text-2xl md:text-3xl font-bold mb-8 text-center">
          Bảo Vệ Không Gian Sống Tối Ưu
        </h2>
        
        <div className="family-benefits mb-12">
          <h3 className="text-xl font-bold mb-6">Cho Gia Đình Bạn</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyBenefits.map((benefit, index) => (
              <div 
                key={`family-benefit-${index}`}
                className="benefit-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                data-testid={`family-benefit-${index}`}
              >
                <div className="icon-container mb-4">
                  <span className={`icon icon-${benefit.icon} text-primary-600 text-2xl`}></span>
                </div>
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pco-benefits">
          <h3 className="text-xl font-bold mb-6">Cho Chuyên Gia PCO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pcoBenefits.map((benefit, index) => (
              <div 
                key={`pco-benefit-${index}`}
                className="benefit-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                data-testid={`pco-benefit-${index}`}
              >
                <div className="icon-container mb-4">
                  <span className={`icon icon-${benefit.icon} text-secondary-600 text-2xl`}></span>
                </div>
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;