import { education } from '../data';

export default function Education() {
  return (
    <div>
      <h2 className="mb-4">Education</h2>
      <div className="row">
        {education.map((edu, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className="card h-100 d-flex flex-column align-items-center p-4" style={{borderRadius: 20}}>
              <div className="d-flex justify-content-center align-items-center mb-3" style={{width: 70, height: 70, borderRadius: '50%', background: '#18122B', boxShadow: '0 0 8px #a259ff'}}>
                <img
                  src={edu.logo ? `/assets/${edu.logo}` : 'https://via.placeholder.com/60'}
                  alt={edu.college + ' logo'}
                  style={{width: 48, height: 48, objectFit: 'contain', borderRadius: '50%'}}
                />
              </div>
              <div className="card-body text-center p-0">
                <h5 className="card-title mb-1">{edu.degree}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{edu.college}</h6>
                {edu.university && <div className="mb-1">{edu.university}</div>}
                <div className="mb-1">{edu.duration}</div>
                <div className="fw-bold">{edu.score}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 