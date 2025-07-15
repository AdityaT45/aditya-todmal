import { education } from '../data';

export default function Education() {
  return (
    <div>
      <h2 className="mb-4">Education</h2>
      <div className="row">
        {education.map((edu, i) => (
          <div className="col-md-6 mb-4" key={i}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{edu.degree}</h5>
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