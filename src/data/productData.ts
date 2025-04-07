import { Feature, FAQ, Benefit, ResearchEvidence } from '../types/product.types';
import { citations } from './citations';

export const productFeatures: Feature[] = [
  {
    title: 'Công nghệ vi nang tiên tiến',
    description: 'Lambda-cyhalothrin 10% được bao bọc trong vi nang polymer',
    benefit: 'Tạo bẫy muỗi vô hình, bảo vệ tồn lưu kéo dài'
  },
  {
    title: 'Hiệu quả bẫy diệt muỗi',
    description: 'Tỷ lệ diệt muỗi trên 90% kéo dài nhiều tháng',
    benefit: 'Giảm đáng kể muỗi và nguy cơ các bệnh truyền nhiễm'
  },
  {
    title: 'Gói đơn vị liều cấp bằng sáng chế',
    description: 'Thiết kế tiện lợi 62.5ml',
    benefit: 'Pha chế chính xác, dễ sử dụng, tránh lãng phí'
  },
  {
    title: 'Phổ tác động rộng',
    description: 'Hiệu quả với muỗi, gián, kiến ba khoang',
    benefit: 'Bảo vệ toàn diện không gian sống'
  },
  {
    title: 'Thành phần an toàn',
    description: 'Thuộc nhóm nguy hiểm thấp WHO (Nhóm 3)',
    benefit: 'An tâm sử dụng khi tuân thủ hướng dẫn'
  }
];

export const familyBenefits: Benefit[] = [
  {
    title: 'Bảo vệ không gian sống lên đến 250m²',
    description: 'Một gói 62.5ml pha với 8-10 lít nước có thể bảo vệ diện tích lớn, giúp kiểm soát côn trùng trong toàn bộ nhà ở.',
    icon: 'home'
  },
  {
    title: 'Hiệu quả diệt trừ lên đến 90%',
    description: 'Hiệu quả cao đối với muỗi, gián, kiến ba khoang và nhiều loại côn trùng gây hại khác trong nhà.',
    icon: 'shield-check'
  },
  {
    title: 'Phun một lần, an tâm cả năm',
    description: 'Công nghệ vi nang cho phép hoạt chất được giải phóng từ từ, tạo hiệu quả kéo dài lên đến 9 tháng.',
    icon: 'calendar'
  },
  {
    title: 'Không mùi, không ố vết',
    description: 'Sản phẩm không để lại mùi khó chịu hay vết ố sau khi phun, đảm bảo thẩm mỹ cho không gian sống.',
    icon: 'check-circle'
  }
];

export const pcoBenefits: Benefit[] = [
  {
    title: 'Hiệu quả tồn lưu vượt trội',
    description: 'Giảm tần suất xử lý, tiết kiệm chi phí nhân công và tăng sự hài lòng của khách hàng.',
    icon: 'trending-up'
  },
  {
    title: 'Được WHO khuyến nghị',
    description: 'Sử dụng trong các chương trình phòng chống sốt rét toàn cầu, tạo niềm tin cho khách hàng.',
    icon: 'award'
  },
  {
    title: 'Đã chứng minh hiệu quả',
    description: 'Nhiều nghiên cứu thực địa xác nhận hiệu quả vượt trội, nâng cao uy tín dịch vụ PCO.',
    icon: 'clipboard-check'
  },
  {
    title: 'Công nghệ vi nang bảo vệ hoạt chất',
    description: 'Khả năng chống tia UV và các yếu tố môi trường, đảm bảo hiệu quả trong nhiều điều kiện.',
    icon: 'shield'
  }
];

export const faqData: FAQ[] = [
  {
    question: 'Bẫy muỗi vô hình của Icon 10CS khác với các sản phẩm diệt côn trùng thông thường như thế nào?',
    answer: 'Khác với các sản phẩm diệt côn trùng thông thường chỉ có tác dụng tức thời, bẫy muỗi vô hình của Icon 10CS tạo một lớp vi nang trên bề mặt sau khi phun. Các vi nang này bám dính và giải phóng hoạt chất từ từ khi tiếp xúc với côn trùng, tạo hiệu quả kéo dài. Công nghệ này giống như hàng nghìn bẫy muỗi mini được đặt trên mọi bề mặt trong nhà, hoạt động 24/7 trong nhiều tháng.',
    citationIds: ['soderlund2012', 'wege1999']
  },
  {
    question: 'Bẫy muỗi vô hình có an toàn cho trẻ em và vật nuôi không?',
    answer: 'Khi sử dụng theo hướng dẫn, bẫy muỗi vô hình của Icon 10CS an toàn cho người và vật nuôi. Thuộc nhóm an toàn thấp của WHO (Nhóm 3), sản phẩm có hồ sơ an toàn tốt. Tuy nhiên, nên để bề mặt khô hoàn toàn sau khi phun và tránh để trẻ em tiếp xúc trực tiếp với khu vực vừa phun trong vài giờ đầu.',
    citationIds: ['who2021']
  },
  {
    question: 'Làm thế nào để biết bẫy muỗi vô hình vẫn còn hiệu quả?',
    answer: 'Bạn có thể quan sát sự xuất hiện của muỗi và côn trùng trong không gian sống. Khi bẫy còn hiệu quả, bạn sẽ thấy rất ít hoặc không thấy muỗi bay trong nhà, và không có vết đốt mới. Thông thường, hiệu quả của Icon 10CS có thể kéo dài 6-9 tháng tùy điều kiện môi trường.',
    citationIds: ['jambulingam2014', 'raghavendra2011']
  }
];

export const researchEvidences: ResearchEvidence[] = [
  {
    title: 'Nghiên cứu tại Ấn Độ',
    description: 'Giảm đáng kể ca nhiễm sốt rét trong cộng đồng.',
    citationIds: ['jambulingam2014'],
    location: 'Ấn Độ'
  },
  {
    title: 'Thử nghiệm tại Uganda, Malawi và Tanzania',
    description: 'Hiệu quả kiểm soát muỗi kéo dài trên 9 tháng.',
    citationIds: ['jambulingam2014'],
    location: 'Uganda, Malawi, Tanzania'
  },
  {
    title: 'Nghiên cứu phòng thí nghiệm',
    description: 'Tỷ lệ tử vong của muỗi Anopheles stephensi duy trì trên 80% lên đến 270 ngày.',
    citationIds: ['raghavendra2011']
  }
];