import { experience } from '../data';

export default function Experience() {
  return (
    <div className="container">
      <h2 className="mb-4 text-center">Experience</h2>
      <div className="row justify-content-center">
        {experience.map((exp, i) => (
          <div className="col-12 mb-4" key={i}>
            <div
              className="experience-card d-flex flex-column flex-md-row align-items-center"
            >
              {/* Left: Company Image */}
              <div className="experience-img d-flex align-items-center justify-content-center mb-2 mb-md-0">
                <img
                  src={exp.image ? `/assets/${exp.image}` : 'https://via.placeholder.com/80'}
                  alt={exp.company + ' logo'}
                  className="experience-logo"
                />
              </div>

              {/* Right: Info */}
              <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center">
                <h4 className="fw-bold mb-2 experience-company">{exp.company}</h4>
                <div className="mb-1 experience-role">{exp.role}</div>
                <div className="mb-1 experience-time">{exp.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
