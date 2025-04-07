import React from 'react';
import MosquitoTrapTechnology from './sections/MosquitoTrapTechnology';
import BenefitsSection from './sections/BenefitsSection';

// These components will be implemented later
const ProductHeader = () => (
  <section className="product-header bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Icon 10CS: Bẫy Muỗi Vô Hình</h1>
      <p className="text-xl mb-8">Công nghệ vi nang tiên tiến bảo vệ không gian sống lên đến 9 tháng</p>
    </div>
  </section>
);

const FeatureTable = () => (
  <section className="feature-table py-12" id="features">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Đặc Điểm Sản Phẩm</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-center mb-8">Đang xây dựng...</p>
      </div>
    </div>
  </section>
);

const UsageGuide = () => (
  <section className="usage-guide py-12 bg-gray-50" id="usage">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Hướng Dẫn Sử Dụng</h2>
      <div className="text-center">
        <p>Đang xây dựng...</p>
      </div>
    </div>
  </section>
);

const ResearchEvidence = () => (
  <section className="research-evidence py-12" id="research">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Bằng Chứng Khoa Học</h2>
      <div className="text-center">
        <p>Đang xây dựng...</p>
      </div>
    </div>
  </section>
);

const ApplicationsSection = () => (
  <section className="applications-section py-12 bg-gray-50" id="applications">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Phạm Vi Ứng Dụng</h2>
      <div className="text-center">
        <p>Đang xây dựng...</p>
      </div>
    </div>
  </section>
);

const QualityAssurance = () => (
  <section className="quality-assurance py-12" id="quality">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Đảm Bảo Chất Lượng</h2>
      <div className="text-center">
        <p>Đang xây dựng...</p>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="faq-section py-12 bg-gray-50" id="faq">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Câu Hỏi Thường Gặp</h2>
      <div className="text-center">
        <p>Đang xây dựng...</p>
      </div>
    </div>
  </section>
);

const ContactInfo = () => (
  <section className="contact-info py-12" id="contact">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Liên Hệ</h2>
      <div className="text-center">
        <p>Đang xây dựng...</p>
      </div>
    </div>
  </section>
);

export const ProductPage: React.FC = () => {
  return (
    <div className="product-page">
      <ProductHeader />
      <MosquitoTrapTechnology />
      <BenefitsSection />
      <FeatureTable />
      <UsageGuide />
      <ResearchEvidence />
      <ApplicationsSection />
      <QualityAssurance />
      <FAQSection />
      <ContactInfo />
    </div>
  );
};

export default ProductPage;