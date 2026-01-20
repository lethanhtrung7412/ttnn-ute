import React from 'react';
import { Breadcrumb } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { Quote, Sparkles } from 'lucide-react';
import { DIRECTOR_INFO } from '../constants';

const Message: React.FC = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'Giới thiệu' }, { label: 'Thông điệp giáo dục' }]} />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-16">
            <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in-up">
              <div className="bg-primary/5 dark:bg-primary/10 px-8 py-4 border-b border-primary/10 flex items-center gap-3">
                <div className="p-2 bg-primary text-white rounded-lg shadow-sm">
                  <Quote size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-blue-400 uppercase tracking-wide">Thông điệp giáo dục</h2>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                        <img 
                          alt={DIRECTOR_INFO.name} 
                          className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105" 
                          src={DIRECTOR_INFO.image} 
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-bold text-primary dark:text-white">{DIRECTOR_INFO.name}</h3>
                        <p className="text-sm text-text-sub-light dark:text-text-sub-dark font-medium">Giám đốc Trung tâm</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 prose dark:prose-invert prose-blue max-w-none text-justify">
                    <p className="text-lg font-medium text-text-main-light dark:text-text-main-dark italic border-l-4 border-secondary pl-4 mb-6 leading-relaxed">
                      "Học thêm một ngôn ngữ là tự bổ sung thêm cho mình một bản lĩnh mới. Học ngôn ngữ không chỉ đơn giản là nắm vững các quy tắc ngữ pháp, ghi nhớ một số từ vựng, hay đạt điểm cao trong một kỳ thi."
                    </p>
                    <p className="text-text-sub-light dark:text-text-sub-dark mb-4 leading-relaxed">
                      Mục tiêu quan trọng hơn của học ngôn ngữ là tối ưu hóa khả năng điều tiết mọi giao tiếp dưới nhiều hình thức trong các tình huống thực tế của cuộc sống, là phương tiện để tự làm giàu kiến thức, là công cụ để phát huy năng lực tiềm ẩn của bản thân, là phương thức hiệu quả để làm chủ cuộc đời mình.
                    </p>
                    <p className="text-text-sub-light dark:text-text-sub-dark mb-4 leading-relaxed">
                      Với kinh nghiệm hơn 30 năm hình thành và phát triển, Trung tâm Ngoại ngữ của Trường Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh đã thiết kế rất nhiều các chương trình đào tạo chất lượng cao và đào tạo thành công hàng chục ngàn người học ở mọi lứa tuổi qua nhiều giai đoạn khác nhau của lịch sử phát triển đất nước.
                    </p>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-100 dark:border-blue-800/30 my-6">
                      <h4 className="text-primary dark:text-blue-300 font-bold mb-2 flex items-center gap-2">
                        <Sparkles size={20} /> Phương pháp giảng dạy
                      </h4>
                      <p className="text-sm text-text-main-light dark:text-text-main-dark">
                        Quá trình giảng dạy là <strong>Phương pháp Giao tiếp</strong> (Communicative Language Teaching), <strong>Phương pháp dựa theo Nhiệm vụ</strong> (Task-based Language Teaching), và <strong>Phương pháp dựa theo Dự án</strong> (Project-Based Learning).
                      </p>
                    </div>

                    <p className="text-text-sub-light dark:text-text-sub-dark leading-relaxed">
                      Cho dù người học đang học tiếng Anh, tiếng Nhật hay tiếng Trung, phương pháp giảng dạy của chúng tôi luôn được thiết kế xoay quanh các hoạt động tương tác trên nguyên tắc lấy người học làm trung tâm, giúp họ có được năng lực phát triển ngôn ngữ của bản thân lưu loát gần như người bản ngữ thông qua các tình huống giao tiếp thực tế.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Sidebar showQuickNav={true} className="lg:w-1/4" />
        </div>
      </div>
    </>
  );
};

export default Message;
