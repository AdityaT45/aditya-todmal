import { useState, useRef } from 'react';
import { projects } from '../data';
import Swal from 'sweetalert2';


const categories = [
  'MERN STACK',
  'PHP PROJECT',
  'MOBILE APPS',
  'UI DESIGN',
];

export default function Projects() {
  const [selected, setSelected] = useState(categories[0]);
  const [expanded, setExpanded] = useState({});
  const [blinkUiDesign, setBlinkUiDesign] = useState(false);
  const blinkTimeoutRef = useRef(null);
  const filtered = projects.filter(p => p.category === selected);

  const projectRows = [];
  for (let i = 0; i < filtered.length; i += 2) {
    const row = [filtered[i]];
    if (filtered[i + 1]) row.push(filtered[i + 1]);
    else row.push(null);
    projectRows.push(row);
  }

  const toggleExpand = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
      <h2 className="mb-4 text-center">Projects</h2>
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group w-100 project-btn-group flex-wrap" style={{ maxWidth: 900 }} role="group">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              className={`btn project-btn${selected === cat ? ' active' : ''}${cat === 'UI DESIGN' && blinkUiDesign ? ' blink' : ''}`}
              onClick={() => setSelected(cat)}
              style={{
                flex: '1 1 auto',
                whiteSpace: 'normal',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                fontSize: '0.8rem',
                padding: '0.4rem 0.6rem',
                wordBreak: 'break-word',
                minWidth: 0,
                maxWidth: '100%',
                lineHeight: 1.2,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {projectRows.map((row, rowIdx) => (
        <div className="row g-4 d-flex align-items-stretch justify-content-center mb-4" key={rowIdx}>
          {row.map((project, colIdx) => (
            project ? (
              <div className="col-12 col-md-6 d-flex align-items-stretch justify-content-center" key={colIdx}>
                <div
                  className="card custom-card h-100 d-flex flex-row"
                  style={{
                    height: window.innerWidth < 768 ? 'auto' : 'clamp(220px, 32vw, 320px)',
                    minHeight: 180,
                    marginBottom: 30,
                    width: '100%',
                    overflow: 'hidden',
                    minWidth: window.innerWidth < 768 ? 'unset' : 340,
                    maxWidth: window.innerWidth < 768 ? 'unset' : 540,
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                  }}
                >
                  <div style={{
                    width: window.innerWidth < 768 ? '100%' : '55%',
                    minWidth: window.innerWidth < 768 ? '100%' : 230,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <ProjectCarousel images={project.images} name={project.name} isMobile={window.innerWidth < 768} />
                  </div>
                  <div style={{ width: window.innerWidth < 768 ? '100%' : '45%' }} className="flex-grow-1 p-2 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-bold mb-2" style={{ color: '#fff', fontSize: window.innerWidth < 768 ? '1rem' : undefined }}>{project.name}</h5>
                      <div className="mb-2 d-flex flex-wrap align-items-center justify-content-center gap-2">
                        {project.technologies?.map((tech, j) => (
                          <img
                            key={j}
                            src={`/assets/${tech.icon}`}
                            alt={tech.name}
                            title={tech.name}
                            style={{ width: 20, height: 20, borderRadius: 4 }}
                          />
                        ))}
                      </div>
                      <div className="mb-2" style={{ color: '#fff', fontSize: window.innerWidth < 768 ? '0.8rem' : '0.93rem' }}>
  {expanded[colIdx] ? (
    project.description.join(' ')
  ) : (
    project.description.join(' ').split(' ').slice(0, 12).join(' ') + '...'
  )}
  {project.description.join(' ').split(' ').length > 12 && (
    <span
      onClick={() => toggleExpand(colIdx)}
      style={{
        color: '#a259ff', // use your preferred color
        cursor: 'pointer',
        marginLeft: 6,
        opacity: 1, // set this explicitly
        fontWeight: 500,
      }}
    >
      {expanded[colIdx] ? 'View Less' : 'View More'}
    </span>
  )}
</div>

                    </div>
                    <div className="d-flex gap-2 justify-content-center">
                      <button
                        className="btn btn-primary btn-sm px-1 py-1"
                        style={{ minWidth: '70px', fontSize: window.innerWidth < 768 ? '0.75rem' : '0.9rem' }}
                        onClick={() => {
                          if (!project.live) {
                            Swal.fire({
                              icon: 'info',
                              html: `
                                <div style="font-size: 1rem;">
                                  Only <strong style="color: #a259ff;">UI design</strong> projects are live!
                                </div>
                              `,
                              confirmButtonColor: '#a259ff',
                              width: window.innerWidth < 480 ? '90%' : '400px',
                              customClass: {
                                popup: 'swal2-mobile-font',
                              },
                            });
                        
                            setBlinkUiDesign(true);
                            if (blinkTimeoutRef.current) clearTimeout(blinkTimeoutRef.current);
                            blinkTimeoutRef.current = setTimeout(() => setBlinkUiDesign(false), 2000);
                          } else {
                            window.open(project.live, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        
                        
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i>Live
                      </button>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm px-1 py-1"
                        style={{ minWidth: '70px', fontSize: window.innerWidth < 768 ? '0.75rem' : '0.9rem' }}
                      >
                        <i className="bi bi-github me-1"></i>GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
            // height: '100%',
            objectFit: 'cover',
            transform: zoom && !isMobile ? `scale(2.7) translate(${50 - position.x}%, ${50 - position.y}%)` : 'scale(1)',
            transition: zoom && !isMobile ? 'transform 0.1s' : 'transform 0.3s ease',
            pointerEvents: 'none',
          }}
        />
      </div>
      {images.length > 1 && (
        <div className="d-flex justify-content-center gap-2 mt-2">
          <button
            className="btn btn-sm btn-outline-light px-1 py-0"
            onClick={(e) => {
              e.stopPropagation();
              setIdx(idx === 0 ? images.length - 1 : idx - 1);
            }}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="btn btn-sm btn-outline-light px-1 py-0"
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