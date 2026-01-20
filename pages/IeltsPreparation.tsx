import React, { useState } from 'react';
import { Breadcrumb, CourseSidebarBtn, CourseHero, CourseStats } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { List, Notebook, Star, Trophy, Headphones, BookOpen, PenTool, Mic, CheckCircle, Send } from 'lucide-react';

const IeltsPreparation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ielts60' | 'ielts65' | 'ielts70'>('ielts60');

  return (
    <>
      <Breadcrumb items={[{ label: 'Tiếng Anh' }, { label: 'Luyện thi IELTS' }]} />
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
                    active={activeTab === 'ielts60'} 
                    onClick={() => setActiveTab('ielts60')} 
                    icon={<Notebook size={20} />} 
                    label="Luyện thi IELTS 6.0" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'ielts65'} 
                    onClick={() => setActiveTab('ielts65')} 
                    icon={<Star size={20} />} 
                    label="Luyện thi IELTS 6.5" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'ielts70'} 
                    onClick={() => setActiveTab('ielts70')} 
                    icon={<Trophy size={20} />} 
                    label="Luyện thi IELTS 7.0" 
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
              
              {/* Content for IELTS 6.0 */}
              {activeTab === 'ielts60' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4M5PnhhyMoHICrYGILxSbWdwuwPg76L_cRbAz52Kl4tJ1rygeEpzKlBzvsPkW8LSpM_-9_7keBJkLpO5f8F08yk7cqOJf4Wd9WSh-uaGUN6ZUfIaaepUaheZ0GJC5BgLajIhAGvj5lLer4EWwCfxNlP75cQtU1PDD6IKw-MeB-e8jPqab-lLDc6frnJvj4C1BdOhGVYxZjr5raBCL1HbO-_u694g1lK0fKwBOL1vt1Q0WsJ2p8wClClrtNSbTM_F2k5odpSspcfk"
                    badge="IELTS PREPARATION 6.0"
                    title="Luyện thi IELTS 6.0"
                    subtitle="Khóa học dành cho học viên trình độ trung cấp hoặc tương đương 5.5 muốn nâng lên 6.0."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="6.0 IELTS" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho các học viên ở độ tuổi từ 15 trở lên có trình độ tiếng Anh trung cấp hoặc tương đương với 5.5 điểm IELTS và muốn nâng lên 6.0 điểm. Sau khi hoàn thành khóa học, học viên sẽ có khả năng sử dụng tiếng Anh tốt hơn ở cả bốn kỹ năng: Nghe, Nói, Đọc, và Viết, với trọng tâm là giảm sai sót đến mức thấp nhất có thể và xây dựng sự tự tin.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <div className="space-y-4 mb-8">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><Headphones className="text-primary" size={20} /> KỸ NĂNG NGHE</h4>
                          <p className="text-sm">Phát triển kỹ năng nhận biết các ý chính, nhận ra cách diễn đạt lại (paraphrasing), và cải thiện khả năng hiểu các cuộc hội thoại và độc thoại với nhiều giọng khác nhau.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><BookOpen className="text-primary" size={20} /> KỸ NĂNG ĐỌC</h4>
                          <p className="text-sm">Cải thiện khả năng hiểu các văn bản học thuật và phổ thông, bao gồm các kỹ năng đọc lướt, đọc tìm ý chính và trả lời các câu hỏi True/False/Not Given.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><PenTool className="text-primary" size={20} /> KỸ NĂNG VIẾT</h4>
                          <p className="text-sm">Cấu trúc bài luận với lập luận rõ ràng, cải thiện vốn ngữ pháp và diễn giải biểu đồ, đồ thị chính xác cho Bài Viết 1.</p>
                        </div>
                         <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><Mic className="text-primary" size={20} /> KỸ NĂNG NÓI</h4>
                          <p className="text-sm">Nâng cao sự trôi chảy và mạch lạc, mở rộng vốn từ vựng và xây dựng sự tự tin khi bày tỏ quan điểm và thảo luận về nhiều chủ đề khác nhau.</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Phương pháp giảng dạy</h3>
                      <ul className="list-none space-y-3 mb-10 text-gray-700 dark:text-gray-300">
                        {[
                          "Lớp học tương tác: Học viên sẽ tham gia vào các buổi thảo luận theo cặp hoặc nhóm nhỏ, làm bài tập về nghe và đọc, tham gia thực hiện các hoạt động nói và viết. Mỗi buổi học đều có phản hồi trực tiếp từ giảng viên về ngữ pháp, tính mạch lạc và việc sử dụng từ vựng.",
                          "Học tập theo nhiệm vụ: Tập trung vào áp dụng các chiến lược đã học vào các nhiệm vụ cụ thể của IELTS. Giảng viên sẽ cung cấp các câu hỏi mẫu và các buổi luyện tập có thời gian giới hạn, mô phỏng điều kiện thực tế của bài thi để giúp học viên quản lý thời gian và căng thẳng trong kỳ thi.",
                          "Phản hồi từ bạn học và luyện nói: Các buổi thảo luận nhóm, nhập vai và phản hồi từ bạn học sẽ giúp nâng cao kỹ năng nói trôi chảy và xây dựng sự tự tin trong giao tiếp và phỏng vấn.",
                          "Bài tập hàng tuần: LMS sẽ cung cấp các bài kiểm tra và bài tập thường xuyên để củng cố bài học, với phản hồi từ trợ giảng và học viên có thể tự theo dõi tiến độ để cải thiện liên tục.",
                          "Giảng viên chất lượng: Có trình độ từ Thạc sĩ trở lên với kinh nghiệm giảng dạy luyện thi nhiều năm."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                            <span><strong className="block mb-1">{item.split(':')[0]}:</strong>{item.split(':')[1]}</span>
                          </li>
                        ))}
                      </ul>

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

              {/* Content for IELTS 6.5 */}
              {activeTab === 'ielts65' && (
                <div>
                   <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBZitq7gtl0VgjNkBvwFKjD9-TtYU0J-fhyPx20SlESjLnyaaHjs_4wLX4JLzTF854SOr9b5tKwswO4v-OH-SaVjZxBroXD6BWtwRX6LCFMJHoUuwOefKPUO6gRs0dXV6enm0xlLMcMxBwujVph4KiWNdVCbp_1GH3TOJHS3woCfti9fWfjsnfI8dXO7jhZZL2Q_c1F1pKcq2LfkHb08cXshEa93X0EtIkUAup7M3B8Pu5UKcmRDNHwBzTlEHgrh8DB1LGtrkPSdLYB"
                    badge="IELTS PREPARATION 6.5"
                    title="Luyện thi IELTS 6.5"
                    subtitle="Khóa học tập trung vào việc nâng cao kỹ năng ngôn ngữ, xử lý các cấu trúc tương đối phức tạp hơn."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="6.5 IELTS" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho các học viên ở độ tuổi từ 15 trở lên muốn nâng cao trình độ tiếng Anh từ 6.0 điểm IELTS lên 6.5 điểm. Khóa học tập trung vào việc nâng cao kỹ năng ngôn ngữ, xử lý các cấu trúc tương đối phức tạp hơn và cải thiện độ chính xác trên tất cả các phần thi.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <div className="space-y-4 mb-8">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><Headphones className="text-primary" size={20} /> KỸ NĂNG NGHE</h4>
                          <p className="text-sm">Nâng cao khả năng theo dõi thông tin chi tiết trong các bài giảng và thảo luận, đồng thời cải thiện tốc độ phản hồi với các dạng câu hỏi như trắc nghiệm và ghép nối.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><BookOpen className="text-primary" size={20} /> KỸ NĂNG ĐỌC</h4>
                          <p className="text-sm">Làm việc hiệu quả hơn với thời gian, hiểu các văn bản khó và phát triển tư duy phản biện để trả lời các câu hỏi suy luận.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><PenTool className="text-primary" size={20} /> KỸ NĂNG VIẾT</h4>
                          <p className="text-sm">Xây dựng cấu trúc bài luận phức tạp hơn, sử dụng vốn từ vựng phong phú và ngữ pháp phức tạp hơn, đảm bảo nguồn từ vựng cao cấp với độ chính xác và kiểm soát.</p>
                        </div>
                         <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><Mic className="text-primary" size={20} /> KỸ NĂNG NÓI</h4>
                          <p className="text-sm">Xây dựng sự trôi chảy ở cấp độ cao hơn, cải thiện phát âm và ngữ điệu, và thể hiện các ý tưởng phức tạp một cách rõ ràng và tự nhiên.</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Phương pháp giảng dạy</h3>
                      <ul className="list-none space-y-3 mb-10 text-gray-700 dark:text-gray-300">
                        {[
                          "Phân tích và luyện tập: Phân tích sâu các nhiệm vụ của IELTS và các chiến lược hiệu quả nhất để hoàn thành chúng. Bài học tập trung vào sửa lỗi và các kỹ thuật nâng cao để cải thiện cả tốc độ và độ chính xác khi trả lời câu hỏi.",
                          "Các buổi thực hành và thi thử: Thực hành thi thử thường xuyên với thời gian giới hạn sẽ được tổ chức để mô phỏng môi trường thi IELTS. Các buổi thực hành sẽ tập trung vào các lĩnh vực cụ thể như tạo câu phức tạp trong bài viết và xử lý các chủ đề nói phức tạp hơn.",
                          "Phản hồi cụ thể về kỹ năng nói và viết: Học viên sẽ tham gia các buổi nói 1-1 với giảng viên, nhận phản hồi cá nhân về phát âm, ngữ pháp và sự trôi chảy. Các bài viết sẽ được đánh giá chi tiết về sự mạch lạc, trả lời nhiệm vụ và sử dụng từ vựng.",
                          "Bài thi thử tương tác: LMS cung cấp các bài thi IELTS đầy đủ với thời gian giới hạn và câu hỏi khó, cùng với phản hồi chi tiết để học viên tự luyện tập và theo dõi tiến độ.",
                          "Giảng viên chất lượng: Có trình độ từ Thạc sĩ trở lên với kinh nghiệm giảng dạy luyện thi nhiều năm."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                            <span><strong className="block mb-1">{item.split(':')[0]}:</strong>{item.split(':')[1]}</span>
                          </li>
                        ))}
                      </ul>

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

               {/* Content for IELTS 7.0 */}
               {activeTab === 'ielts70' && (
                <div>
                   <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBSuYv_K9rnrMMU5T9oFufXCODehrWYN4qip14AZguMdLtfWDs1pkjU4RwlbaOq3PgUSYUkeMvUZiu750MjTSJ-NqfykZqlSFPCpBQxUzvLS-jyKWC6-j_Esv7gyLQunXZsAToByBNG438JFZeubZt16iQ5qOYdU3zrUlaJ3gKO1WL4adVIcqdAyZvUYmtvW0emsfh-0SEhZ7kRQzbhVpayvDO3lVo4Olzq2xpMr8shVZDi4e5McTMfdr7YkSy6kyBP9D1XICx7DQ1_"
                    badge="IELTS PREPARATION 7.0"
                    title="Luyện thi IELTS 7.0"
                    subtitle="Khóa học nhấn mạnh vào việc nâng cao độ chính xác, sự lưu loát và phạm vi sử dụng ngôn ngữ."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="7.0 IELTS" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho các học viên ở độ tuổi từ 15 trở lên có trình độ tiếng Anh cận cao cấp hoặc tương đương với 6.5 điểm IELTS và muốn nâng lên 7.0 điểm (tương đương trình độ C1 theo khung năng lực ngoại ngữ Châu Âu). Khóa học nhấn mạnh vào việc nâng cao độ chính xác, sự lưu loát và phạm vi sử dụng ngôn ngữ trong cả kỹ năng tiếp nhận và sản sinh, chuẩn bị cho các ngữ cảnh học thuật chuyên nghiệp cao cấp.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <div className="space-y-4 mb-8">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><Headphones className="text-primary" size={20} /> KỸ NĂNG NGHE</h4>
                          <p className="text-sm">Củng cố khả năng hiểu các ý tưởng phức tạp và trừu tượng hơn, cải thiện khả năng nghe các đoạn hội thoại và bài giảng nhanh và phức tạp.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><BookOpen className="text-primary" size={20} /> KỸ NĂNG ĐỌC</h4>
                          <p className="text-sm">Tập trung vào việc giải mã các văn bản học thuật khó, làm chủ các dạng câu hỏi thách thức và phát triển chiến lược để đọc hiểu nhanh các tài liệu dày đặc.</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><PenTool className="text-primary" size={20} /> KỸ NĂNG VIẾT</h4>
                          <p className="text-sm">Tinh chỉnh kỹ năng phát triển lập luận cho Bài Viết 2, sử dụng các cấu trúc ngữ pháp phức tạp, đảm bảo nguồn từ vựng cao cấp với độ chính xác và kiểm soát.</p>
                        </div>
                         <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold flex items-center gap-2 text-base text-gray-800 dark:text-gray-200 mb-2"><Mic className="text-primary" size={20} /> KỸ NĂNG NÓI</h4>
                          <p className="text-sm">Nâng cao kỹ năng nói, chẳng hạn như thảo luận các khái niệm trừu tượng, đưa ra đánh giá phản biện và đảm bảo sự lưu loát, chính xác trên nhiều chủ đề khác nhau.</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Phương pháp giảng dạy</h3>
                      <ul className="list-none space-y-3 mb-10 text-gray-700 dark:text-gray-300">
                        {[
                          "Phân tích và thảo luận chuyên sâu: Các bài học sẽ tập trung vào các cuộc thảo luận cấp độ cao, giúp học viên diễn đạt các ý tưởng phức tạp và trừu tượng. Các buổi nghe và nói sẽ bao gồm các tình huống thực tế liên quan đến học thuật và công việc chuyên nghiệp.",
                          "Viết luận chuyên sâu: Các buổi workshop sẽ tập trung vào việc phát triển lập luận và cải thiện cấu trúc, tính mạch lạc và sử dụng ngữ pháp nâng cao trong bài viết. Giảng viên sẽ cung cấp phản hồi cá nhân cho từng bài viết của học viên.",
                          "Thi nói mô phỏng: Các bài thi nói 1-1 sẽ được thực hiện theo đúng định dạng IELTS, cung cấp phản hồi trực tiếp về sự trôi chảy, độ chính xác và khả năng tư duy phản biện khi xử lý các chủ đề khó.",
                          "Luyện thi thử: Người học được truy cập trực tiếp vào hệ thống các bài thi thử IELTS với câu hỏi cấp độ cao và câu trả lời chi tiết, bao gồm các chiến lược xử lý các đoạn văn khó, nhiệm vụ viết phức tạp và chủ đề nói trừu tượng để luyện tập, cọ sát.",
                          "Giảng viên chất lượng: Có trình độ từ Thạc sĩ trở lên với kinh nghiệm giảng dạy luyện thi nhiều năm."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                            <span><strong className="block mb-1">{item.split(':')[0]}:</strong>{item.split(':')[1]}</span>
                          </li>
                        ))}
                      </ul>

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

export default IeltsPreparation;