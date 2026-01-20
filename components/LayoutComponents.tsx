import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  PhoneCall, MessageCircle, Mail, Menu, Home, ChevronDown, MapPin, 
  CalendarCheck, Facebook, Globe, Book, GraduationCap, Monitor, Languages, 
  Moon, Sun, Search, ArrowRight, Video, Newspaper, ChevronRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { 
      name: "GIỚI THIỆU", 
      path: "/overview", 
      subMenu: [
        { name: "Thông điệp giáo dục", path: "/message" },
        { name: "Tổng quan trung tâm", path: "/overview" },
        { name: "Đội ngũ giảng viên", path: "/faculty" },
      ]
    },
    { 
      name: "TIẾNG ANH", 
      path: "#", 
      subMenu: [
        { name: "Kỹ Năng Giao Tiếp", path: "/english-communication" },
        { name: "Luyện thi IELTS", path: "/ielts" },
        { name: "Luyện thi TOEIC", path: "/toeic" },
        { name: "Luyện thi VSTEP", path: "/vstep" },
      ]
    },
    { 
      name: "TRUNG - NHẬT", 
      path: "#", 
      subMenu: [
        { name: "Tiếng Nhật", path: "/japanese" },
        { name: "Tiếng Trung", path: "/chinese" },
      ] 
    },
    { name: "LỊCH HỌC", path: "#", subMenu: [] },
    { name: "HỌC LIỆU", path: "#", subMenu: [] },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-4 mb-4 md:mb-0">
            <img 
              alt="Logo HCMUTE" 
              className="h-16 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASgQhjezd45G4yBnpKCMWp4L8BMeh0JwIilgPtKkkHcEP-dW-uNMN6zKQqYdXR6rJWLbQH6QuRh8wWMgaDIZ5YQpOZVmhUEW2TLhrvMLqHFzAWYSBRPbB1khTydXu_hu9R4uWw9nF78UGHHagVpavDyGazcEZ8AFr7bV8uoyQBwH5pcdacSF1M10n50pz-XxIzE3WDmmtck_k9XTqZ3vzv1-ZDGY4_cvm6OOm9ixi_zTZPLLXdgkJcj-4lY_0jZ-j6t_CGpE-TMw3s" 
            />
            <div>
              <h1 className="text-xs font-bold text-primary tracking-wider uppercase">Trường Đại Học Sư Phạm Kỹ Thuật TP. Hồ Chí Minh</h1>
              <h2 className="text-2xl font-bold text-secondary dark:text-red-400 uppercase tracking-tight">Trung Tâm Ngoại Ngữ</h2>
            </div>
          </Link>
          <div className="flex flex-col items-end text-sm text-text-sub-light dark:text-text-sub-dark space-y-1">
            <div className="flex items-center gap-2">
              <PhoneCall size={16} className="text-primary" />
              <span>0765 080 182</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-primary" />
              <span>Zalo Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a href="mailto:ttnn@hcmute.edu.vn" className="hover:text-primary transition">ttnn@hcmute.edu.vn</a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-primary sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button className="md:hidden text-white p-3">
              <Menu size={24} />
            </button>
            <ul className="hidden md:flex space-x-1 text-white text-sm font-medium">
              <li>
                <Link to="/" className={`block px-4 py-4 hover:bg-blue-800 transition flex items-center gap-1 ${isActive('/') ? 'bg-blue-800' : ''}`}>
                  <Home size={18} />
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link 
                    to={item.path} 
                    className={`block px-4 py-4 hover:bg-blue-800 transition flex items-center gap-1 ${isActive(item.path) || (item.subMenu && item.subMenu.some(sub => isActive(sub.path))) ? 'bg-blue-800' : ''}`}
                  >
                    {item.name} {(item.subMenu && item.subMenu.length > 0 || item.name !== "GIỚI THIỆU") && <ChevronDown size={14} />}
                  </Link>
                  {/* Dropdown Menu */}
                  {item.subMenu && item.subMenu.length > 0 && (
                    <ul className="absolute left-0 top-full w-60 bg-white dark:bg-surface-dark shadow-xl rounded-b-md invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 border-t-4 border-secondary">
                      {item.subMenu.map((sub, index) => (
                        <li key={index}>
                          <Link
                            to={sub.path}
                            className="block px-4 py-3 text-text-main-light dark:text-text-main-dark hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-blue-400 border-b border-gray-100 dark:border-gray-700 last:border-0 text-sm font-normal"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link 
                  to="/contact" 
                  className={`block px-4 py-4 hover:bg-blue-800 transition flex items-center gap-1 ${isActive('/contact') ? 'bg-blue-800' : ''}`}
                >
                  <MapPin size={16} /> LIÊN HỆ
                </Link>
              </li>
            </ul>
            <button 
              className="text-white p-2 hover:bg-blue-800 rounded-full transition" 
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <span className="font-bold text-lg uppercase tracking-wider">Trung Tâm Ngoại Ngữ</span>
            </div>
            <p className="text-sm text-blue-100 mb-4 leading-relaxed">
              Đào tạo và cung cấp các khóa học ngoại ngữ chất lượng cao, đáp ứng chuẩn đầu ra cho sinh viên và nhu cầu của xã hội.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition">
                <Video size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase">Thông tin liên hệ</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Phòng số 10, Khu Dịch vụ Tổng hợp, Cổng Võ Văn Ngân, Số 1 Võ Văn Ngân, Phường Thủ Đức, Thành phố Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall size={16} className="flex-shrink-0" />
                <span>Điện thoại: (028) 3896 3517</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall size={16} className="flex-shrink-0" />
                <span>Hotline/Zalo: 0765 080 182</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>Email: ttnn@hcmute.edu.vn</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase">Đăng ký nhận tin</h4>
            <p className="text-sm text-blue-100 mb-4">Nhận thông báo mới nhất về lịch khai giảng và ưu đãi học phí.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20"
              />
              <button className="px-4 py-2 bg-secondary rounded font-bold hover:bg-red-700 transition">Đăng ký</button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-blue-200">
          <p>Copyright © 2025 Trung tâm Ngoại ngữ | Trường Đại học Sư phạm Kỹ thuật Thành phố Hồ Chí Minh</p>
          <p className="mt-1">Web: ttnn.hcmute.edu.vn | Facebook: fb.me/trungtamngoainguspkt</p>
        </div>
      </div>
    </footer>
  );
};

interface SidebarProps {
  showQuickNav?: boolean;
  className?: string;
  isSticky?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ showQuickNav = false, className = "", isSticky = true }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      <div className={`bg-white dark:bg-surface-dark p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 ${isSticky ? 'sticky top-24' : ''}`}>
        <h3 className="font-bold text-lg mb-4 text-text-main-light dark:text-text-main-dark flex items-center gap-2 border-l-4 border-primary pl-3">
          Tìm kiếm
        </h3>
        <div className="relative mb-8">
          <input 
            type="text" 
            placeholder="Nhập từ khóa..." 
            className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition shadow-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-md hover:bg-blue-700 transition shadow-sm">
            <Search size={16} />
          </button>
        </div>

        {showQuickNav && (
          <>
            <h3 className="font-bold text-lg mb-4 text-text-main-light dark:text-text-main-dark border-l-4 border-primary pl-3">Điều hướng nhanh</h3>
            <nav className="space-y-1 mb-8">
              <Link to="/message" className="block px-4 py-2 text-sm rounded hover:bg-blue-50 dark:hover:bg-gray-700 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition flex items-center justify-between group">
                <span>Thông điệp giáo dục</span>
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
              </Link>
              <Link to="/overview" className="block px-4 py-2 text-sm rounded hover:bg-blue-50 dark:hover:bg-gray-700 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition flex items-center justify-between group">
                <span>Tổng quan trung tâm</span>
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
              </Link>
              <Link to="/faculty" className="block px-4 py-2 text-sm rounded hover:bg-blue-50 dark:hover:bg-gray-700 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition flex items-center justify-between group">
                <span>Đội ngũ giảng viên</span>
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition" />
              </Link>
            </nav>
          </>
        )}

        <h3 className="font-bold text-lg mb-4 text-text-main-light dark:text-text-main-dark border-l-4 border-primary pl-3">Liên kết</h3>
        <ul className="space-y-3">
          {[
            { label: "Xem lịch học", icon: <CalendarCheck size={18} /> },
            { label: "Facebook Fanpage", icon: <Facebook size={18} /> },
            { label: "Khoa Ngoại ngữ", icon: <Languages size={18} /> },
            { label: "TT. Phát triển Ngôn ngữ", icon: <Globe size={18} /> },
            { label: "TT. Tin học", icon: <Monitor size={18} /> },
            { label: "Thư viện", icon: <Book size={18} /> },
            { label: "Trường ĐH SPKT TPHCM", icon: <GraduationCap size={18} /> },
          ].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700/50 hover:bg-blue-100 dark:hover:bg-gray-700 transition group">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary dark:text-blue-300">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-text-main-light dark:text-text-main-dark group-hover:text-primary">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl overflow-hidden shadow-lg relative group h-40">
          <img 
            alt="Promotion" 
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJUx4tntcdEjhjKFsHk1bw5J-EVG5RRMMFiTKZ2Qd0OPf4F8WIAwSRfmgLeABPwOvL572FLrVMDTt5M3Th4awtJ_tiOktUr7tsDQUZXgpLwJDYBVdCW-VbWam0zfVyj8aZaMeukiV7Zy3UKlu-LoIVsPOLGYpcegwk3lxyedK6N3MokLnx8GzNxty8OQnZNKt9gdZlrqak5BqCtyblyqtZxJ2PL8Q1qm7SVUTT1xuykm_YDZZT38KOzFtqvUUvR_naipty-YTR2VXo" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
            <span className="text-white font-bold text-sm">Học bổng Tiếng Anh</span>
            <a href="#" className="text-xs text-yellow-400 font-bold uppercase mt-1">Tìm hiểu thêm →</a>
          </div>
        </div>
      </div>
    </div>
  );
};