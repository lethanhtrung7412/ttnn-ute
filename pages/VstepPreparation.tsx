import React, { useState } from 'react';
import { Breadcrumb, CourseSidebarBtn, CourseHero, CourseStats } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { List, Notebook, Star, Trophy, CheckCircle, Send, Dot } from 'lucide-react';

const VstepPreparation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vstepb1' | 'vstepb2' | 'vstepc1'>('vstepb1');

  return (
    <>
      <Breadcrumb items={[{ label: 'Tiếng Anh' }, { label: 'Luyện thi VSTEP' }]} />
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
                    active={activeTab === 'vstepb1'} 
                    onClick={() => setActiveTab('vstepb1')} 
                    icon={<Notebook size={20} />} 
                    label="LUYỆN THI VSTEP B1" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'vstepb2'} 
                    onClick={() => setActiveTab('vstepb2')} 
                    icon={<Star size={20} />} 
                    label="LUYỆN THI VSTEP B2" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'vstepc1'} 
                    onClick={() => setActiveTab('vstepc1')} 
                    icon={<Trophy size={20} />} 
                    label="LUYỆN THI VSTEP C1" 
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
              
              {/* Content for VSTEP B1 */}
              {activeTab === 'vstepb1' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4M5PnhhyMoHICrYGILxSbWdwuwPg76L_cRbAz52Kl4tJ1rygeEpzKlBzvsPkW8LSpM_-9_7keBJkLpO5f8F08yk7cqOJf4Wd9WSh-uaGUN6ZUfIaaepUaheZ0GJC5BgLajIhAGvj5lLer4EWwCfxNlP75cQtU1PDD6IKw-MeB-e8jPqab-lLDc6frnJvj4C1BdOhGVYxZjr5raBCL1HbO-_u694g1lK0fKwBOL1vt1Q0WsJ2p8wClClrtNSbTM_F2k5odpSspcfk"
                    badge="VSTEP B1"
                    title="LUYỆN THI VSTEP B1"
                    subtitle="Khóa học xây dựng nền tảng vững chắc cho sinh viên bắt đầu lộ trình chinh phục chứng chỉ quốc tế."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 TÍN CHỈ" duration="60 GIỜ" level="B1" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">LUYỆN THI VSTEP B1 | VSTEP B1 PREPARATION</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho các học viên từ 15 tuổi trở lên có trình độ tiếng Anh sơ trung cấp, tương đương với trình độ A2 theo Khung Tham chiếu Chung Châu Âu (CEFR), và mong muốn củng cố và nâng cao năng lực để đạt kết quả tốt trong kỳ thi VSTEP cấp độ B1. Sau khi hoàn thành khóa học, học viên sẽ cải thiện khả năng sử dụng tiếng Anh trong các tình huống quen thuộc, với trọng tâm là phát triển sự tự tin và độ chính xác trong giao tiếp hàng ngày. Cụ thể,
                      </p>
                      
                      <ul className="grid md:grid-cols-1 gap-4 mb-8 list-none p-0 text-sm">
                        {[
                          "KỸ NĂNG NGHE: Nâng cao khả năng hiểu các thông tin chính từ các cuộc hội thoại và thông báo quen thuộc, bao gồm việc nhận diện chi tiết và suy luận ý chính trong ngữ cảnh quen thuộc.",
                          "KỸ NĂNG ĐỌC: Củng cố kỹ năng đọc hiểu các văn bản thông dụng, như thư từ, thông báo, và bài báo đơn giản; cải thiện kỹ năng đọc lướt, đọc chi tiết và tìm ý chính.",
                          "KỸ NĂNG VIẾT: Phát triển khả năng viết đoạn văn và thư tín ở mức độ cơ bản với cấu trúc hợp lý; nâng cao độ chính xác ngữ pháp và vốn từ vựng trong các tình huống quen thuộc.",
                          "KỸ NĂNG NÓI: Tăng cường sự lưu loát và rõ ràng trong giao tiếp về các chủ đề quen thuộc, tự tin tham gia vào các cuộc hội thoại đơn giản và trình bày ý kiến cá nhân."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                             <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                             <span>{item}</span>
                           </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">PHƯƠNG PHÁP GIẢNG DẠY</h3>
                      <div className="space-y-4 mb-10">
                        {[
                          "Lớp học tương tác: Học viên sẽ tham gia vào các buổi thảo luận theo cặp hoặc nhóm nhỏ, làm bài tập về nghe và đọc, tham gia thực hiện các hoạt động nói và viết. Mỗi buổi học đều có phản hồi trực tiếp từ giảng viên về ngữ pháp, tính mạch lạc và việc sử dụng từ vựng.",
                          "Học tập theo nhiệm vụ: Tập trung vào áp dụng các chiến lược đã học vào các nhiệm vụ cụ thể của IELTS. Giảng viên sẽ cung cấp các câu hỏi mẫu và các buổi luyện tập có thời gian giới hạn, mô phỏng điều kiện thực tế của bài thi để giúp học viên quản lý thời gian và căng thẳng trong kỳ thi.",
                          "Phản hồi từ bạn học và luyện nói: Các buổi thảo luận nhóm, nhập vai và phản hồi từ bạn học sẽ giúp nâng cao kỹ năng nói trôi chảy và xây dựng sự tự tin trong giao tiếp và phỏng vấn.",
                          "Bài tập hàng tuần: LMS sẽ cung cấp các bài kiểm tra và bài tập thường xuyên để củng cố bài học, với phản hồi từ trợ giảng và học viên có thể tự theo dõi tiến độ để cải thiện liên tục.",
                          "Giảng viên chất lượng: Có trình độ từ Thạc sĩ trở lên với kinh nghiệm giảng dạy luyện thi nhiều năm."
                        ].map((item, idx) => (
                          <div key={idx} className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                            <p className="text-sm text-text-sub-light dark:text-text-sub-dark flex gap-2">
                              <Dot className="text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Đăng ký tham gia ngay</h4>
                          <p className="text-blue-100">Đừng bỏ lỡ cơ hội đạt điểm cao ngay từ lần thi đầu tiên.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                          <Send size={20} /> &gt;&gt;&gt; ĐĂNG KÝ &lt;&lt;&lt;
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              {/* Content for VSTEP B2 */}
              {activeTab === 'vstepb2' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBZitq7gtl0VgjNkBvwFKjD9-TtYU0J-fhyPx20SlESjLnyaaHjs_4wLX4JLzTF854SOr9b5tKwswO4v-OH-SaVjZxBroXD6BWtwRX6LCFMJHoUuwOefKPUO6gRs0dXV6enm0xlLMcMxBwujVph4KiWNdVCbp_1GH3TOJHS3woCfti9fWfjsnfI8dXO7jhZZL2Q_c1F1pKcq2LfkHb08cXshEa93X0EtIkUAup7M3B8Pu5UKcmRDNHwBzTlEHgrh8DB1LGtrkPSdLYB"
                    badge="VSTEP B2"
                    title="LUYỆN THI VSTEP B2"
                    subtitle="Nâng cao kỹ năng phân tích và tốc độ xử lý bài thi cho mục tiêu trung cấp."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 TÍN CHỈ" duration="60 GIỜ" level="B2" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">LUYỆN THI VSTEP B2 | VSTEP B2 PREPARATION</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho các học viên từ 15 tuổi trở lên có trình độ tiếng Anh trung cấp, tương đương với trình độ B1 theo Khung Tham chiếu Chung Châu Âu (CEFR), và mong muốn chuẩn bị hiệu quả cho kỳ thi VSTEP cấp độ B2. Sau khi hoàn thành khóa học, học viên sẽ có khả năng sử dụng tiếng Anh một cách độc lập và linh hoạt hơn trong học tập, công việc và đời sống thường ngày. Cụ thể,
                      </p>
                      
                      <ul className="grid md:grid-cols-1 gap-4 mb-8 list-none p-0 text-sm">
                        {[
                          "KỸ NĂNG NGHE: Phát triển khả năng hiểu ý chính và chi tiết trong các đoạn hội thoại và bài nói dài hơn, bao gồm nhiều chủ đề đa dạng và các quan điểm khác nhau.",
                          "KỸ NĂNG ĐỌC: Nâng cao kỹ năng xử lý các văn bản dài và phức tạp hơn như bài báo, báo cáo và tài liệu học thuật; luyện tập cách suy luận, xác định thông tin cụ thể và đánh giá quan điểm tác giả.",
                          "KỸ NĂNG VIẾT: Cải thiện khả năng viết bài luận logic, cấu trúc rõ ràng; nâng cao độ chính xác ngữ pháp và khả năng phát triển ý tưởng một cách mạch lạc trong các chủ đề quen thuộc và trừu tượng.",
                          "KỸ NĂNG NÓI: Phát triển sự lưu loát và linh hoạt trong thảo luận các chủ đề học thuật và xã hội; xây dựng kỹ năng diễn đạt rõ ràng quan điểm cá nhân, phản biện và duy trì cuộc hội thoại hiệu quả."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                             <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                             <span>{item}</span>
                           </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">PHƯƠNG PHÁP GIẢNG DẠY</h3>
                      <div className="space-y-4 mb-10">
                        {[
                          "Lớp học tương tác: Học viên sẽ tham gia vào các buổi thảo luận theo cặp hoặc nhóm nhỏ, làm bài tập về nghe và đọc, tham gia thực hiện các hoạt động nói và viết. Mỗi buổi học đều có phản hồi trực tiếp từ giảng viên về ngữ pháp, tính mạch lạc và việc sử dụng từ vựng.",
                          "Học tập theo nhiệm vụ: Tập trung vào áp dụng các chiến lược đã học vào các nhiệm vụ cụ thể của IELTS. Giảng viên sẽ cung cấp các câu hỏi mẫu và các buổi luyện tập có thời gian giới hạn, mô phỏng điều kiện thực tế của bài thi để giúp học viên quản lý thời gian và căng thẳng trong kỳ thi.",
                          "Phản hồi từ bạn học và luyện nói: Các buổi thảo luận nhóm, nhập vai và phản hồi từ bạn học sẽ giúp nâng cao kỹ năng nói trôi chảy và xây dựng sự tự tin trong giao tiếp và phỏng vấn.",
                          "Bài tập hàng tuần: LMS sẽ cung cấp các bài kiểm tra và bài tập thường xuyên để củng cố bài học, với phản hồi từ trợ giảng và học viên có thể tự theo dõi tiến độ để cải thiện liên tục.",
                          "Giảng viên chất lượng: Có trình độ từ Thạc sĩ trở lên với kinh nghiệm giảng dạy luyện thi nhiều năm."
                        ].map((item, idx) => (
                          <div key={idx} className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                            <p className="text-sm text-text-sub-light dark:text-text-sub-dark flex gap-2">
                              <Dot className="text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Sẵn sàng bứt phá điểm số?</h4>
                          <p className="text-blue-100">Đăng ký ngay để nhận lộ trình ôn luyện chuyên sâu.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                          <Send size={20} /> &gt;&gt;&gt; ĐĂNG KÝ &lt;&lt;&lt;
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              {/* Content for VSTEP C1 */}
              {activeTab === 'vstepc1' && (
                <div>
                   <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBSuYv_K9rnrMMU5T9oFufXCODehrWYN4qip14AZguMdLtfWDs1pkjU4RwlbaOq3PgUSYUkeMvUZiu750MjTSJ-NqfykZqlSFPCpBQxUzvLS-jyKWC6-j_Esv7gyLQunXZsAToByBNG438JFZeubZt16iQ5qOYdU3zrUlaJ3gKO1WL4adVIcqdAyZvUYmtvW0emsfh-0SEhZ7kRQzbhVpayvDO3lVo4Olzq2xpMr8shVZDi4e5McTMfdr7YkSy6kyBP9D1XICx7DQ1_"
                    badge="VSTEP C1"
                    title="LUYỆN THI VSTEP C1"
                    subtitle="Làm chủ chiến thuật làm bài nâng cao và môi trường kinh doanh chuyên nghiệp."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 TÍN CHỈ" duration="60 GIỜ" level="C1" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">LUYỆN THI VSTEP C1 | VSTEP C1 PREPARATION</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho các học viên từ 15 tuổi trở lên có trình độ tiếng Anh nâng cao, tương đương với trình độ C1 theo Khung Tham chiếu Chung Châu Âu (CEFR), và mong muốn đạt kết quả cao trong kỳ thi VSTEP cấp độ C1. Sau khi hoàn thành khóa học, học viên sẽ có khả năng sử dụng tiếng Anh một cách thành thạo, hiệu quả và linh hoạt trong các ngữ cảnh học thuật, chuyên môn và xã hội phức tạp. Cụ thể,
                      </p>
                      
                      <ul className="grid md:grid-cols-1 gap-4 mb-8 list-none p-0 text-sm">
                        {[
                          "KỸ NĂNG NGHE: Phát triển khả năng hiểu rõ các bài giảng, thảo luận chuyên sâu và các bài nói có cấu trúc phức tạp; nhận diện thái độ, ngụ ý và chi tiết tinh tế trong các ngữ cảnh nâng cao.",
                          "KỸ NĂNG ĐỌC: Củng cố kỹ năng đọc hiểu các văn bản dài, học thuật và chuyên ngành; nâng cao khả năng phân tích lập luận, xác định mục đích của tác giả và đánh giá quan điểm trong các tài liệu phức tạp.",
                          "KỸ NĂNG VIẾT: Phát triển kỹ năng viết bài luận học thuật, báo cáo và thư từ trang trọng với ngôn ngữ chính xác và phong phú; củng cố cấu trúc văn bản chặt chẽ và nâng cao khả năng thể hiện tư duy phản biện.",
                          "KỸ NĂNG NÓI: Nâng cao sự tự tin và linh hoạt khi thảo luận các chủ đề trừu tượng hoặc chuyên môn; luyện tập cách diễn đạt quan điểm rõ ràng, có lập luận chặt chẽ và phản hồi hiệu quả trong các tình huống phức tạp."
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                             <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                             <span>{item}</span>
                           </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">PHƯƠNG PHÁP GIẢNG DẠY</h3>
                      <div className="space-y-4 mb-10">
                        {[
                          "Lớp học tương tác: Học viên sẽ tham gia vào các buổi thảo luận theo cặp hoặc nhóm nhỏ, làm bài tập về nghe và đọc, tham gia thực hiện các hoạt động nói và viết. Mỗi buổi học đều có phản hồi trực tiếp từ giảng viên về ngữ pháp, tính mạch lạc và việc sử dụng từ vựng.",
                          "Học tập theo nhiệm vụ: Tập trung vào áp dụng các chiến lược đã học vào các nhiệm vụ cụ thể của IELTS. Giảng viên sẽ cung cấp các câu hỏi mẫu và các buổi luyện tập có thời gian giới hạn, mô phỏng điều kiện thực tế của bài thi để giúp học viên quản lý thời gian và căng thẳng trong kỳ thi.",
                          "Phản hồi từ bạn học và luyện nói: Các buổi thảo luận nhóm, nhập vai và phản hồi từ bạn học sẽ giúp nâng cao kỹ năng nói trôi chảy và xây dựng sự tự tin trong giao tiếp và phỏng vấn.",
                          "Bài tập hàng tuần: LMS sẽ cung cấp các bài kiểm tra và bài tập thường xuyên để củng cố bài học, với phản hồi từ trợ giảng và học viên có thể tự theo dõi tiến độ để cải thiện liên tục.",
                          "Giảng viên chất lượng: Có trình độ từ Thạc sĩ trở lên với kinh nghiệm giảng dạy luyện thi nhiều năm."
                        ].map((item, idx) => (
                          <div key={idx} className="border border-gray-100 dark:border-gray-700 rounded-lg p-5">
                            <p className="text-sm text-text-sub-light dark:text-text-sub-dark flex gap-2">
                              <Dot className="text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Chinh phục C1 ngay hôm nay</h4>
                          <p className="text-blue-100">Cam kết chất lượng đầu ra với đội ngũ giảng viên giàu kinh nghiệm.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                          <Send size={20} /> &gt;&gt;&gt; ĐĂNG KÝ &lt;&lt;&lt;
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

export default VstepPreparation;