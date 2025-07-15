import { projects } from '../data';

export default function Projects() {
  return (
    <div>
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <div className="mb-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="badge bg-info text-dark me-1">{t}</span>
                  ))}
                </div>
                <ul className="text-start">
                  {project.description.map((desc, k) => (
                    <li key={k}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 