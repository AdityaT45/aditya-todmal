import { personalInfo } from '../data';

export default function Home() {
  const profileImg = personalInfo.profileImage
    ? new URL(`../assets/${personalInfo.profileImage}`, import.meta.url).href
    : 'https://via.placeholder.com/150';

  return (
    <div className="text-center">
      <img src={profileImg} alt="Profile" className="rounded-circle mb-3" style={{ width: 150, height: 150, objectFit: 'cover' }} />
      <h2>{personalInfo.name}</h2>
      <p className="mb-1">📞 {personalInfo.phone} | 📧 {personalInfo.email}</p>
     
      {personalInfo.summary.split('\n\n').map((para, index) => (
  <p className="lead mt-4" key={index}>{para}</p>
))}
      <div className="mt-4">
        {personalInfo.social.map((s, i) => (
          <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mx-2">
            {s.name}
          </a>
        ))}
      </div>
    </div>
  );
} 