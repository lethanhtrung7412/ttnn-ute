import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { 
  PhoneCall, MessageCircle, Mail, Menu, Home, ChevronDown, MapPin, 
  CalendarCheck, Facebook, Globe, Book, GraduationCap, Moon, Sun, Search, 
  ChevronRight, X, ChevronUp, Video
} from 'lucide-react';
import { ResourceTag } from '../types';

const { Link: RouterLink, useLocation } = ReactRouterDOM;

// Wrapper for Link to handle external links or placeholders if needed, 
// though mostly we use it to wrap RouterLink for consistency with previous API
const Link: React.FC<{ to: string; className?: string; children: React.ReactNode; onClick?: () => void }> = ({ to, className, children, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    e.preventDefault();
  };

  if (to === '#' || to === '') {
    return (
      <a href="#" className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={to} className={className} onClick={handleClick}>
      {children}
    </RouterLink>
  );
};

export const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubMenu = (name: string) => {
    if (expandedMobileMenu === name) {
      setExpandedMobileMenu(null);
    } else {
      setExpandedMobileMenu(name);
    }
  };

  const isActive = (path: string) => {
    if (path === '#') return false;
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isParentActive = (item: any) => {
    if (item.path !== '#' && isActive(item.path)) return true;
    if (item.subMenu && item.subMenu.length > 0) {
      return item.subMenu.some((sub: any) => isActive(sub.path));
    }
    return false;
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
    { 
      name: "HỌC LIỆU", 
      path: "#", 
      subMenu: [
        { name: "Tài liệu tham khảo", path: "/learning-resources" },
      ] 
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 relative z-[10]">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-4 mb-4 md:mb-0">
            <img 
              alt="Logo HCMUTE" 
              className="h-12 md:h-16 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASgQhjezd45G4yBnpKCMWp4L8BMeh0JwIilgPtKkkHcEP-dW-uNMN6zKQqYdXR6rJWLbQH6QuRh8wWMgaDIZ5YQpOZVmhUEW2TLhrvMLqHFzAWYSBRPbB1khTydXu_hu9R4uWw9nF78UGHHagVpavDyGazcEZ8AFr7bV8uoyQBwH5pcdacSF1M10n50pz-XxIzE3WDmmtck_k9XTqZ3vzv1-ZDGY4_cvm6OOm9ixi_zTZPLLXdgkJcj-4lY_0jZ-j6t_CGpE-TMw3s" 
            />
            <div className="text-center md:text-left">
              <h1 className="text-[10px] md:text-xs font-bold text-primary tracking-wider uppercase">Trường Đại Học Sư Phạm Kỹ Thuật TP. Hồ Chí Minh</h1>
              <h2 className="text-xl md:text-2xl font-bold text-secondary dark:text-red-400 uppercase tracking-tight">Trung Tâm Ngoại Ngữ</h2>
            </div>
          </Link>
          <div className="hidden md:flex flex-col items-end text-sm text-text-sub-light dark:text-text-sub-dark space-y-1">
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
      <nav className="bg-primary sticky top-0 z-[100] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-3 hover:bg-white/10 rounded transition" 
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-1 text-white text-sm font-medium">
              <li>
                <Link 
                  to="/" 
                  className={`block px-4 py-4 hover:bg-white/10 transition flex items-center gap-1 ${isActive('/') ? 'bg-white/20' : ''}`}
                >
                  <Home size={18} />
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link 
                    to={item.path} 
                    className={`block px-4 py-4 hover:bg-white/10 transition flex items-center gap-1 ${isParentActive(item) ? 'bg-white/20 font-bold' : ''}`}
                  >
                    {item.name} {(item.subMenu && item.subMenu.length > 0) && <ChevronDown size={14} />}
                  </Link>
                  {/* Desktop Dropdown Menu */}
                  {item.subMenu && item.subMenu.length > 0 && (
                    <ul className="absolute left-0 top-full w-60 bg-white dark:bg-surface-dark shadow-xl rounded-b-md invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 border-t-4 border-secondary">
                      {item.subMenu.map((sub, index) => (
                        <li key={index}>
                          <Link
                            to={sub.path}
                            className={`block px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-blue-400 border-b border-gray-100 dark:border-gray-700 last:border-0 text-sm font-normal ${isActive(sub.path) ? 'text-primary font-bold bg-blue-50 dark:bg-gray-800' : 'text-text-main-light dark:text-text-main-dark'}`}
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
                  className={`block px-4 py-4 hover:bg-white/10 transition flex items-center gap-1 ${isActive('/contact') ? 'bg-white/20 font-bold' : ''}`}
                >
                  <MapPin size={16} /> LIÊN HỆ
                </Link>
              </li>
            </ul>

            <button 
              className="text-white p-2 hover:bg-white/10 rounded-full transition" 
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white dark:bg-zinc-950 text-gray-800 dark:text-white flex flex-col animate-fade-in-up">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-zinc-900">
             <div className="flex items-center gap-2">
                <span className="font-bold text-lg uppercase tracking-wider text-primary">Menu</span>
             </div>
             <button 
                onClick={toggleMobileMenu}
                className="p-2 bg-gray-200 dark:bg-white/10 rounded-full hover:bg-gray-300 dark:hover:bg-white/20 transition text-gray-600 dark:text-white"
             >
                <X size={24} />
             </button>
          </div>
          
          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
             <ul className="flex flex-col text-sm font-medium">
                <li>
                  <Link 
                    to="/" 
                    className={`block px-6 py-5 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition flex items-center gap-3 text-base ${isActive('/') ? 'text-primary bg-blue-50 dark:bg-white/5' : 'text-gray-600 dark:text-gray-300'}`}
                    onClick={toggleMobileMenu}
                  >
                    <Home size={20} className={isActive('/') ? "text-primary" : "text-gray-400"} /> Trang chủ
                  </Link>
                </li>
                {navItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-100 dark:border-white/5">
                    <div 
                      className={`flex justify-between items-center px-6 py-5 hover:bg-gray-50 dark:hover:bg-white/5 transition cursor-pointer text-base ${isParentActive(item) ? 'text-primary dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}
                      onClick={() => {
                        if (item.subMenu && item.subMenu.length > 0) {
                          toggleMobileSubMenu(item.name);
                        }
                      }}
                    >
                      <span className="flex items-center gap-3">
                         <span className={isParentActive(item) ? "text-primary" : ""}>{item.name}</span>
                      </span>
                      {item.subMenu && item.subMenu.length > 0 && (
                        expandedMobileMenu === item.name ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {item.subMenu && item.subMenu.length > 0 && expandedMobileMenu === item.name && (
                      <ul className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-100 dark:border-white/5">
                        {item.subMenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={sub.path}
                              className={`block pl-10 pr-6 py-4 hover:text-primary dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition text-sm border-l-4 ${isActive(sub.path) ? 'border-primary text-primary dark:text-white bg-blue-50 dark:bg-white/5' : 'border-transparent text-gray-500 dark:text-gray-400'}`}
                              onClick={toggleMobileMenu}
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
                    className={`block px-6 py-5 hover:bg-gray-50 dark:hover:bg-white/5 transition flex items-center gap-3 text-base ${isActive('/contact') ? 'text-primary bg-blue-50 dark:bg-white/5' : 'text-gray-600 dark:text-gray-300'}`}
                    onClick={toggleMobileMenu}
                  >
                    <MapPin size={20} className={isActive('/contact') ? "text-primary" : "text-gray-400"} /> LIÊN HỆ
                  </Link>
                </li>
             </ul>
          </div>

          {/* Menu Footer (Contact Info) */}
          <div className="p-6 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-zinc-900">
             <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-3">
                   <PhoneCall size={16} className="text-primary" />
                   <span>Hotline: 0765 080 182</span>
                </div>
                <div className="flex items-center gap-3">
                   <Mail size={16} className="text-primary" />
                   <span>ttnn@hcmute.edu.vn</span>
                </div>
             </div>
             <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
                 <span className="text-xs text-gray-500">© 2025 HCMUTE</span>
                 <div className="flex gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-white transition"><Facebook size={18} /></a>
                    <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-white transition"><Globe size={18} /></a>
                 </div>
             </div>
          </div>
        </div>
      )}
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
  tags?: ResourceTag[];
  searchPlaceholder?: string;
  title?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  showQuickNav = false, 
  className = "", 
  isSticky = true,
  tags,
  searchPlaceholder = "Nhập từ khóa...",
  title = "Tìm kiếm"
}) => {
  return (
    <div className={`space-y-8 ${className}`}>
      <div className={`bg-white dark:bg-surface-dark p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 ${isSticky ? 'lg:sticky lg:top-24' : ''}`}>
        <h3 className="font-bold text-lg mb-4 text-text-main-light dark:text-text-main-dark flex items-center gap-2 border-l-4 border-primary pl-3">
          {title}
        </h3>
        <div className="relative mb-8">
          <input 
            type="text" 
            placeholder={searchPlaceholder}
            className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white transition shadow-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-md hover:bg-blue-700 transition shadow-sm">
            <Search size={16} />
          </button>
        </div>

        {tags && tags.length > 0 && (
          <>
             <h3 className="font-bold text-lg mb-4 text-text-main-light dark:text-text-main-dark border-l-4 border-primary pl-3">Chủ đề phổ biến</h3>
             <div className="flex flex-wrap gap-2 mb-8">
               {tags.map((tag, idx) => (
                 <Link 
                  key={idx} 
                  to="#" 
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-md text-xs font-medium transition text-text-sub-light dark:text-text-sub-dark"
                >
                  {tag.label} {tag.count !== undefined && `(${tag.count})`}
                 </Link>
               ))}
             </div>
          </>
        )}

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

        <h3 className="font-bold text-lg mb-4 text-text-main-light dark:text-text-main-dark border-l-4 border-primary pl-3">Liên kết nhanh</h3>
        <ul className="space-y-3">
          {[
            { label: "Xem lịch học", icon: <CalendarCheck size={18} /> },
            { label: "Facebook Fanpage", icon: <Facebook size={18} /> },
            { label: "Thư viện", icon: <Book size={18} /> },
            { label: "Trường ĐH SPKT TPHCM", icon: <Globe size={18} /> },
          ].map((item, idx) => (
            <li key={idx}>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-gray-700/50 hover:bg-blue-100 dark:hover:bg-gray-700 transition group border border-transparent hover:border-blue-200 dark:hover:border-gray-600">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
            <span className="text-white font-bold text-base leading-tight">Học bổng Tiếng Anh 2026</span>
            <a href="#" className="text-[10px] text-yellow-400 font-bold uppercase mt-1 tracking-widest">Khám phá ngay →</a>
          </div>
        </div>
      </div>
    </div>
  );
};