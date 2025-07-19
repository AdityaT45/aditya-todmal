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
import BottomNav from './BottomNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Step 5: Import VisitorTracker
import VisitorTracker from './VisitorTracker';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'theme-dark' : 'theme-light';
  }, [theme]);

  return (
    <Router>
      {/* Add VisitorTracker component here */}
      <VisitorTracker />

      <Header onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} theme={theme} />
      
      <div 
        className="flex-grow-1 d-flex align-items-center justify-content-center" 
        style={{ paddingTop: '56px', paddingBottom: '56px' }}
      >
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
      <BottomNav />
    </Router>
  );
}

export default App;
