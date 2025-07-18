const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-todmal-3aa486255', icon: 'bi bi-linkedin', alt: 'LinkedIn' },
  { name: 'X', url: 'https://x.com/', icon: 'bi bi-twitter-x', alt: 'X (Twitter)' },
  { name: 'Instagram', url: 'https://www.instagram.com/its_adi_todmal/', icon: 'bi bi-instagram', alt: 'Instagram' },
  { name: 'WhatsApp', url: 'https://wa.me/918275742916', icon: 'bi bi-whatsapp', alt: 'WhatsApp' },
  { name: 'GitHub', url: 'https://github.com/AdityaT45', icon: 'bi bi-github', alt: 'GitHub' }
];

export default function Footer() {
  return (
    <footer className="footer bg-dark text-center py-3 w-100 fixed-bottom d-flex justify-content-between align-items-center">
      <div className="social-icons ms-3">
        {socials.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.alt} title={s.name} className="me-2">
            <i className={s.icon} style={{fontSize: '1rem', color: '#fff'}} aria-hidden="true"></i>
          </a>
        ))}
      </div>
      <div className="me-3">© {new Date().getFullYear()} • Built with React & passion by Aditya T.</div>

    </footer>
  );
} 