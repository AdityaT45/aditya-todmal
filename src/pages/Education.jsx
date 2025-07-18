import { education } from '../data';

export default function Education() {
  return (
    <div className="container">
      <h2 className="mb-4 text-center">Education</h2>
      <div className="row">
        {education.map((edu, i) => (
          <div className="col-12 col-md-6 mb-4" key={i}>
            <div
              className="card h-100 d-flex flex-column align-items-center px-3 py-4"
              style={{
                borderRadius: 20,
                background: 'rgba(24,18,43,0.7)',
                boxShadow: '0 4px 20px rgba(162, 89, 255, 0.2)',
              }}
            >
              {/* Logo */}
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: '50%',
                  background: '#5a5a5a58',
                  // boxShadow: '0 0 8px,
                }}
              >
                <img
                  src={edu.logo ? `/assets/${edu.logo}` : 'https://via.placeholder.com/60'}
                  alt={edu.college + ' logo'}
                  style={{
                    width: 85,
                    height: 85,
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Details */}
              <div className="card-body text-center p-0 px-2">
                <h5 className="card-title mb-1 fs-6 fs-md-5">{edu.degree}</h5>
                <h6 className="card-subtitle mb-2 fs-6 text-muted">{edu.college}</h6>
                {edu.university && <div className="mb-1 fs-6">{edu.university}</div>}
                <div className="mb-1 fs-6">{edu.duration}</div>
                <div className="fw-bold fs-6">{edu.score}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
