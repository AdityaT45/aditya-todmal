import { skills } from '../data';
import { useEffect, useState } from 'react';

function CircularProgress({ value, color }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 900 + Math.random() * 600; // randomize a bit for each
    const startTime = performance.now();
    function animate(now) {
      const elapsed = now - startTime;
      const percent = Math.min(1, elapsed / duration);
      setProgress(Math.floor(percent * value));
      if (percent < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [value]);

  const radius = 30;
  const stroke = 3.5;
  const norm = 2 * Math.PI * radius;
  const offset = norm - (progress / 100) * norm;
  return (
    <svg width={70} height={70}>
      <circle
        cx={35}
        cy={35}
        r={radius}
        stroke="#232526"
        strokeWidth={stroke}
        fill="none"
      />
      <circle
        cx={35}
        cy={35}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={norm}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{transition: 'stroke-dashoffset 0.5s'}}
      />
    </svg>
  );
}

export default function Skills() {
  useEffect(() => {
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(el => {
      if (window.bootstrap) {
        new window.bootstrap.Tooltip(el);
      }
    });
  }, []);

  return (
    <div className="d-flex flex-column gap-4">
      {skills.map((cat, i) => (
        <div
          className="card p-4 mb-3 w-100"
          key={i}
          style={{background: 'rgba(24,18,43,0.7)', borderRadius: 24, boxShadow: '0 4px 32px 0 #01c3a822, 0 0 0 2px #a259ff33'}}
        >
          <div className="d-flex justify-content-center mb-3">
  <h3 className="mb-0 text-center" style={{ color: '#fff' }}>{cat.group}</h3>
</div>

          <div className="d-flex flex-wrap justify-content-center gap-4">
  {cat.items.map((skill, j) => (
    <div
      key={j}
      className="d-flex flex-column align-items-center"
      title={skill.info}
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      style={{ width: 100 }}
    >
      <div className="position-relative" style={{ width: 70, height: 70 }}>
        <CircularProgress value={skill.level} color={skill.color} />
        <img
          src={`/assets/${skill.icon}`}
          alt={skill.name}
          className="position-absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: '#18122B',
            padding: 2,
          }}
        />
      </div>
      <div className="fw-bold mt-2 text-center" style={{ color: '#fff', fontSize: 14 }}>
        {skill.name}
      </div>
    </div>
  ))}
</div>

        </div>
      ))}
    </div>
  );
} 