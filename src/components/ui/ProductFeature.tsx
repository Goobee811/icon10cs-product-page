import React from 'react';
import { Feature } from '../../types/product.types';

interface ProductFeatureProps {
  feature: Feature;
}

export const ProductFeature: React.FC<ProductFeatureProps> = ({ feature }) => {
  return (
    <div className="product-feature" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
      <p className="feature-benefit">{feature.benefit}</p>
    </div>
  );
};

export default ProductFeature;