import React, { useState } from 'react';
import { Breadcrumb, CourseSidebarBtn, CourseHero, CourseStats } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { List, MessageCircle, SignalLow, TrendingUp, Crown, Send } from 'lucide-react';

const EnglishCommunication: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'coban' | 'socap' | 'trungcap' | 'caocap'>('coban');

  return (
    <>
      <Breadcrumb items={[{ label: 'Tiếng Anh' }, { label: 'Kỹ năng giao tiếp' }]} />
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
                    active={activeTab === 'coban'} 
                    onClick={() => setActiveTab('coban')} 
                    icon={<MessageCircle size={20} />} 
                    label="Giao Tiếp Cơ Bản" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'socap'} 
                    onClick={() => setActiveTab('socap')} 
                    icon={<SignalLow size={20} />} 
                    label="Giao Tiếp Sơ Cấp" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'trungcap'} 
                    onClick={() => setActiveTab('trungcap')} 
                    icon={<TrendingUp size={20} />} 
                    label="Giao Tiếp Trung Cấp" 
                  />
                  <CourseSidebarBtn 
                    active={activeTab === 'caocap'} 
                    onClick={() => setActiveTab('caocap')} 
                    icon={<Crown size={20} />} 
                    label="Giao Tiếp Cao Cấp" 
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
              
              {/* Content for Cơ Bản */}
              {activeTab === 'coban' && (
                <div>
                  <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4M5PnhhyMoHICrYGILxSbWdwuwPg76L_cRbAz52Kl4tJ1rygeEpzKlBzvsPkW8LSpM_-9_7keBJkLpO5f8F08yk7cqOJf4Wd9WSh-uaGUN6ZUfIaaepUaheZ0GJC5BgLajIhAGvj5lLer4EWwCfxNlP75cQtU1PDD6IKw-MeB-e8jPqab-lLDc6frnJvj4C1BdOhGVYxZjr5raBCL1HbO-_u694g1lK0fKwBOL1vt1Q0WsJ2p8wClClrtNSbTM_F2k5odpSspcfk"
                    badge="A1 Level"
                    title="Kỹ năng giao tiếp Tiếng Anh Cơ Bản"
                    subtitle="ENGLISH COMMUNICATION SKILLS BASIC (ENCS040026-ENCO040026)"
                  />
                  <div className="p-6 md:p-10">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="Trình độ A1" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed text-justify">
                        Đây là khóa học nhập môn của chương trình Kỹ năng Giao tiếp Tiếng Anh, được thiết kế dành cho sinh viên thuộc các chuyên ngành không phải là tiếng Anh và người học từ 16 tuổi trở lên. Môn học dành cho người mới bắt đầu với một số ít kiến thức cơ bản về tiếng Anh và mục tiêu cuối khóa tương đương với trình độ A1 theo Khung tham chiếu chung Châu Âu (CEFR) về kỹ năng Nói và Nghe. Khóa học nhằm giúp sinh viên xây dựng nền tảng ngôn ngữ cần thiết cho việc giao tiếp cơ bản trong các tình huống quen thuộc, hàng ngày và giới thiệu cho họ những nét văn hóa tinh tế của môi trường nói tiếng Anh.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <p className="mb-4">
                        Người học được làm quen với những cấu trúc cơ bản của hội thoại tiếng Anh, tập trung vào việc hiểu và sử dụng các biểu đạt quen thuộc hàng ngày và các cụm từ đơn giản. Họ sẽ luyện tập giới thiệu bản thân, hỏi và trả lời các câu hỏi về thông tin cá nhân như nơi cư trú, gia đình, người quen biết và các vật dụng mà họ đang sở hữu. Khóa học cũng bao gồm các tương tác rất cơ bản như gọi món ăn ở nhà hàng, chỉ đường và thảo luận về các nhu cầu và sở thích đơn giản.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Chương trình chi tiết</h3>
                      <div className="space-y-4 mb-10 text-justify">
                        <p className="mb-2">Người học được khuyến khích tham gia vào các cuộc nói chuyện đơn giản bằng tiếng Anh, nơi họ có thể giao tiếp một cách chậm rãi và rõ ràng với những người sẵn sàng hỗ trợ. Trọng tâm là giúp người học nhận diện và sử dụng các cụm từ và câu ngắn quen thuộc cần thiết cho việc sinh tồn cơ bản trong môi trường nói tiếng Anh, dù là để du lịch, làm việc hay giao tiếp xã hội.</p>
                        <p className="mb-2">Suốt quá trình học, người học bắt đầu phát triển kỹ năng thuyết trình, học cách hợp tác hiệu quả trong các hoạt động nhóm, và nuôi dưỡng tính tự chủ trong học tập thông qua các nhiệm vụ tương tác như đóng vai, thảo luận nhóm và thuyết trình đơn giản. Những hoạt động này được thiết kế để xây dựng sự tự tin cho người học khi sử dụng tiếng Anh trong cả các tình huống có cấu trúc và tự phát, tạo tiền đề cho sự phát triển ngôn ngữ trong các khóa học tiếp theo.</p>
                        <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-4 border-t pt-4">Sau khi kết thúc khóa học này thành công, người học sẽ được tiếp tục học khóa tiếp theo là <strong>KỸ NĂNG GIAO TIẾP TIẾNG ANH SƠ CẤP</strong> do Trung tâm Ngoại ngữ hoặc Trung tâm Phát triển Ngôn ngữ của Trường tổ chức.</p>
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Đăng ký tham gia ngay</h4>
                          <p className="text-blue-100">Bắt đầu hành trình chinh phục tiếng Anh giao tiếp.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2 transform hover:scale-105 duration-200">
                          <Send size={20} /> GHI DANH KHÓA HỌC
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              {/* Content for Sơ Cấp */}
              {activeTab === 'socap' && (
                <div>
                   <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBZitq7gtl0VgjNkBvwFKjD9-TtYU0J-fhyPx20SlESjLnyaaHjs_4wLX4JLzTF854SOr9b5tKwswO4v-OH-SaVjZxBroXD6BWtwRX6LCFMJHoUuwOefKPUO6gRs0dXV6enm0xlLMcMxBwujVph4KiWNdVCbp_1GH3TOJHS3woCfti9fWfjsnfI8dXO7jhZZL2Q_c1F1pKcq2LfkHb08cXshEa93X0EtIkUAup7M3B8Pu5UKcmRDNHwBzTlEHgrh8DB1LGtrkPSdLYB"
                    badge="A2 Level"
                    title="Kỹ năng giao tiếp Tiếng Anh Sơ Cấp"
                    subtitle="ENGLISH COMMUNICATION SKILLS 1 (ENCS140026 - ENCO140126)"
                  />
                  <div className="p-6 md:p-10">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="Trình độ A2" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed text-justify">
                        Môn học được thiết kế dành cho sinh viên thuộc các chuyên ngành không phải là tiếng Anh và người học từ 16 tuổi trở lên. Môn học có chuẩn đầu vào là trình độ A1 và đạt mục tiêu cuối khóa tương đương với trình độ A2 theo Khung tham chiếu chung Châu Âu (CEFR) về kỹ năng Nói và Nghe. Khóa học này nhằm phát triển năng lực tiếng Anh của sinh viên để xử lý các tình huống cơ bản trong cuộc sống hàng ngày tại các quốc gia nói tiếng Anh và đạt được sự hiểu biết cơ bản về suy nghĩ của người thuộc các nền văn hóa nói tiếng Anh.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <p className="mb-4">
                        Khóa học đặc biệt cung cấp cho sinh viên cơ hội để hiểu các dạng câu và cách diễn đạt tiếng Anh thường dùng liên quan đến các lĩnh vực có tính cấp thiết trong đời sống như thông tin cá nhân và gia đình cơ bản, mua sắm, địa lý địa phương, và việc làm. Khóa học giúp sinh viên giao tiếp bằng tiếng Anh trong các nhiệm vụ đơn giản và thường ngày, yêu cầu trao đổi thông tin một cách đơn giản và trực tiếp về các vấn đề quen thuộc và thông dụng. Người học được yêu cầu mô tả bằng tiếng Anh đơn giản về các khía cạnh của bản thân, môi trường xung quanh và các mối quan tâm thường trực.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Chương trình chi tiết</h3>
                      <div className="space-y-4 mb-10 text-justify">
                        <p className="mb-2">Ngoài ra, khóa học này còn thúc đẩy sự phát triển của kỹ năng thuyết trình, khả năng làm việc nhóm và tính tự chủ trong học tập của người học thông qua các hoạt động tương tác đa dạng.</p>
                        <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-4 border-t pt-4">Sau khi kết thúc khóa học này thành công, người học sẽ được tiếp tục học khóa tiếp theo là <strong>KỸ NĂNG GIAO TIẾP TIẾNG ANH TRUNG CẤP</strong> do Trung tâm Ngoại ngữ hoặc Trung tâm Phát triển Ngôn ngữ của Trường tổ chức.</p>
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Đăng ký tham gia ngay</h4>
                          <p className="text-blue-100">Nâng cao khả năng phản xạ và tự tin giao tiếp.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2 transform hover:scale-105 duration-200">
                          <Send size={20} /> GHI DANH KHÓA HỌC
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

              {/* Content for Trung Cấp */}
              {activeTab === 'trungcap' && (
                <div>
                   <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBSuYv_K9rnrMMU5T9oFufXCODehrWYN4qip14AZguMdLtfWDs1pkjU4RwlbaOq3PgUSYUkeMvUZiu750MjTSJ-NqfykZqlSFPCpBQxUzvLS-jyKWC6-j_Esv7gyLQunXZsAToByBNG438JFZeubZt16iQ5qOYdU3zrUlaJ3gKO1WL4adVIcqdAyZvUYmtvW0emsfh-0SEhZ7kRQzbhVpayvDO3lVo4Olzq2xpMr8shVZDi4e5McTMfdr7YkSy6kyBP9D1XICx7DQ1_"
                    badge="B1 Level"
                    title="Kỹ năng giao tiếp Tiếng Anh Trung Cấp"
                    subtitle="ENGLISH COMMUNICATION SKILLS 2 (ENCS240026-ENCO240226)"
                  />
                  <div className="p-6 md:p-10">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="Trình độ B1" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed text-justify">
                        Môn học được thiết kế dành cho sinh viên thuộc các chuyên ngành không phải là tiếng Anh và người học từ 16 tuổi trở lên. Môn học có chuẩn đầu vào là trình độ A2 và đạt mục tiêu cuối khóa tương đương với trình độ B1 theo Khung tham chiếu chung Châu Âu (CEFR) về kỹ năng Nói và Nghe. Khóa học này nhằm phát triển năng lực tiếng Anh của người học để xử lý các vấn đề trong cuộc sống hàng ngày bằng tiếng Anh ở các quốc gia khác và trao đổi thông tin chung cũng như ý tưởng với người nói tiếng Anh.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <p className="mb-4">
                        Khóa học này đặc biệt cung cấp cho người học cơ hội hiểu được các nội dung chính của lời nói bằng loại tiếng Anh chuẩn và rõ ràng trong các chủ đề quen thuộc, thường gặp trong công việc, trường học, giải trí và các lĩnh vực tương tự. Người học được yêu cầu giải quyết hầu hết các tình huống có thể phát sinh khi đi du lịch tại các khu vực nói tiếng Anh. Họ cũng được yêu cầu tạo ra các bài phát biểu tiếng Anh có kết cấu đơn giản về các chủ đề quen thuộc hoặc liên quan đến sở thích cá nhân.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Chương trình chi tiết</h3>
                      <div className="space-y-4 mb-10 text-justify">
                        <p className="mb-2">Người học cũng được chuẩn bị để mô tả các trải nghiệm, sự kiện, ước mơ, hy vọng, và tham vọng của mình bằng lời nói, đồng thời đưa ra lý do và giải thích ngắn gọn cho các ý kiến và kế hoạch cá nhân.</p>
                        <p className="mb-2">Ngoài ra, khóa học này còn thúc đẩy sự phát triển của kỹ năng thuyết trình, khả năng làm việc nhóm và tính tự chủ trong học tập của người học thông qua các hoạt động tương tác đa dạng.</p>
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Đăng ký tham gia ngay</h4>
                          <p className="text-blue-100">Phát triển tư duy ngôn ngữ và kỹ năng diễn đạt.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2 transform hover:scale-105 duration-200">
                          <Send size={20} /> GHI DANH KHÓA HỌC
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              )}

               {/* Content for Cao Cấp */}
               {activeTab === 'caocap' && (
                <div>
                   <CourseHero 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4M5PnhhyMoHICrYGILxSbWdwuwPg76L_cRbAz52Kl4tJ1rygeEpzKlBzvsPkW8LSpM_-9_7keBJkLpO5f8F08yk7cqOJf4Wd9WSh-uaGUN6ZUfIaaepUaheZ0GJC5BgLajIhAGvj5lLer4EWwCfxNlP75cQtU1PDD6IKw-MeB-e8jPqab-lLDc6frnJvj4C1BdOhGVYxZjr5raBCL1HbO-_u694g1lK0fKwBOL1vt1Q0WsJ2p8wClClrtNSbTM_F2k5odpSspcfk"
                    badge="B2 Level"
                    title="Kỹ năng giao tiếp Tiếng Anh Cao Cấp"
                    subtitle="ENGLISH COMMUNICATION SKILLS 3 | 4 TÍN CHỈ | 60 GIỜ"
                  />
                  <div className="p-6 md:p-10">
                    <CourseStats credits="4 Tín chỉ" duration="60 Giờ" level="Trình độ B2" />
                    
                    <article className="prose prose-blue dark:prose-invert max-w-none">
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Giới thiệu khóa học</h3>
                      <p className="mb-6 leading-relaxed text-justify">
                        Môn học được thiết kế dành cho sinh viên thuộc các chuyên ngành không phải là tiếng Anh và người học từ 16 tuổi trở lên. Môn học có chuẩn đầu vào là trình độ B1 và đạt mục tiêu cuối khóa tương đương với trình độ B2 theo Khung tham chiếu chung Châu Âu (CEFR) về kỹ năng Nói và Nghe. Môn học được thiết kế để nâng cao khả năng giao tiếp của người học trong các tình huống phức tạp, với những kiến thức chuyên sâu về tiếng Anh, đặc biệt trong các ngữ cảnh chuyên nghiệp và nội dung xã hội phức tạp.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Mục tiêu đào tạo</h3>
                      <p className="mb-4">
                        Khóa học phát triển dựa trên nền tảng của các khóa học trước, cung cấp cho người học cơ hội tham gia vào các cuộc trao đổi bằng tiếng Anh dài và nhiều chi tiết. Người học cần phân tích để hiểu các cuộc hội thoại và thảo luận phức tạp về các chủ đề tương đối quen thuộc như công việc, giáo dục, và giải trí, đồng thời bắt đầu xử lý những tình huống ít dự đoán trước. Khóa học đặc biệt tập trung vào việc giúp người học hiểu rõ các hướng dẫn, giải thích và ý kiến chi tiết trong tiếng lời nói bằng tiếng Anh, cũng như tự tin phản hồi bằng các bình luận hoặc câu hỏi phù hợp.
                      </p>
                      
                      <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4 mb-4">Chương trình chi tiết</h3>
                      <div className="space-y-4 mb-10 text-justify">
                        <p className="mb-2">Người học sẽ luyện tập diễn đạt những suy nghĩ một cách rõ ràng và trôi chảy trong cả môi trường thông thường và trang trọng, tạo ra các bài nói có kết cấu chặt chẽ và chủ đề đa dạng. Họ sẽ được yêu cầu giải thích các quan điểm, đưa ra đề xuất, bày tỏ ý kiến và phản hồi các quan điểm khác trong các cuộc thảo luận. Người học sẽ thực hiện những bài thuyết trình có cấu trúc chi tiết, giải thích ý tưởng của mình một cách mạch lạc.</p>
                        <p className="mb-2">Môn học còn tập trung phát triển tư duy phản biện, hợp tác nhóm, và tính tự chủ trong học tập. Người học sẽ tham gia vào các hoạt động tương tác nâng cao như tranh luận, giải quyết vấn đề và dự án nhóm, nhằm phát triển khả năng giao tiếp trong cả tình huống tự phát và có tổ chức.</p>
                      </div>

                      <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">Đăng ký tham gia ngay</h4>
                          <p className="text-blue-100">Hoàn thiện kỹ năng chuyên nghiệp và tư duy phản biện.</p>
                        </div>
                        <a href="#" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2 transform hover:scale-105 duration-200">
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

export default EnglishCommunication;