import React from 'react';
import { Breadcrumb, FacultyCard } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';
import { Users, CheckCircle, GraduationCap } from 'lucide-react';
import { DIRECTOR_INFO, FACULTY_MEMBERS } from '../constants';

const Faculty: React.FC = () => {
  return (
    <>
      <Breadcrumb items={[{ label: 'Giới thiệu' }, { label: 'Đội ngũ giảng viên & Nhân viên' }]} />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-12">
            
            <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in-up">
              <div className="bg-primary/5 dark:bg-primary/10 px-6 py-4 border-b border-primary/10 flex items-center gap-3">
                <div className="p-2 bg-primary text-white rounded-lg shadow-sm">
                  <Users size={20} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-blue-400 uppercase tracking-wide">Ban Giám đốc & Nhân viên</h2>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
                  <div className="w-full md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">
                      {DIRECTOR_INFO.title}
                    </h3>
                    <ul className="space-y-3 text-sm md:text-base text-text-main-light dark:text-text-main-dark leading-relaxed">
                      {DIRECTOR_INFO.qualifications.map((q, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
                          <span>{q}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-2">
                        <GraduationCap size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span><strong>Lĩnh vực nghiên cứu:</strong> {DIRECTOR_INFO.research}</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-sm text-text-sub-light dark:text-text-sub-dark mb-1">
                        <strong>Email:</strong> <a href={`mailto:${DIRECTOR_INFO.email}`} className="text-primary hover:underline">{DIRECTOR_INFO.email}</a>
                      </p>
                      <p className="text-sm text-text-sub-light dark:text-text-sub-dark">
                        <strong>Điện thoại:</strong> {DIRECTOR_INFO.phone}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4]">
                        <img 
                          alt={DIRECTOR_INFO.name} 
                          className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105" 
                          src={DIRECTOR_INFO.image} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8 animate-fade-in-up">
              <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-secondary rounded-full"></div>
                  <h2 className="text-xl md:text-2xl font-bold text-text-main-light dark:text-white uppercase">Đội ngũ giảng viên</h2>
                </div>
                <p className="text-text-sub-light dark:text-text-sub-dark mb-6 leading-relaxed">
                  Với đội ngũ hơn 40 giảng viên nòng cốt có trình độ chuyên môn cao của Khoa Ngoại ngữ, Trường Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh, Trung tâm luôn mang lại những buổi học chất lượng cao cho người học. Giảng viên của Trung tâm là những nhà giáo có kỹ năng giảng dạy xuất sắc, được đào tạo ở nhiều quốc gia khác nhau trên thế giới với kinh nghiệm giảng dạy vô cùng phong phú.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                  {FACULTY_MEMBERS.map(member => (
                    <FacultyCard key={member.id} member={member} />
                  ))}
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

export default Faculty;
