
import { NewsItem, FacultyMember, LearningResource, ResourceTag } from './types';

export const NEWS_FEATURED: NewsItem[] = [
  {
    id: 1,
    title: "Chiêu sinh các lớp Ngoại ngữ đợt tháng 1/2026",
    summary: "Trung tâm Ngoại ngữ thông báo chiêu sinh các khóa đào tạo Tiếng Anh, Trung, Đức, Nhật, Pháp...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZitq7gtl0VgjNkBvwFKjD9-TtYU0J-fhyPx20SlESjLnyaaHjs_4wLX4JLzTF854SOr9b5tKwswO4v-OH-SaVjZxBroXD6BWtwRX6LCFMJHoUuwOefKPUO6gRs0dXV6enm0xlLMcMxBwujVph4KiWNdVCbp_1GH3TOJHS3woCfti9fWfjsnfI8dXO7jhZZL2Q_c1F1pKcq2LfkHb08cXshEa93X0EtIkUAup7M3B8Pu5UKcmRDNHwBzTlEHgrh8DB1LGtrkPSdLYB",
    category: "Tuyển Sinh",
    color: "text-primary"
  },
  {
    id: 2,
    title: "Ưu đãi 5% Học phí lớp Kỹ năng Tiếng Anh Giao tiếp cơ bản",
    summary: "Giảm học phí đặc biệt 5% cho tất cả các học viên đăng ký và đóng học phí đến 16h30 ngày 14/01/2026...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSuYv_K9rnrMMU5T9oFufXCODehrWYN4qip14AZguMdLtfWDs1pkjU4RwlbaOq3PgUSYUkeMvUZiu750MjTSJ-NqfykZqlSFPCpBQxUzvLS-jyKWC6-j_Esv7gyLQunXZsAToByBNG438JFZeubZt16iQ5qOYdU3zrUlaJ3gKO1WL4adVIcqdAyZvUYmtvW0emsfh-0SEhZ7kRQzbhVpayvDO3lVo4Olzq2xpMr8shVZDi4e5McTMfdr7YkSy6kyBP9D1XICx7DQ1_",
    category: "Ưu Đãi",
    color: "text-red-500"
  },
  {
    id: 3,
    title: "Cách hiểu về kết quả bài thi xếp lớp Tiếng Anh đầu vào",
    summary: "Hướng dẫn chi tiết cách đọc kết quả thi Tiếng Anh đầu vào đợt tháng 9/2025 cho tân sinh viên...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABxhOsZd4Y1-1uULXNlGWetB91BpjV9fVQb_75pN2N4agXmpKwJwnro20mPBhRJnI-NK9cJMflsd6_FahRDct2eT23r90h2T12rGPLKgH2QN3UrMzxD1pR7kc5tTLHiCxrcJKTSkg4USeZAwJ4cQnc_tE9BAmm7vFvTXOKLDmEkiiiy-IbSt1cAf6B7CCht_cGOYS-6FMh5-tIBu5IlubJEfkqpJA68AbL376SKp9d9EcRd4pBnINO_IWO3ZocUWoeUooLBpogzk57",
    category: "Thông báo",
    color: "text-green-600"
  }
];

export const NEWS_OTHER: NewsItem[] = [
  {
    id: 4,
    title: "Quyết định ban hành quy định chuyển điểm hoặc miễn thi các học phần Ngoại ngữ",
    summary: "",
    image: "",
    date: "11:10 AM",
    views: 496,
    category: "05" // Using this as day
  },
  {
    id: 5,
    title: "Ưu đãi 5% Học phí lớp Kỹ năng Tiếng Anh Giao tiếp cơ bản ENCS040026 đợt 11/2025",
    summary: "",
    image: "",
    date: "02:49 PM",
    views: 2282,
    category: "22"
  },
  {
    id: 6,
    title: "Lễ ký kết hợp tác triển khai chứng chỉ tiếng Anh quốc tế PEIC",
    summary: "",
    image: "",
    date: "01:39 PM",
    views: 280,
    category: "07"
  },
  {
    id: 7,
    title: "Giải thích về lộ trình học tiếng Anh của khóa 2023, 2024, 2025",
    summary: "",
    image: "",
    date: "11:13 AM",
    views: 814,
    category: "03"
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 1,
    name: "ThS. Lê Quốc Huỳnh",
    title: "ThS. Quản trị kinh doanh và ThS. Ngôn ngữ Trung Quốc",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJywCNcH0JqmGmSlt8IF6AeAVFp4lFgT9Z5HVMqmMoW15Fe_xeSNg475-dBgf7cg8nINqfLIOpfhsUt_e9tatdsJSBxSelupFhXYWBnFoXSdKvYVwcvvENCe5imxVIRCN3e1wEmP4ojlBRtWGIjdM75DI3psR5SHvxXzIeBzwr9d_rDUenbqKIFUQ_JHOgSxW0g9tXrhcGNFXcFvtVd4ccwXdYabpGF6_x11bu6QNqFX5eZMI-n1NP_tdlshsdJPUnM7jafpH6VX6z"
  },
  {
    id: 2,
    name: "ThS. Nguyễn Ngọc Phương Uyên",
    title: "ThS. Phương pháp Giảng dạy Tiếng Anh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADezRrtQB2BjHBiUNwPm5IDgc--WZagG2t62N12wbrglDOiJR9T_55HtwzoDnKOS-sD6g1FsD9YpZaLERaswqLu5-eqSDlJmn1D7xUH5kQ4x2KWMVYDMHNnKLdo_hx2Xinfg5W3QScv6O6lLMRxMEaJxyC0SbHBh6uVDMSgsI32h0MRV5XUgt6on6EWIR8I_X0H8nWEhSujgIL55p7Vbo3KGfnyExrrkV2K_bCZHVJW_MwALP6Y3-yaywvW_bMmnasx3eOqqBLtsdZ"
  },
  {
    id: 3,
    name: "ThS. Lê Khai Minh Trí",
    title: "ThS. Phương pháp Giảng dạy Tiếng Anh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB64iULlK0LZ57ydITKLow1HmQQc5VLnyWFrAbx6A-xkA4eOZhHETP6YAPXnCGYAmbgn3xgy-OBJfISBKfs5myyLio7kkCDmvFX13ZSsncixndeXMeyPtK0Q_P06JYm_aIrEDJ23Jim0GzYJ0WHqK4UEFmpa3AY5Lul4bX49Vya6BWHOCz-yc6bCQePvfbQoix1Wn7_V8utD_MJChsxO2GlYpIUMw8M-UDKRdioeialKwdfu0Y1Zm6j5ApT-R-rJlNH_8UvtNRrzTtr"
  },
  {
    id: 4,
    name: "ThS. Trần Thị Phương Ly",
    title: "ThS. Phương pháp Giảng dạy Tiếng Anh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC06MV23UUQQgpQvS4gOBIjvh1DXa5YTzaqV_pHM2ueZidacqoyK8d6lD6UM1gpxzJy14-kLt_p32bpzjCxJtj6lMqStK1BJSptYwBI-qeRLFuQU3o0sDjTDyDLPdMd-2g8NT1dSXGiuVrItF37Y7LOs0kG7dy6_F3zq3SAq3-jVyV4pgOEXoOTgEDLfbi5sok-x1qyxqop0R-gY2Bct7DpXT2ok7VT3PT6l_CPnussrMOMd_cLhU6Lq1R2xJX2tP6jRsmDGfCf67JK"
  },
  {
    id: 5,
    name: "ThS. Lê Phương Anh",
    title: "ThS. Phương pháp Giảng dạy Tiếng Anh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4zUv-IuNNf8seSxVeZTAMSrbwveE3fKkPIb0pIn7Kmz-LaFc6Rj8mBYyHyHddoyidt9YFNMt-GEQdG1m7uxYlLn_isk6SyfoH5PFeOhO44sYi32yGfnIC-NlfTVoOtsWpcraxmKvV978jHZRF0Wlx3Zbf3AvDpoGGjdt0JXYpzjKloIFDbUzLAVsPPu1_nZIayVTczijENb9yawyyJqoEixampbZLZt4MFlL5MdK3pYvM-ytwzNWRaVRXMNiQyjvtBg2u1aSCKUYu"
  },
  {
    id: 6,
    name: "ThS. Phạm Quang Bình",
    title: "ThS. Phương pháp Giảng dạy Tiếng Anh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiP4HQF3UB6wJsYh6S122WnvvqjlHZj9ZuwIQKb2wJNsmLz_dhBp2jkA4eZF16YbIyN5t51Eo2ncWd7eE9vj9JCqmMY3BPIS8lsA1Tknav2y_L1OOKzxV7o9cQVF3H2KPcpKj9RnDIaK0ZQCdvxoITjyaie5i5-vR1SiGR_C8dFSQgGjwRK_gJEbgqrY6B52XTaS5V2VbaR7g_57wirKZYwNVYqrYJbT4CMvTFPNEf5UfBQuEyK0QkWtf5RE9TD2PZL9f2V8Jlo16W"
  },
  {
    id: 7,
    name: "ThS. Trần Thị Thanh Kiều",
    title: "ThS. Phương pháp Giảng dạy Tiếng Anh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbQpCLSL24kNvQg72yfYHSoFHnuchpdJkZauyjMr83D-gBUjtsNyX6Q2SGaNEoyAIVSP42AYJdCAGhJJcmo-7-awLxJPap2xgvFdhA17wz0o0Qd37EfhtYjtrtut4lEv18p4_999H-5x0_l-h7rQjwkCUXVlD0TUnMrnSvqHPG3UIWzPtFtpBpDX5Hl0h0gvs6QbKBtDRTHmEd7N2G9XLzWyh6jbFes5MBrHhx3b0BNdwT8GKrCsk_SCe4NxVJZB2CCu_JFOTBX--y"
  },
  {
    id: 8,
    name: "ThS. Sử Thị Ái Mỹ",
    title: "ThS. Phương pháp Giảng dạy Tiếng Anh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzc93uOgmKpqif0L6UIwPnpVyqcDwC8W_3UsECMk7EjjhovuGdEhLYs5kizgwfo5BqotV9tBCPooOjXofzNSPhPqbX_bKSKJA7d0qRmIPFqUOqp2dV2qONUik9nCqDMUEDhbxbjSmFReYDd8OiWhCWKJSSB_FogOgH3sAd27Ior04gvdGjgKtlH4n4iV6S8V_zY4VPApMwq7SWdvO6fKasyX9ZcUItwzm6l5IHMYSqH7iQoR2l3MzqSwTepdya_g-oIVraNpqk-NjP"
  },
  {
    id: 9,
    name: "ThS. Phạm Văn Khanh",
    title: "ThS. Phương pháp Giảng dạy Tiếng Anh",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8lTU7fdF_AY19a2YxBm4E6cT2Wmn2qn_HvllzIEQVDNszPKZA949iR0WRZenzMTZ5HNPKfbBJj9teIcZnkK1qmvlRjREi5iLBdHw7t2X4gTrKpiItjEnU6SnAwC1A3V82FhDXQQbP7NbRL9dtnc1-Ls3h1cNI1wp2y2FRArS1CPfe63CKXxp8Zn6n4U5LU8mCEQUQ6Ip6UZGdY5QSuLoSQvxLzsNaWDVoOIJzsCKmuwS8mS8kthFscq28_ytdLNot5w1WqH9RQV_l"
  }
];

export const DIRECTOR_INFO = {
  name: "TS. Đặng Tấn Tín",
  title: "Giám đốc: TS. Đặng Tấn Tín",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP4M5PnhhyMoHICrYGILxSbWdwuwPg76L_cRbAz52Kl4tJ1rygeEpzKlBzvsPkW8LSpM_-9_7keBJkLpO5f8F08yk7cqOJf4Wd9WSh-uaGUN6ZUfIaaepUaheZ0GJC5BgLajIhAGvj5lLer4EWwCfxNlP75cQtU1PDD6IKw-MeB-e8jPqab-lLDc6frnJvj4C1BdOhGVYxZjr5raBCL1HbO-_u694g1lK0fKwBOL1vt1Q0WsJ2p8wClClrtNSbTM_F2k5odpSspcfk",
  email: "tin.dang@hcmute.edu.vn",
  phone: "0909 222 504",
  qualifications: [
    "Tiến sĩ chuyên ngành Sư phạm, Đại học La Trobe, Úc.",
    "Thạc sĩ chuyên ngành Giảng dạy Tiếng Anh, Đại học Queensland, Úc.",
    "Trưởng Khoa Ngoại ngữ, Trường Đại học Sư phạm Kỹ thuật TP.HCM.",
    "Trưởng Ban Nội dung, Phân hội Nghiên cứu và Giảng dạy Tiếng Anh Việt Nam (VietTESOL).",
    "Chủ tịch và thành viên của nhiều hội đồng chấm luận văn Thạc sĩ và luận án Tiến sĩ ở nhiều trường đại học của Việt Nam và Úc.",
    "Cán bộ ra đề thi VSTEP và chấm thi VSTEP."
  ],
  research: "Năng lực tự học; Phương pháp giảng dạy ngoại ngữ, và Ứng dụng công nghệ trong dạy và học ngôn ngữ."
};

// Mock data for Learning Resources (mimicking Strapi response)
export const LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 1,
    title: "Cấu trúc bài thi VSTEP B1-B2-C1",
    summary: "VSTEP (Vietnamese Standardized Test of English Proficiency) là bài thi đánh giá năng lực sử dụng tiếng Anh đầu tiên tại Việt Nam, được ra đời từ Đề án Ngoại ngữ Quốc gia 2020 với sự phát triển dựa trên khung tham chiếu Châu Âu (CEFR). Bài thi VSTEP hiện đang được tổ chức bởi nhiều trường đại học trọng điểm trên cả nước. Cấu trúc bài thi được thiết kế để đánh giá 4 kỹ năng cơ bản...",
    date: "15/01/2026",
    category: "VSTEP",
    categoryColor: "bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400",
    slug: "cau-truc-bai-thi-vstep"
  },
  {
    id: 2,
    title: "Cấu trúc bài thi IELTS Học thuật",
    summary: "Bài thi IELTS (International English Language Testing System) là một bài thi đánh giá trình độ tiếng Anh dành cho người nói tiếng Anh không phải là bản ngữ. IELTS được sử dụng rộng rãi cho mục đích học thuật, di cư và công việc. Bài thi đánh giá bốn kỹ năng chính: Nghe, Đọc, Viết và Nói...",
    date: "12/01/2026",
    category: "IELTS",
    categoryColor: "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    slug: "cau-truc-bai-thi-ielts"
  },
  {
    id: 3,
    title: "Cấu trúc bài thi TOEIC 4 kỹ năng",
    summary: "Bài thi TOEIC (Test of English for International Communication) là một bài thi đánh giá khả năng tiếng Anh dành cho những người nói tiếng Anh không phải là bản ngữ, thường được sử dụng để đánh giá kỹ năng tiếng Anh trong môi trường kinh doanh hoặc công sở. Có hai loại bài thi TOEIC chính là loại 2 kỹ năng và loại 4 kỹ năng...",
    date: "08/01/2026",
    category: "TOEIC",
    categoryColor: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    slug: "cau-truc-bai-thi-toeic"
  },
  {
    id: 4,
    title: "Các cụm từ về thao tác lái xe trong Tiếng Anh",
    summary: "Bạn có lái xe thường xuyên không? Bạn đã biết cách giải thích các thao tác lái xe bằng tiếng Anh chưa? Sau đây là một số cụm từ dùng để miêu tả các thao tác khi lái xe. Hãy cùng tìm hiểu nào. Những từ vựng này vô cùng hữu ích cho các học viên có nhu cầu làm việc trong môi trường quốc tế hoặc định cư...",
    date: "05/01/2026",
    category: "GIAO TIẾP",
    categoryColor: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    slug: "cum-tu-lai-xe-tieng-anh"
  }
];

export const RESOURCE_TAGS: ResourceTag[] = [
  { label: "VSTEP", count: 12 },
  { label: "IELTS", count: 8 },
  { label: "TOEIC", count: 15 },
  { label: "Giao tiếp", count: 21 },
  { label: "Tiếng Nhật", count: 5 },
  { label: "Tiếng Trung", count: 4 }
];
