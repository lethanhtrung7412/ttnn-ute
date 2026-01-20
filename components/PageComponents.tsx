
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Clock, Eye, ChevronRight, CheckCircle, 
  MapPin, Phone, Mail, Facebook, ChevronsRight
} from 'lucide-react';
import { NewsItem, FacultyMember, LearningResource } from '../types';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <div className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 py-4 shadow-sm">
    <div className="container mx-auto px-4">
      <div className="flex items-center text-sm text-text-sub-light dark:text-text-sub-dark">
        <Link to="/" className="hover:text-primary">Trang chủ</Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight size={12} className="mx-2" />
            {item.path ? (
              <Link to={item.path} className="hover:text-primary">{item.label}</Link>
            ) : (
              <span className="text-primary font-medium">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => (
  <div className="bg-white dark:bg-surface-dark rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group border border-gray-100 dark:border-gray-700">
    <div className="h-48 overflow-hidden">
      <img 
        src={news.image} 
        alt={news.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
      />
    </div>
    <div className="p-5 flex flex-col h-full">
      <span className={`text-xs font-bold mb-2 uppercase ${news.color || 'text-primary'}`}>{news.category}</span>
      <h3 className="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-3 line-clamp-2">
        {news.title}
      </h3>
      <p className="text-sm text-text-sub-light dark:text-text-sub-dark mb-4 line-clamp-3 flex-grow">
        {news.summary}
      </p>
      <Link to={`/news/${news.id}`} className="text-secondary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto">
        Xem chi tiết <ArrowRight size={14} />
      </Link>
    </div>
  </div>
);

export const OtherNewsItem: React.FC<{ news: NewsItem }> = ({ news }) => (
  <div className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0">
    <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary text-center">
      <span className="text-xs font-bold uppercase">Tháng 1</span>
      <span className="text-xl font-bold">{news.category}</span>
    </div>
    <div>
      <h4 className="font-semibold text-text-main-light dark:text-text-main-dark hover:text-primary transition cursor-pointer">
        {news.title}
      </h4>
      <div className="flex items-center gap-4 mt-2 text-xs text-text-sub-light dark:text-text-sub-dark">
        <span className="flex items-center gap-1"><Clock size={12} /> {news.date}</span>
        <span className="flex items-center gap-1"><Eye size={12} /> {news.views} lần xem</span>
      </div>
    </div>
  </div>
);

export const FacultyCard: React.FC<{ member: FacultyMember }> = ({ member }) => (
  <div className="group bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
    <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
    </div>
    <div className="p-3 text-center">
      <h3 className="font-bold text-sm text-primary dark:text-blue-400 mb-1 group-hover:text-secondary transition line-clamp-1">{member.name}</h3>
      <p className="text-xs text-text-sub-light dark:text-text-sub-dark line-clamp-2 min-h-[2.5em]">
        {member.title}
      </p>
    </div>
  </div>
);

export const ResourceCard: React.FC<{ resource: LearningResource }> = ({ resource }) => (
  <article className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition group">
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${resource.categoryColor}`}>
          {resource.category}
        </span>
        <span className="text-xs text-text-sub-light dark:text-text-sub-dark">{resource.date}</span>
      </div>
      <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4 group-hover:text-secondary transition">
        {resource.title}
      </h2>
      <p className="text-text-main-light dark:text-text-main-dark leading-relaxed mb-6 line-clamp-3">
        {resource.summary}
      </p>
      <Link to={`/resources/${resource.slug}`} className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all">
        Xem chi tiết <ChevronsRight size={16} className="ml-1" />
      </Link>
    </div>
  </article>
);

export const SchematicMap: React.FC = () => (
  <div className="bg-[#d9e8fb] dark:bg-slate-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 relative schematic-map overflow-hidden h-[450px]">
    <div className="absolute left-10 top-0 bottom-0 w-24 bg-white dark:bg-slate-800 border-x border-blue-100 flex items-center justify-center">
      <span className="[writing-mode:vertical-lr] rotate-180 text-sm font-medium text-slate-600 dark:text-slate-400">Xa lộ Hà Nội</span>
    </div>
    <div className="absolute left-[3.25rem] top-32 text-center text-xs font-bold text-slate-800 dark:text-white z-10">
        Ngã 4<br/>Thủ Đức
    </div>
    <div className="absolute left-0 top-32 right-0 h-24 bg-white dark:bg-slate-800 border-y border-blue-100 flex items-center justify-center">
      <span className="ml-40 text-sm font-medium text-slate-600 dark:text-slate-400">Đường Võ Văn Ngân</span>
    </div>
    <div className="absolute right-10 top-32 flex items-center gap-4 h-24 z-10">
      <div className="text-primary flex items-center">
        <ArrowRight size={32} />
      </div>
      <div className="border border-slate-400 bg-white px-4 py-2 text-sm font-bold shadow-sm">
          Chợ<br/>Thủ Đức
      </div>
    </div>
    <div className="absolute left-1/3 top-[250px] w-2/3 flex flex-col items-start gap-4">
      <div className="flex gap-1 items-start">
        <div className="w-16 h-20 bg-[#c7e5fb] border border-blue-200"></div>
        <div className="w-16 h-20 bg-[#3b82f6] border border-blue-600 relative">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-[#3b82f6]"></div>
        </div>
        <div className="w-24 h-20 bg-[#ffe7d9] border border-orange-100"></div>
      </div>
      <div className="mt-8 ml-[-60px] bg-[#3b82f6] text-white px-8 py-4 rounded-[40px] border-2 border-orange-700 shadow-xl text-center z-20">
        <p className="font-bold text-lg leading-tight">Trung Tâm<br/>Ngoại ngữ</p>
      </div>
      <div className="absolute right-10 top-16 bg-[#deeaf7] dark:bg-slate-800 border border-blue-300 dark:border-slate-600 p-6 w-80 text-center shadow-sm">
        <p className="text-primary dark:text-blue-400 font-bold">Trường Đại học<br/>Sư phạm Kỹ thuật<br/>Thành phố Hồ Chí Minh</p>
      </div>
    </div>
  </div>
);

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <div className="text-sm text-text-sub-light dark:text-text-sub-dark">{children}</div>
    </div>
  </div>
);

interface CourseSidebarBtnProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

export const CourseSidebarBtn: React.FC<CourseSidebarBtnProps> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-6 py-4 border-b border-gray-50 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition flex items-center gap-3 ${
      active ? 'bg-blue-50 dark:bg-gray-700 border-l-4 border-l-primary' : ''
    }`}
  >
    <div className={`text-lg ${active ? 'text-primary' : 'text-gray-400'}`}>{icon}</div>
    <span className={`font-medium uppercase text-xs ${active ? 'text-primary' : 'text-text-main-light dark:text-text-main-dark'}`}>{label}</span>
  </button>
);

interface CourseHeroProps {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
}

export const CourseHero: React.FC<CourseHeroProps> = ({ image, badge, title, subtitle }) => (
  <div className="relative h-[300px] md:h-[350px]">
    <img alt={title} className="w-full h-full object-cover" src={image} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 md:p-12">
      <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-4 uppercase tracking-wider">{badge}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-2 leading-tight">{title}</h2>
      <p className="text-blue-100 max-w-2xl text-sm md:text-base">{subtitle}</p>
    </div>
  </div>
);

interface CourseStatsProps {
  credits: string;
  duration: string;
  level: string;
}

export const CourseStats: React.FC<CourseStatsProps> = ({ credits, duration, level }) => (
  <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center">
      <p className="text-xs font-bold text-primary mb-1 uppercase">Tín chỉ</p>
      <p className="text-xl font-bold">{credits}</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center">
      <p className="text-xs font-bold text-primary mb-1 uppercase">Thời lượng</p>
      <p className="text-xl font-bold">{duration}</p>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-center">
      <p className="text-xs font-bold text-primary mb-1 uppercase">Mục tiêu</p>
      <p className="text-xl font-bold">{level}</p>
    </div>
  </div>
);
