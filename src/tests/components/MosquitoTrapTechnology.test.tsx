import React from 'react';
import { render, screen } from '@testing-library/react';
import MosquitoTrapTechnology from '../../components/product-page/sections/MosquitoTrapTechnology';

describe('MosquitoTrapTechnology Component', () => {
  test('renders section title correctly', () => {
    render(<MosquitoTrapTechnology />);
    expect(screen.getByText('Công Nghệ Bẫy Muỗi Độc Đáo')).toBeInTheDocument();
  });

  test('displays the correct citation references', () => {
    render(<MosquitoTrapTechnology />);
    expect(screen.getByTestId('citation-jambulingam2014')).toBeInTheDocument();
    expect(screen.getByTestId('citation-soderlund2012')).toBeInTheDocument();
    expect(screen.getByTestId('citation-wege1999')).toBeInTheDocument();
  });

  test('displays the expert quote', () => {
    render(<MosquitoTrapTechnology />);
    const quoteText = "Bước đột phá của Icon 10CS là khả năng tạo bẫy muỗi vô hình trên mọi bề mặt";
    expect(screen.getByText(new RegExp(quoteText))).toBeInTheDocument();
  });

  test('shows the 4-step process of how the trap works', () => {
    render(<MosquitoTrapTechnology />);
    const steps = [
      "Vi nang bám dính",
      "Muỗi đậu trên bề mặt",
      "Vi nang giải phóng hoạt chất",
      "Lambda-cyhalothrin tác động"
    ];
    
    steps.forEach(step => {
      expect(screen.getByText(new RegExp(step))).toBeInTheDocument();
    });
  });
});