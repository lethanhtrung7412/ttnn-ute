import React from 'react';
import { Breadcrumb } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { Building2, CheckCircle } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'Giới thiệu' }, { label: 'Tổng quan' }]} />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-16">
            <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in-up" id="center-overview">
              <div className="bg-primary/5 dark:bg-primary/10 px-8 py-4 border-b border-primary/10 flex items-center gap-3">
                <div className="p-2 bg-primary text-white rounded-lg shadow-sm">
                  <Building2 size={24} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-blue-400 uppercase tracking-wide">Tổng quan về Trung tâm</h2>
              </div>
              <div className="p-8 space-y-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark mb-4 flex items-center gap-2">
                      <span className="w-2 h-8 bg-secondary rounded-full"></span>
                      Lịch sử hình thành
                    </h3>
                    <p className="text-text-sub-light dark:text-text-sub-dark mb-4 text-justify leading-relaxed">
                      Trung tâm Ngoại ngữ Trường Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh được thành lập theo Quyết định số 3179/QĐ-TCCB được ký bởi Bộ trưởng Bộ Giáo dục và Đào tạo vào ngày 31/12/1992.
                    </p>
                    <p className="text-text-sub-light dark:text-text-sub-dark text-justify leading-relaxed">
                      Trải qua hơn 30 năm phát triển không ngừng, Trung tâm đã đào tạo năng lực ngoại ngữ tiếng Anh, Nhật, Hàn, Trung thành công hàng trăm ngàn người học ở nhiều cấp độ, nhiều trình độ đào tạo khác nhau, góp phần nâng cao chất lượng của lực lượng lao động.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-primary">30+</div>
                        <div className="text-xs text-text-sub-light dark:text-text-sub-dark uppercase mt-1">Năm phát triển</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-primary">100k+</div>
                        <div className="text-xs text-text-sub-light dark:text-text-sub-dark uppercase mt-1">Học viên</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-primary">5</div>
                        <div className="text-xs text-text-sub-light dark:text-text-sub-dark uppercase mt-1">Ngôn ngữ</div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                    <img 
                      alt="Lịch sử trung tâm" 
                      className="w-full h-full object-cover hover:scale-105 transition duration-700" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJUx4tntcdEjhjKFsHk1bw5J-EVG5RRMMFiTKZ2Qd0OPf4F8WIAwSRfmgLeABPwOvL572FLrVMDTt5M3Th4awtJ_tiOktUr7tsDQUZXgpLwJDYBVdCW-VbWam0zfVyj8aZaMeukiV7Zy3UKlu-LoIVsPOLGYpcegwk3lxyedK6N3MokLnx8GzNxty8OQnZNKt9gdZlrqak5BqCtyblyqtZxJ2PL8Q1qm7SVUTT1xuykm_YDZZT38KOzFtqvUUvR_naipty-YTR2VXo" 
                    />
                  </div>
                </div>

                <hr className="border-gray-100 dark:border-gray-700" />

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-md bg-white border border-gray-100">
                    <img 
                      alt="Cơ sở vật chất" 
                      className="w-full h-full object-contain p-8" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuASgQhjezd45G4yBnpKCMWp4L8BMeh0JwIilgPtKkkHcEP-dW-uNMN6zKQqYdXR6rJWLbQH6QuRh8wWMgaDIZ5YQpOZVmhUEW2TLhrvMLqHFzAWYSBRPbB1khTydXu_hu9R4uWw9nF78UGHHagVpavDyGazcEZ8AFr7bV8uoyQBwH5pcdacSF1M10n50pz-XxIzE3WDmmtck_k9XTqZ3vzv1-ZDGY4_cvm6OOm9ixi_zTZPLLXdgkJcj-4lY_0jZ-j6t_CGpE-TMw3s" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark mb-4 flex items-center gap-2">
                      <span className="w-2 h-8 bg-secondary rounded-full"></span>
                      Cơ sở vật chất & Môi trường
                    </h3>
                    <p className="text-text-sub-light dark:text-text-sub-dark mb-4 text-justify leading-relaxed">
                      Cũng như các đơn vị khác trong Trường, Trung tâm sử dụng một hạ tầng cơ sở vật chất hiện đại. Các phòng học được lắp đặt các trang thiết bị, phương tiện học tập tiên tiến, cùng với hệ thống phòng lab đa phương tiện và thư viện với nguồn tài nguyên phong phú.
                    </p>
                    <ul className="space-y-2 mt-4">
                      {[
                        "Lớp học nhỏ với mục tiêu không vì lợi nhuận",
                        "Môi trường năng động và sáng tạo",
                        "Tôn trọng quan điểm khác biệt, thúc đẩy tranh luận"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-main-light dark:text-text-main-dark">
                          <CheckCircle size={16} className="text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-600 to-primary rounded-xl p-8 text-center text-white shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Đồng hành cùng sự phát triển của bạn</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Chúng tôi cam kết mang đến môi trường học tập tốt nhất để bạn tự tin chinh phục ngoại ngữ.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a href="#" className="bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition shadow-md">Xem khóa học</a>
                      <a href="#" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition">Liên hệ tư vấn</a>
                    </div>
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

export default Overview;
