import React from 'react';
import Citation from '../../ui/Citation';

// We need to create the TestimonialQuote component, but for now we'll just import it
// and implement it later
interface TestimonialQuoteProps {
  quote: string;
  author: string;
}

const TestimonialQuote: React.FC<TestimonialQuoteProps> = ({ quote, author }) => (
  <blockquote className="testimonial-quote bg-gray-50 p-4 border-l-4 border-primary-500 italic my-4">
    <p className="mb-2">{quote}</p>
    <footer className="text-sm text-gray-600">— {author}</footer>
  </blockquote>
);

export const MosquitoTrapTechnology: React.FC = () => {
  return (
    <section className="mosquito-trap-technology" id="technology">
      <div className="container mx-auto py-12 px-4">
        <h2 className="section-title text-2xl md:text-3xl font-bold mb-6">
          Công Nghệ Bẫy Muỗi Độc Đáo
        </h2>
        <div className="technology-content md:flex md:gap-8 items-center">
          <div className="md:w-1/2">
            <p className="mb-4">
              <strong>Icon 10CS</strong> tạo nên một <strong>bẫy vô hình</strong> trên mọi bề mặt phun, 
              giữ hoạt chất tiếp xúc với vách tường, gầm bàn ghế và phía sau rèm - nơi muỗi thường đậu. 
              Công nghệ vi nang tiên tiến được cấp bằng sáng chế giúp hoạt chất Lambda-cyhalothrin 10% 
              được giải phóng từ từ, tạo lớp bẫy vô hình hiệu quả lên đến 9 tháng
              <Citation id="jambulingam2014" />
            </p>
            
            <TestimonialQuote
              quote="Bước đột phá của Icon 10CS là khả năng tạo bẫy muỗi vô hình trên mọi bề mặt. Không cần bẫy đèn phức tạp hay thiết bị chuyên dụng - chỉ cần phun một lần, bạn đã có hàng nghìn điểm bẫy muỗi trong nhà."
              author="Chuyên gia kiểm soát côn trùng, Syngenta"
            />
            
            <h3 className="font-bold text-xl mt-6 mb-3">
              Cách Thức Hoạt Động Của Bẫy Muỗi Vô Hình
            </h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong>Vi nang bám dính</strong> trên bề mặt, tạo lớp bẫy vô hình</li>
              <li><strong>Muỗi đậu trên bề mặt</strong> đã xử lý và tiếp xúc với vi nang</li>
              <li><strong>Vi nang giải phóng hoạt chất</strong> khi tiếp xúc với côn trùng</li>
              <li><strong>Lambda-cyhalothrin tác động</strong> lên hệ thần kinh, gây tê liệt và tiêu diệt muỗi
                <Citation id="soderlund2012" />
              </li>
            </ol>
            
            <p className="mt-4">
              Nhờ công nghệ vi nang, lớp bẫy này <strong>không bị rửa trôi bởi mưa nhẹ</strong>, 
              <strong>chống tia UV gấp 2,5 lần</strong> so với công thức thông thường, và 
              <strong>không gây ố màu</strong> trên bề mặt phun
              <Citation id="wege1999" />
            </p>
          </div>
          
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="technology-illustration rounded-lg overflow-hidden shadow-lg">
              {/* Hình ảnh minh họa công nghệ bẫy muỗi vô hình */}
              <img 
                src="/images/invisible-mosquito-trap-technology.jpg" 
                alt="Công nghệ Bẫy Muỗi Vô Hình Icon 10CS" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosquitoTrapTechnology;