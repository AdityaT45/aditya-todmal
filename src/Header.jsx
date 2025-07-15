import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ onToggleTheme, theme }) {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100" style={{marginTop:0}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Aditya's Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className={`nav-link${location.pathname==='/'?' active':''}`} to="/">Home</Link></li>
            <li className="nav-item"><Link className={`nav-link${location.pathname==='/skills'?' active':''}`} to="/skills">Skills</Link></li>
            <li className="nav-item"><Link className={`nav-link${location.pathname==='/projects'?' active':''}`} to="/projects">Projects</Link></li>
            <li className="nav-item"><Link className={`nav-link${location.pathname==='/education'?' active':''}`} to="/education">Education</Link></li>
            <li className="nav-item"><Link className={`nav-link${location.pathname==='/experience'?' active':''}`} to="/experience">Experience</Link></li>
            <li className="nav-item"><Link className={`nav-link${location.pathname==='/contact'?' active':''}`} to="/contact">Contact</Link></li>
          </ul>
          <button className="btn btn-outline-light ms-3" onClick={onToggleTheme} title="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
} 