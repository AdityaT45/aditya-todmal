import { experience } from '../data';

export default function Experience() {
  return (
    <div>
      <h2 className="mb-4">Experience</h2>
      <div className="row justify-content-center">
        {experience.map((exp, i) => (
          <div className="col-12 mb-4" key={i}>
            <div className="card d-flex flex-row align-items-center p-4" style={{ minHeight: 180, borderRadius: 24, width: '100%', maxWidth: 900, margin: '0 auto', boxShadow: '0 4px 32px 0 #01c3a822, 0 0 0 2px #a259ff33', background: 'rgba(24,18,43,0.7)' }}>
              {/* Left: Company Image */}
              <div className="d-flex align-items-center justify-content-center" style={{ width: 120, minWidth: 100, height: 120, borderRadius: '50%', background: '#18122B', boxShadow: '0 0 8px #a259ff', marginRight: 32 }}>
                <img
                  src={exp.image ? `/assets/${exp.image}` : 'https://via.placeholder.com/80'}
                  alt={exp.company + ' logo'}
                  style={{ width: 70, height: 70, objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              {/* Right: Info */}
              <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center">
                <h4 className="fw-bold mb-2" style={{ color: '#fff' }}>{exp.company}</h4>
                <div className="mb-1" style={{ color: '#a259ff', fontWeight: 500 }}>{exp.role}</div>
                <div className="mb-1" style={{ color: '#fff', opacity: 0.8 }}>{exp.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}   