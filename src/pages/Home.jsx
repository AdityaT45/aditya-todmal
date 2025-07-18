import { personalInfo } from '../data';
import { ReactTyped } from "react-typed";





export default function Home() {
  const profileImg = personalInfo.profileImage
    ? new URL(`../assets/${personalInfo.profileImage}`, import.meta.url).href
    : 'https://via.placeholder.com/150';

  return (
    <div className="container">
      <div className="row justify-content-center pt-1">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: 150, height: 150, objectFit: 'cover' }}
          />
          <h2>{personalInfo.name}</h2>
          

{/* Typing effect before the first paragraph */}
<p className="lead mt-4">
  <ReactTyped
    strings={["Hello..!", "नमस्कार..!", "नमस्ते..!"]}
    typeSpeed={200}
    backSpeed={50}
    loop
  />
  &nbsp;
  {personalInfo.summary
    .split('\n')[0]
    .split('Aditya Todmal')
    .map((part, i, arr) =>
      i < arr.length - 1 ? (
        <>
          {part}
          <span style={{ color: '#a259ff', fontWeight: 'bold' }}>Aditya Todmal</span>
        </>
      ) : (
        part
      )
    )}
</p>

{/* Remaining paragraphs without typing effect */}
{personalInfo.summary.split('\n').slice(1).map((para, index) => (
  <p className="lead mt-4" key={index}>
    {para.split('Aditya Todmal').map((part, i, arr) =>
      i < arr.length - 1 ? (
        <>
          {part}
          <span style={{ color: '#a259ff', fontWeight: 'bold' }}>Aditya Todmal</span>
        </>
      ) : (
        part
      )
    )}
  </p>
))}



          <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
            {personalInfo.social.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {s.name}
              </a>
            ))}
          </div>
          <div className="mt-2 mb-2 d-flex flex-wrap justify-content-start">
  {personalInfo.hidden.map((h, i) => (
    <a
      key={i}
      href={h.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden-btn"
    >
      {h.name}
    </a>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}
