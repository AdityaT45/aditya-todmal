import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'theme-dark' : 'theme-light';
  }, [theme]);

  // Responsive scroll: only allow scroll on mobile/tablet, hide scrollbar
  useEffect(() => {
    const setScroll = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflowY = 'auto';
        document.body.style.scrollbarWidth = 'none';
      } else {
        document.body.style.overflowY = 'hidden';
      }
    };
    setScroll();
    window.addEventListener('resize', setScroll);
    return () => window.removeEventListener('resize', setScroll);
  }, []);

  return (
    <Router>
      <div className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ paddingTop: '56px', paddingBottom: '56px', height: '100vh', overflow: 'hidden' }}>

        <Header onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} theme={theme} />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ paddingTop: '56px', paddingBottom: '56px', height: '100vh', overflow: 'hidden' }}>
  <div className="container scrollable-container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
</div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
