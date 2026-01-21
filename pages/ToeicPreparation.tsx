import React, { useState } from 'react';
import { Breadcrumb, CourseSidebarBtn, CourseHero, CourseStats } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { List, Notebook, Star, Trophy, Headphones, BookOpen, Send, Mic, FileSearch, CheckCircle } from 'lucide-react';

const ToeicPreparation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'toeic450' | 'toeic500' | 'toeic550'>('toeic450');

  return (
    <>
      <Breadcrumb items={[{ label: 'Tiếng Anh' }, { label: 'Luyện thi TOEIC' }]} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                  <h3 className="font-bold text-primary dark:text-white flex items-center gap-2">
                    <List size={20} /> CÁC CẤP ĐỘ KHÓA HỌC
                  </h3>
                </div>
                <div className="flex flex-col">
                  <CourseSidebarBtn 
                    active={activeTab === 'toeic450'} 
                    onClick={() => setActiveTab('toeic450')} 
                    icon={<Notebook size={20} />} 
                    label="Luyện thi TOEIC 450" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'toeic500'} 
                    onClick={() => setActiveTab('toeic500')} 
                    icon={<Star size={20} />} 
                    label="Luyện thi TOEIC 500" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'toeic550'} 
                    onClick={() => setActiveTab('toeic550')} 
                    icon={<Trophy size={20} />} 
                    label="Luyện thi TOEIC 550" 
                  />
                </div>
              </div>
              <div className="hidden lg:block">
                <Sidebar isSticky={false} />
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-8 animate-fade-in-up">
              
              {/* Content for TOEIC 450 */}
              {activeTab === 'toeic450' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4M5PnhhyMoHICrYGILxSbWdwuwPg76L_cRbAz52Kl4tJ1rygeEpzKlBzvsPkW8LSpM_-9_7keBJkLpO5f8F08yk7cqOJf4Wd9WSh-uaGUN6ZUfIaaepUaheZ0GJC5BgLajIhAGvj5lLer4EWwCfxNlP75cQtU1PDD6IKw-MeB-e8jPqab-lLDc6frnJvj4C1BdOhGVYxZjr5raBCL1HbO-_u694g1lK0fKwBOL1vt1Q0WsJ2p8wClClrtNSbTM_F2k5odpSspcfk"
                    badge="Mã HP: TOEIC450"
                    title="Luyện thi TOEIC 450"
                    subtitle="Khóa học xây dựng nền tảng vững chắc cho sinh viên bắt đầu lộ trình chinh phục chứng chỉ quốc tế."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="450+ TOEIC" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học Luyện thi TOEIC 450 tại Trung tâm Ngoại ngữ HCMUTE được thiết kế đặc biệt dành cho các bạn sinh viên đã có kiến thức tiếng Anh nhưng chưa vững vàng hoặc đã lâu không sử dụng. Đây là bước đệm quan trọng giúp người học hệ thống hóa lại toàn bộ kiến thức ngữ pháp trọng tâm, xây dựng vốn từ vựng cơ bản và làm quen với áp lực phòng thi.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <ul className="grid md:grid-cols-2 gap-4 mb-8 list-none p-0 text-sm">
                        {[
                          "Nắm vững 12 thì cơ bản và các cấu trúc câu phổ biến trong đề thi.",
                          "Nghe hiểu các đoạn hội thoại ngắn và thông tin tranh ảnh (Part 1, 2).",
                          "Phát triển kỹ năng đọc hiểu các văn bản đơn giản, email và thông báo.",
                          "Đạt mức điểm tối thiểu 450 để xét tốt nghiệp hoặc chuyển cấp độ."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                             <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                             <span>{item}</span>
                           </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Chương trình chi tiết</h3>
                      <div className="space-y-4 mb-10">
                         <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><Headphones size={20} /> Listening Skill</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Tập trung vào nhận diện âm, nối âm và các bẫy thường gặp trong Part 1 (Photographs) và Part 2 (Question-Response). Luyện tập với các từ khóa (keywords) để chọn đáp án chính xác mà không cần nghe hiểu 100% nội dung.</p>
                        </div>
                        <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><BookOpen size={20} /> Reading & Grammar</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Củng cố các chủ điểm ngữ pháp: Các thì, Từ loại (Danh, Động, Tính, Trạng), So sánh, Giới từ. Hướng dẫn kỹ thuật Scanning và Skimming để giải quyết các đoạn văn ngắn trong Part 7 nhanh chóng.</p>
                        </div>
                        <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><List size={20} /> Vocabulary</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Hệ thống 600 từ vựng TOEIC căn bản theo các chủ đề: Hợp đồng, Tiếp thị, Bảo hiểm, Tài chính, và các hoạt động văn phòng thông thường.</p>
                        </div>
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Đăng ký tham gia ngay</h4>
                          <p className="text-blue-100">Đừng bỏ lỡ cơ hội đạt điểm cao ngay từ lần thi đầu tiên.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                          <Send size={20} /> GHI DANH KHÓA HỌC
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              {/* Content for TOEIC 500 */}
              {activeTab === 'toeic500' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBZitq7gtl0VgjNkBvwFKjD9-TtYU0J-fhyPx20SlESjLnyaaHjs_4wLX4JLzTF854SOr9b5tKwswO4v-OH-SaVjZxBroXD6BWtwRX6LCFMJHoUuwOefKPUO6gRs0dXV6enm0xlLMcMxBwujVph4KiWNdVCbp_1GH3TOJHS3woCfti9fWfjsnfI8dXO7jhZZL2Q_c1F1pKcq2LfkHb08cXshEa93X0EtIkUAup7M3B8Pu5UKcmRDNHwBzTlEHgrh8DB1LGtrkPSdLYB"
                    badge="Mã HP: TOEIC500"
                    title="Luyện thi TOEIC 500"
                    subtitle="Nâng cao kỹ năng phân tích và tốc độ xử lý bài thi cho mục tiêu trung cấp."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="500+ TOEIC" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học TOEIC 500 tập trung vào việc tối ưu hóa điểm số thông qua việc rèn luyện các kỹ năng trung cấp. Học viên sẽ được tiếp cận với các dạng câu hỏi phức tạp hơn, yêu cầu sự kết hợp giữa kiến thức ngôn ngữ và tư duy logic. Chương trình chú trọng vào việc mở rộng vốn từ vựng chuyên sâu về môi trường công sở và kinh doanh quốc tế.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <ul className="grid md:grid-cols-2 gap-4 mb-8 list-none p-0 text-sm">
                        {[
                          "Làm chủ các cấu trúc câu phức, mệnh đề quan hệ và câu điều kiện.",
                          "Nghe hiểu các bài đối thoại dài và bài nói độc thoại (Part 3, 4).",
                          "Tăng tốc độ đọc và khả năng suy luận ý chính trong Part 7.",
                          "Chinh phục mức điểm 500+ đáp ứng yêu cầu tuyển dụng của nhiều doanh nghiệp."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                             <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                             <span>{item}</span>
                           </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Chương trình chi tiết</h3>
                      <div className="space-y-4 mb-10">
                         <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><Headphones size={20} /> Listening Mastery</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Nâng cao kỹ năng nghe hiểu nội dung chi tiết. Luyện tập cách nắm bắt ngữ cảnh, mối quan hệ giữa các nhân vật trong Part 3 (Conversations) và ý chính của các thông báo công cộng trong Part 4 (Talks).</p>
                        </div>
                        <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><BookOpen size={20} /> Reading Strategy</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Tập trung vào giải quyết Part 5 & 6 trong thời gian tối ưu. Rèn luyện kỹ thuật đọc hiểu đoạn văn đôi (Double Passages) và nhận diện các thông tin gây nhiễu.</p>
                        </div>
                        <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><List size={20} /> Professional Vocabulary</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Mở rộng từ vựng về: Nhân sự, Tổ chức sự kiện, Đặt hàng & Vận chuyển, Du lịch & Khách sạn, và các thuật ngữ kinh tế phổ thông.</p>
                        </div>
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Sẵn sàng bứt phá điểm số?</h4>
                          <p className="text-blue-100">Đăng ký ngay để nhận lộ trình ôn luyện chuyên sâu.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                          <Send size={20} /> GHI DANH KHÓA HỌC
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              {/* Content for TOEIC 550 */}
              {activeTab === 'toeic550' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBSuYv_K9rnrMMU5T9oFufXCODehrWYN4qip14AZguMdLtfWDs1pkjU4RwlbaOq3PgUSYUkeMvUZiu750MjTSJ-NqfykZqlSFPCpBQxUzvLS-jyKWC6-j_Esv7gyLQunXZsAToByBNG438JFZeubZt16iQ5qOYdU3zrUlaJ3gKO1WL4adVIcqdAyZvUYmtvW0emsfh-0SEhZ7kRQzbhVpayvDO3lVo4Olzq2xpMr8shVZDi4e5McTMfdr7YkSy6kyBP9D1XICx7DQ1_"
                    badge="Mã HP: TOEIC550"
                    title="Luyện thi TOEIC 550"
                    subtitle="Làm chủ chiến thuật làm bài nâng cao và môi trường kinh doanh chuyên nghiệp."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="550+ TOEIC" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học TOEIC 550 là chương trình cao cấp nhất trong hệ thống luyện thi chứng chỉ TOEIC 2 kỹ năng tại Trung tâm. Khóa học dành cho những học viên mong muốn đạt kết quả vượt trội để ứng tuyển vào các tập đoàn đa quốc gia hoặc thăng tiến trong sự nghiệp. Trọng tâm của khóa học là các chiến thuật làm bài (tips & tricks) và khả năng xử lý các tình huống giao tiếp phức tạp trong doanh nghiệp.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <ul className="grid md:grid-cols-2 gap-4 mb-8 list-none p-0 text-sm">
                        {[
                          "Sử dụng thành thạo các mẹo loại trừ và quản lý thời gian thi khoa học.",
                          "Nghe hiểu các giọng địa phương khác nhau (Anh, Mỹ, Úc, Canada).",
                          "Giải quyết triệt để các bài đọc đa đoạn văn (Triple Passages) cực khó.",
                          "Đạt mức điểm 550-650+ phục vụ nhu cầu công việc và học thuật."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                             <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                             <span>{item}</span>
                           </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Chương trình chi tiết</h3>
                      <div className="space-y-4 mb-10">
                         <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><Mic size={20} /> Advanced Listening</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Luyện tập nghe hiểu trong môi trường có tạp âm và các biến thể phát âm. Tập trung vào việc suy luận thái độ của người nói và các hàm ý ẩn giấu trong Part 3 & 4.</p>
                        </div>
                        <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2"><FileSearch size={20} /> Part 7 Mastery</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Kỹ thuật liên kết thông tin giữa 3 văn bản khác nhau (hóa đơn, email, phản hồi). Rèn luyện tư duy phản biện để tránh các lỗi sai do chủ quan hoặc thiếu thông tin.</p>
                        </div>
                        <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                          <h4 className="font-bold mb-2 flex items-center gap-2">Business Contexts</h4>
                          <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Đi sâu vào các chủ đề: Hợp đồng kinh tế, Đàm phán thương mại, Báo cáo tài chính, Phân tích thị trường và Quản trị nhân sự cấp cao.</p>
                        </div>
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Chinh phục 550+ ngay hôm nay</h4>
                          <p className="text-blue-100">Cam kết chất lượng đầu ra với đội ngũ giảng viên giàu kinh nghiệm.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                          <Send size={20} /> GHI DANH KHÓA HỌC
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:hidden">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToeicPreparation;