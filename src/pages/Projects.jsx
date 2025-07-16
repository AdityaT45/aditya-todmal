import { useState } from 'react';
import { projects } from '../data';

const categories = [
  'MERN STACK',
  'PHP PROJECT',
  'MOBILE APPS',
  'UI DESIGN',
];

export default function Projects() {
  const [selected, setSelected] = useState(categories[0]);
  const filtered = projects.filter(p => p.category === selected);

  // Always render two columns per row, add placeholder if only one project
  const projectRows = [];
  for (let i = 0; i < filtered.length; i += 2) {
    const row = [filtered[i]];
    if (filtered[i + 1]) {
      row.push(filtered[i + 1]);
    } else {
      row.push(null); // placeholder
    }
    projectRows.push(row);
  }

  return (
    <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
      {/* Button group for categories */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group w-100 project-btn-group" style={{ maxWidth: 900 }} role="group">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              className={`btn project-btn${selected === cat ? ' active' : ''}`}
              onClick={() => setSelected(cat)}
              style={{
                flex: '1 1 0',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                fontSize: '0.875rem',
                padding: '0.5rem 0.75rem',
                minWidth: 0,
                maxWidth: '100%',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/* Projects grid: always two columns per row */}
      {projectRows.map((row, rowIdx) => (
        <div className="row g-4 d-flex align-items-stretch justify-content-center" key={rowIdx}>
          {row.map((project, colIdx) => (
            project ? (
              <div
                className="col-12 col-md-6 d-flex align-items-stretch justify-content-center"
                key={colIdx}
              >
                <div
                  className="card h-100 d-flex flex-row"
                  style={{
                    height: 'clamp(220px, 32vw, 320px)',
                    minHeight: 180,
                    marginBottom: 30,
                    width: '100%',
                    background: 'rgba(24,18,43,0.7)',
                    boxShadow: '0 4px 32px 0 #01c3a822, 0 0 0 2px #a259ff33',
                    padding: '1rem',
                    borderRadius: 20,
                    overflow: 'hidden',
                    minWidth: window.innerWidth < 768 ? 'unset' : 340,
                    maxWidth: window.innerWidth < 768 ? 'unset' : 540,
                  }}
                >
                  {/* Left: Image carousel */}
                  <div style={{
                    width: window.innerWidth < 768 ? '100px' : '55%',
                    minWidth: window.innerWidth < 768 ? 80 : 230,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <ProjectCarousel images={project.images} name={project.name} isMobile={window.innerWidth < 768} />
                  </div>
                  {/* Right: Details */}
                  <div style={{ width: window.innerWidth < 768 ? 'calc(100% - 100px)' : '45%' }} className="flex-grow-1 p-1 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-bold mb-3" style={{ color: '#fff', fontSize: window.innerWidth < 768 ? '1.1rem' : undefined }}>{project.name}</h5>
                      <div className="mb-3 d-flex flex-wrap align-items-center justify-content-center gap-3">
                        {project.technologies && project.technologies.map((tech, j) => (
                          <img
                            key={j}
                            src={`/assets/${tech.icon}`}
                            alt={tech.name}
                            title={tech.name}
                            style={{ width: 24, height: 24, borderRadius: 6 }}
                          />
                        ))}
                      </div>
                      <div className="mb-3" style={{ color: '#fff', fontSize: window.innerWidth < 768 ? '0.9rem' : '0.93rem', opacity: 0.85 }}>
                        {project.description && project.description.slice(0, 2).map((line, k) => (
                          <div key={k}>{line}</div>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm px-2 py-1"
                        style={{ minWidth: '80px', fontSize: window.innerWidth < 768 ? '0.9rem' : undefined }}
                      >
                        <i className="bi bi-github me-1"></i>GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm px-2 py-1"
                        style={{ minWidth: '80px', fontSize: window.innerWidth < 768 ? '0.9rem' : undefined }}
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i>Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Placeholder for consistent spacing, hidden on mobile
              <div className="col-12 col-md-6 d-none d-md-flex align-items-stretch justify-content-center" style={{ visibility: 'hidden' }} key={colIdx}>
                <div className="card project-placeholder-card w-100 h-100" style={{ background: 'transparent', border: 'none', boxShadow: 'none', minHeight: 180, maxHeight: 320, minWidth: 340 }}></div>
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
}

function ProjectCarousel({ images, name, isMobile }) {
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (!images || images.length === 0) return null;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div style={{ width: '100%' }}>
      <div
        className="zoom-container"
        style={{
          height: isMobile ? 120 : 235,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={`/assets/${images[idx]}`}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: zoom && !isMobile
              ? `scale(2.7) translate(${50 - position.x}%, ${50 - position.y}%)`
              : 'scale(1)',
            transition: zoom && !isMobile ? 'transform 0.1s' : 'transform 0.3s ease',
            pointerEvents: 'none',
          }}
        />
      </div>
      {images.length > 1 && (
        <div className="d-flex justify-content-center gap-2 mt-2">
          <button
            className="btn btn-sm btn-outline-light"
            onClick={(e) => {
              e.stopPropagation();
              setIdx(idx === 0 ? images.length - 1 : idx - 1);
            }}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-light"
            onClick={(e) => {
              e.stopPropagation();
              setIdx(idx === images.length - 1 ? 0 : idx + 1);
            }}
            aria-label="Next image"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}
