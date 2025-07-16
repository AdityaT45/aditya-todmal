import { contact } from '../data';

export default function Contact() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
      <h2 className="mb-4">Contact</h2>
      <div className="mb-3 fs-5 text-center">
        {/* Clickable email link */}
        <span className="me-3">
          <i className="bi bi-envelope me-2"></i>
          <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: '#a259ff', textDecoration: 'none' }}
>
  {contact.email}
</a>
        </span>
        <br /><br />

        {/* Clickable WhatsApp link */}
        <span>
          <i className="bi bi-telephone me-2"></i>
          <a
            href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#25D366', textDecoration: 'none' }}
          >
            {contact.phone}
          </a>
        </span>
      </div>
      <div className="mt-4 mb-2 fw-bold fs-5">Use Following Icon to Connect Me on Social Media</div>
      <div className="d-flex gap-4 justify-content-center align-items-center mt-2">
        {contact.social.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
            className="d-flex align-items-center justify-content-center"
            style={{ fontSize: 32, color: '#a259ff', background: '#18122B', borderRadius: '50%', width: 48, height: 48, boxShadow: '0 0 8px #a259ff55', transition: 'background 0.2s, color 0.2s' }}
            onMouseOver={e => e.currentTarget.style.background = '#a259ff'}
            onMouseOut={e => e.currentTarget.style.background = '#18122B'}
          >
            <i className={s.icon} style={{ color: '#fff' }}></i>
          </a>
        ))}
      </div>
    </div>
  );
}