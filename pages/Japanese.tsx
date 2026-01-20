import React, { useState } from 'react';
import { Breadcrumb, CourseSidebarBtn, CourseHero, CourseStats } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { List, Notebook, Star, Trophy, Send } from 'lucide-react';

const Japanese: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basic' | 'elementary' | 'intermediate'>('basic');

  return (
    <>
      <Breadcrumb items={[{ label: 'Trung - Nhật' }, { label: 'Tiếng Nhật' }]} />
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
                    active={activeTab === 'basic'} 
                    onClick={() => setActiveTab('basic')} 
                    icon={<Notebook size={20} />} 
                    label="TIẾNG NHẬT CƠ BẢN" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'elementary'} 
                    onClick={() => setActiveTab('elementary')} 
                    icon={<Star size={20} />} 
                    label="TIẾNG NHẬT SƠ CẤP" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'intermediate'} 
                    onClick={() => setActiveTab('intermediate')} 
                    icon={<Trophy size={20} />} 
                    label="TIẾNG NHẬT TRUNG CẤP" 
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
              
              {/* Content for Basic */}
              {activeTab === 'basic' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4M5PnhhyMoHICrYGILxSbWdwuwPg76L_cRbAz52Kl4tJ1rygeEpzKlBzvsPkW8LSpM_-9_7keBJkLpO5f8F08yk7cqOJf4Wd9WSh-uaGUN6ZUfIaaepUaheZ0GJC5BgLajIhAGvj5lLer4EWwCfxNlP75cQtU1PDD6IKw-MeB-e8jPqab-lLDc6frnJvj4C1BdOhGVYxZjr5raBCL1HbO-_u694g1lK0fKwBOL1vt1Q0WsJ2p8wClClrtNSbTM_F2k5odpSspcfk"
                    badge="Mã HP: A1.1-N5.1"
                    title="TIẾNG NHẬT CƠ BẢN"
                    subtitle="Khởi đầu hành trình chinh phục tiếng Nhật với nền tảng vững chắc."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="N5.1" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho người học từ 15 tuổi trở lên, chưa biết gì về tiếng Nhật hoặc chỉ biết rất ít, muốn đạt trình độ ở mức nền tảng. Khóa học có mục tiêu phát triển khả năng sử dụng tiếng Nhật ở trình độ cơ bản trong giao tiếp hằng ngày. Sau khi hoàn thành khóa này, học viên có thể sử dụng được tiếng Nhật trong các tình huống giao tiếp đơn giản như giới thiệu về bản thân, chào hỏi, giới thiệu về gia đình, nói về món ăn yêu thích, đọc được thực đơn ở nhà hàng và gọi món.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Phương pháp giảng dạy</h3>
                      <p className="mb-6 leading-relaxed">
                        Người học được thụ hưởng sự tích hợp hài hòa giữa Phương pháp Giảng dạy Giao tiếp và Phương pháp Giảng dạy thông qua Nhiệm vụ trong quá trình học tập. Hoạt động học tập luôn được xây dựng dựa trên các tình huống giao tiếp thực tế, thảo luận hiệu quả theo cặp, nhóm, và luôn tập trung vào mục đích, ý nghĩa của từng trao đổi. Các nhiệm vụ học tập được thiết kế chân thực, phản ánh các nhu cầu thực tế trong cuộc sống.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Kỹ năng đạt được</h3>
                      <p className="mb-6 leading-relaxed">
                        Người học cũng được hỗ trợ để bắt đầu phát triển kỹ năng thuyết trình, học cách hợp tác hiệu quả trong các hoạt động nhóm, và nuôi dưỡng tính tự chủ trong học tập thông qua các nhiệm vụ tự tương tác như đóng vai, thảo luận nhóm và thuyết trình đơn giản. Những hoạt động này được thiết kế để xây dựng sự tự tin cho người học khi sử dụng tiếng Nhật trong cả các tình huống có cấu trúc và tự phát, tạo tiền đề cho sự phát triển ngôn ngữ trong các khóa học tiếp theo.
                      </p>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 mt-10 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Đăng ký tham gia ngay</h4>
                          <p className="text-blue-100">Xây dựng nền tảng tiếng Nhật vững chắc.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                          <Send size={20} /> GHI DANH KHÓA HỌC
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              {/* Content for Elementary */}
              {activeTab === 'elementary' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBZitq7gtl0VgjNkBvwFKjD9-TtYU0J-fhyPx20SlESjLnyaaHjs_4wLX4JLzTF854SOr9b5tKwswO4v-OH-SaVjZxBroXD6BWtwRX6LCFMJHoUuwOefKPUO6gRs0dXV6enm0xlLMcMxBwujVph4KiWNdVCbp_1GH3TOJHS3woCfti9fWfjsnfI8dXO7jhZZL2Q_c1F1pKcq2LfkHb08cXshEa93X0EtIkUAup7M3B8Pu5UKcmRDNHwBzTlEHgrh8DB1LGtrkPSdLYB"
                    badge="Mã HP: A1.2-N5.2"
                    title="TIẾNG NHẬT SƠ CẤP"
                    subtitle="Nâng cao khả năng giao tiếp và mở rộng vốn từ vựng."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="N5.2" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho người học từ 15 tuổi trở lên, đã có kiến thức nền tảng cơ bản về tiếng Nhật và muốn muốn đạt trình độ sơ cấp tiếng Nhật, tương đương trình độ N5. Khóa học giúp người học có kiến thức và kỹ năng giao tiếp cơ bản về cách hỏi và trả lời về giờ giấc, thời tiết, món ăn, mua sắm... Người học sẽ có khả năng đọc hiểu các đoạn văn ngắn và giao tiếp đúng, lưu loát trong các trình huống đối thoại thực tế ở những chủ đề quen thuộc hằng ngày.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Phương pháp giảng dạy</h3>
                      <p className="mb-6 leading-relaxed">
                        Người học được thụ hưởng sự tích hợp hài hòa giữa Phương pháp Giảng dạy Giao tiếp và Phương pháp Giảng dạy thông qua Nhiệm vụ trong quá trình học tập. Hoạt động học tập luôn được xây dựng dựa trên các tình huống giao tiếp thực tế, thảo luận hiệu quả theo cặp, nhóm, và luôn tập trung vào mục đích, ý nghĩa của từng trao đổi. Các nhiệm vụ học tập được thiết kế chân thực, phản ánh các nhu cầu thực tế trong cuộc sống.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Kỹ năng đạt được</h3>
                      <p className="mb-6 leading-relaxed">
                        Người học cũng cố và phát triển kỹ năng thuyết trình, học cách hợp tác hiệu quả trong các hoạt động nhóm, và nuôi dưỡng tính tự chủ trong học tập thông qua các nhiệm vụ tương đối phức tạp. Những hoạt động này được thiết kế để xây dựng sự tự tin cho người học khi sử dụng tiếng Nhật trong cả các tình huống có cấu trúc tương đối phức tạp và tự phát, tạo tiền đề thật vững chắc cho sự phát triển ngôn ngữ ở các mức độ phức tạp hơn.
                      </p>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 mt-10 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Đăng ký tham gia ngay</h4>
                          <p className="text-blue-100">Tiếp tục hành trình chinh phục Nhật ngữ.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
                          <Send size={20} /> GHI DANH KHÓA HỌC
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              {/* Content for Intermediate */}
              {activeTab === 'intermediate' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBSuYv_K9rnrMMU5T9oFufXCODehrWYN4qip14AZguMdLtfWDs1pkjU4RwlbaOq3PgUSYUkeMvUZiu750MjTSJ-NqfykZqlSFPCpBQxUzvLS-jyKWC6-j_Esv7gyLQunXZsAToByBNG438JFZeubZt16iQ5qOYdU3zrUlaJ3gKO1WL4adVIcqdAyZvUYmtvW0emsfh-0SEhZ7kRQzbhVpayvDO3lVo4Olzq2xpMr8shVZDi4e5McTMfdr7YkSy6kyBP9D1XICx7DQ1_"
                    badge="Mã HP: B1.1-N4.1"
                    title="TIẾNG NHẬT TRUNG CẤP"
                    subtitle="Hoàn thiện kỹ năng, tự tin giao tiếp trong môi trường chuyên nghiệp."
                  />
                  <div className="p-8">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="N4.1" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed">
                        Khóa học này được thiết kế cho người học từ 15 tuổi trở lên, đã có kiến thức và kỹ năng về tiếng Nhật ở trình độ sơ cấp và muốn nâng cao kỹ năng đến trình độ trung cấp, tương đương mức độ N4. Khóa học giúp người học có kiến thức và kỹ năng giao tiếp trong các tình huống có nhiều chi tiết như tuổi tác, nhà ở, công việc, nơi làm việc, vui chơi giải trí, và cảm xúc... Học viên có thể hiểu văn bản và tạo ra những câu đơn giản dựa vào những kiến thức về các cấu trúc ngữ pháp phổ biến như cách diễn đạt thời gian, so sánh, và động từ khiếm khuyết.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Phương pháp giảng dạy</h3>
                      <p className="mb-6 leading-relaxed">
                        Người học được thụ hưởng sự tích hợp hài hòa giữa Phương pháp Giảng dạy Giao tiếp và Phương pháp Giảng dạy thông qua Nhiệm vụ trong quá trình học tập. Hoạt động học tập luôn được xây dựng dựa trên các tình huống giao tiếp thực tế, thảo luận hiệu quả theo cặp, nhóm, và luôn tập trung vào mục đích, ý nghĩa của từng trao đổi. Các nhiệm vụ học tập được thiết kế chân thực, phản ánh các nhu cầu thực tế trong cuộc sống.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Kỹ năng đạt được</h3>
                      <p className="mb-6 leading-relaxed">
                        Người học đẩy mạnh phát triển kỹ năng thuyết trình, học cách hợp tác thật hiệu quả trong các hoạt động nhóm, và nuôi dưỡng tính tự chủ trong học tập thông qua các nhiệm vụ phức tạp. Những hoạt động này được thiết kế để phát triển sự tự tin cho người học khi sử dụng tiếng Nhật trong cả các tình huống có cấu trúc phức tạp và hoàn toàn tự phát, tạo tiền đề cho sự phát triển ngôn ngữ một cách tự nhiên trong thực tế.
                      </p>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 mt-10 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Chinh phục đỉnh cao mới</h4>
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

export default Japanese;