import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', icon: 'bi-house', label: 'Home' },
  { to: '/skills', icon: 'bi-lightning-charge', label: 'Skills' },
  { to: '/projects', icon: 'bi-kanban', label: 'Projects' },
  { to: '/experience', icon: 'bi-briefcase', label: 'Experience' },
  { to: '/education', icon: 'bi-mortarboard', label: 'Education' },
  { to: '/contact', icon: 'bi-envelope', label: 'Contact' },
];

export default function BottomNav() {
  const location = useLocation();
  return (
    <nav className="bottom-nav navbar bg-dark d-lg-none fixed-bottom border-top shadow-sm">
      <div className="container-fluid d-flex justify-content-around align-items-center p-0">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`nav-link px-2 py-1 d-flex flex-column align-items-center${location.pathname === item.to ? ' active' : ''}`}
            style={{ fontSize: '1.35rem', color: location.pathname === item.to ? '#a259ff' : '#fff', transition: 'color 0.2s' }}
            aria-label={item.label}
            title={item.label}
          >
            <i className={`bi ${item.icon}`}></i>
          </Link>
        ))}
      </div>
    </nav>
  );
} 