import React from 'react';
import { ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';
import { NEWS_FEATURED, NEWS_OTHER } from '../constants';
import { NewsCard, OtherNewsItem } from '../components/PageComponents';
import { Sidebar } from '../components/LayoutComponents';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img 
          alt="Students on campus" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4M5PnhhyMoHICrYGILxSbWdwuwPg76L_cRbAz52Kl4tJ1rygeEpzKlBzvsPkW8LSpM_-9_7keBJkLpO5f8F08yk7cqOJf4Wd9WSh-uaGUN6ZUfIaaepUaheZ0GJC5BgLajIhAGvj5lLer4EWwCfxNlP75cQtU1PDD6IKw-MeB-e8jPqab-lLDc6frnJvj4C1BdOhGVYxZjr5raBCL1HbO-_u694g1lK0fKwBOL1vt1Q0WsJ2p8wClClrtNSbTM_F2k5odpSspcfk" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent dark:from-gray-900/95 dark:to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
          <div className="max-w-2xl text-white space-y-6 animate-fade-in-up">
            <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs font-bold tracking-wider uppercase">Thông báo mới nhất</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Tuyển sinh các lớp ngoại ngữ đợt tháng 1/2026</h1>
            <p className="text-lg md:text-xl text-blue-100 opacity-90">
              Cơ hội nâng cao năng lực ngoại ngữ Tiếng Anh, Trung, Đức, Nhật, Pháp cho sinh viên và người đi làm. Đăng ký ngay để nhận ưu đãi.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="px-8 py-3 bg-white text-primary font-bold rounded shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                Đăng ký ngay
              </a>
              <a href="#" className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-primary transition">
                Xem chi tiết
              </a>
            </div>
          </div>
        </div>
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition">
          <ChevronLeft size={24} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-6 flex items-center gap-2">
                <Newspaper size={24} /> Tin Tức Nổi Bật
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {NEWS_FEATURED.map(news => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
                Tin Tức Khác
              </h3>
              <div className="space-y-4">
                {NEWS_OTHER.map(news => (
                  <OtherNewsItem key={news.id} news={news} />
                ))}
              </div>
              <div className="mt-8 flex justify-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 dark:bg-gray-700 text-text-main-light dark:text-text-main-dark hover:bg-gray-300 transition text-sm">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 dark:bg-gray-700 text-text-main-light dark:text-text-main-dark hover:bg-gray-300 transition text-sm">3</button>
                <button className="px-3 h-8 flex items-center justify-center rounded bg-gray-200 dark:bg-gray-700 text-text-main-light dark:text-text-main-dark hover:bg-gray-300 transition text-sm">Trang kế</button>
              </div>
            </div>
          </div>
          <Sidebar className="lg:w-1/4" />
        </div>
      </div>
    </>
  );
};

export default Home;
