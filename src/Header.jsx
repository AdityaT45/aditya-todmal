import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header({ onToggleTheme, theme }) {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100" style={{marginTop:0}}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand mb-0 h1" to="/">Aditya's Portfolio</Link>

        <div className="d-flex d-lg-none align-items-center">
  <button className="btn btn-outline-light ms-2" onClick={onToggleTheme} title="Toggle theme">
    {theme === 'dark' ? '☀️' : '🌙'}
  </button>
</div>

        
      </div>
      {/* Hide nav links and toggler on mobile/tablet, only show on desktop */}
      <div className="d-none d-lg-flex w-100 justify-content-end align-items-center">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className={`nav-link${location.pathname==='/'?' active':''}`} to="/">Home</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname==='/skills'?' active':''}`} to="/skills">Skills</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname==='/projects'?' active':''}`} to="/projects">Projects</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname==='/experience'?' active':''}`} to="/experience">Experience</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname==='/education'?' active':''}`} to="/education">Education</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname==='/contact'?' active':''}`} to="/contact">Contact</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname==='/contact'?' active':''}`} to="/contact"></Link></li>
        </ul>
        
      </div>
      <div className="d-none d-lg-flex align-items-center">
  <button className="btn btn-outline-light ms-2" onClick={onToggleTheme} title="Toggle theme">
    {theme === 'dark' ? '☀️' : '🌙'}
  </button>
</div>

    </nav>
  );
} 