
import React from 'react';
import { Breadcrumb, ContactInfoItem, SchematicMap } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { MapPin, Phone, Mail, Facebook, Building2, Info, Map as MapIcon } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'Liên hệ' }]} />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="border-l-4 border-primary pl-4">
              <h2 className="text-3xl font-bold text-primary dark:text-white uppercase">Thông Tin Liên Hệ</h2>
              <p className="text-text-sub-light dark:text-text-sub-dark mt-2">Mọi thắc mắc và nhu cầu hỗ trợ, quý học viên vui lòng liên hệ theo các thông tin bên dưới.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <ContactInfoItem icon={<MapPin size={24} />} title="Địa chỉ">
                <p>Phòng số 10, Khu Dịch vụ Tổng hợp, Cổng Võ Văn Ngân, Số 1 Võ Văn Ngân, Phường Thủ Đức, Thành phố Hồ Chí Minh</p>
              </ContactInfoItem>
              <ContactInfoItem icon={<Phone size={24} />} title="Điện thoại">
                <p>Điện thoại: (028) 3896 3517</p>
                <p className="font-medium mt-1">Hotline/Zalo: 0765 080 182</p>
              </ContactInfoItem>
              <ContactInfoItem icon={<Mail size={24} />} title="Email">
                <p>ttnn@hcmute.edu.vn</p>
              </ContactInfoItem>
              <ContactInfoItem icon={<Facebook size={24} />} title="Facebook">
                <p>fb.me/trungtamngoainguspkt</p>
              </ContactInfoItem>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-8 border border-blue-100 dark:border-blue-900/30">
              <div className="flex items-center gap-3 mb-6">
                <Building2 size={32} className="text-primary" />
                <h3 className="text-xl font-bold text-primary dark:text-white uppercase">Thông tin thanh toán học phí</h3>
              </div>
              <div className="space-y-4 text-text-main-light dark:text-text-main-dark">
                <p className="font-semibold text-lg">NGÂN HÀNG NÔNG NGHIỆP VÀ PHÁT TRIỂN NÔNG THÔN VIỆT NAM (AGRIBANK)</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p><span className="text-text-sub-light dark:text-text-sub-dark">Chi nhánh:</span> <span className="font-medium">Bình Triệu</span></p>
                    <p><span className="text-text-sub-light dark:text-text-sub-dark">Tên tài khoản:</span> <span className="font-medium uppercase">Trung tâm ngoại ngữ Đại học Sư phạm Kỹ thuật</span></p>
                    <p><span className="text-text-sub-light dark:text-text-sub-dark">Số tài khoản:</span> <span className="text-xl font-bold text-secondary tracking-wider">6110201007875</span></p>
                  </div>
                  <div className="bg-white dark:bg-surface-dark p-4 rounded-lg shadow-inner border border-blue-200 dark:border-gray-700">
                    <p className="text-xs font-bold text-primary uppercase mb-2">Cú pháp chuyển khoản mẫu:</p>
                    <p className="text-sm italic text-text-sub-light dark:text-text-sub-dark">
                      &lt;Tên lớp&gt; &lt;số điện thoại&gt; &lt;Họ và Tên&gt;
                    </p>
                    <p className="text-sm mt-2 text-text-main-light dark:text-text-main-dark">
                      <span className="font-bold">Ví dụ:</span> ENCS 0767112125 Nguyen Van Hung ; TOEIC 0767112125 Nguyen Van Hung
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-900/30 flex items-start gap-3">
                  <Info size={20} className="text-yellow-600 flex-shrink-0" />
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-relaxed">
                    Sau khi thanh toán lệ phí bằng hình thức chuyển khoản qua ngân hàng, minh chứng chuyển khoản cần được lưu lại và gửi về cho Trung tâm thông qua <a href="#" className="text-primary font-bold hover:underline">link nộp phí này</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapIcon size={32} className="text-primary" />
                <h3 className="text-xl font-bold text-primary dark:text-white uppercase">Vị trí trung tâm</h3>
              </div>
              <div className="grid md:grid-cols-1 gap-6">
                <SchematicMap />
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-[450px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3918.4795589886364!2d106.7725916!3d10.8502324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f238a633%3A0x2801429918077772!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMO Minh!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
