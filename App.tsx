
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/LayoutComponents';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Faculty from './pages/Faculty';
import Overview from './pages/Overview';
import Message from './pages/Message';
import EnglishCommunication from './pages/EnglishCommunication';
import IeltsPreparation from './pages/IeltsPreparation';
import ToeicPreparation from './pages/ToeicPreparation';
import VstepPreparation from './pages/VstepPreparation';
import Japanese from './pages/Japanese';
import Chinese from './pages/Chinese';
import LearningResources from './pages/LearningResources';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-body">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/message" element={<Message />} />
            <Route path="/english-communication" element={<EnglishCommunication />} />
            <Route path="/ielts" element={<IeltsPreparation />} />
            <Route path="/toeic" element={<ToeicPreparation />} />
            <Route path="/vstep" element={<VstepPreparation />} />
            <Route path="/japanese" element={<Japanese />} />
            <Route path="/chinese" element={<Chinese />} />
            <Route path="/learning-resources" element={<LearningResources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
