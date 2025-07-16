export const personalInfo = {
  name: 'Aditya Todmal',
  phone: '+91 8275742916',
  email: 'adityatodmal47@gmail.com',
  profileImage: 'a5.jpg',
 summary: "Hello! I'm Aditya Todmal, a dedicated Full Stack Developer with a strong interest in building practical and efficient web and mobile applications. I specialize in the MERN stack and have hands-on experience with MySQL, MongoDB, and React Native.\n\nI enjoy solving real-world problems through code and continuously improving my development skills. Currently, I'm exploring tools like Material-UI and TypeScript to enhance frontend performance and maintainability. Passionate about learning and team collaboration, I aim to contribute meaningfully to every project I work on.\n\nLet’s connect!",
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-todmal-3aa486255' },
    { name: 'GitHub', url: 'https://github.com/AdityaT45' },
  ],
};

export const contact = {
  email: "adityatodmal47@gmail.com",
  phone: "+91 8275742916",
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aditya-todmal-3aa486255", icon: "bi bi-linkedin" },
    { name: "GitHub", url: "https://github.com/AdityaT45", icon: "bi bi-github" },
    { name: "X", url: "https://x.com/", icon: "bi bi-twitter-x" },
    { name: "Instagram", url: "https://instagram.com/", icon: "bi bi-instagram" },
    { name: "WhatsApp", url: "https://wa.me/918275742916", icon: "bi bi-whatsapp" },
  ]
};

export const skills = [
  {
    group: "Frontend",
    icon: "frontend.png",
    items: [
      {
        name: "HTML",
        icon: "profile.png",
        level: 95,
        color: "#e44d26",
        info: "3 years experience, used in 10+ projects"
      },
      {
        name: "CSS",
        icon: "css.png",
        level: 90,
        color: "#264de4",
        info: "3 years experience, used in 10+ projects"
      },
      {
        name: "Bootstrap",
        icon: "profile.png",
        level: 85,
        color: "#7952b3",
        info: "2 years experience, used in 6+ projects"
      },
      {
        name: "JavaScript",
        icon: "a5.jpg",
        level: 90,
        color: "#f7df1e",
        info: "3 years experience, used in 8+ projects"
      },
      {
        name: "TypeScript",
        icon: "typescript.png",
        level: 70,
        color: "#3178c6",
        info: "1 year experience, currently learning advanced concepts"
      },
      {
        name: "React",
        icon: "react.png",
        level: 85,
        color: "#61dafb",
        info: "2 years experience, used in 5+ projects"
      },
      {
        name: "React Native",
        icon: "react-native.png",
        level: 60,
        color: "#61dafb",
        info: "1 year experience, used in 2 projects"
      },
      {
        name: "Material-UI",
        icon: "mui.png",
        level: 75,
        color: "#0081cb",
        info: "1 year experience, used in 2 projects"
      }
    ]
  },
  {
    group: "Backend",
    icon: "backend.png",
    items: [
      {
        name: "Node.js",
        icon: "nodejs.png",
        level: 80,
        color: "#3c873a",
        info: "2 years experience, used in 5+ projects"
      },
      {
        name: "Express.js",
        icon: "express.png",
        level: 75,
        color: "#000000",
        info: "2 years experience, used in 4+ projects"
      },
      {
        name: "Core Java",
        icon: "java.png",
        level: 70,
        color: "#f89820",
        info: "2 years experience, used in 3 projects"
      },
      {
        name: "RESTful APIs",
        icon: "api.png",
        level: 80,
        color: "#01c3a8",
        info: "2 years experience, used in 5+ projects"
      },
      {
        name: "SQL",
        icon: "sql.png",
        level: 75,
        color: "#336791",
        info: "2 years experience, used in 4+ projects"
      }
    ]
  },
  {
    group: "Databases",
    icon: "databases.png",
    items: [
      {
        name: "MySQL",
        icon: "mysql.png",
        level: 80,
        color: "#00758f",
        info: "2 years experience, used in 4+ projects"
      },
      {
        name: "MongoDB",
        icon: "mongodb.png",
        level: 70,
        color: "#47a248",
        info: "1.5 years experience, used in 3 projects"
      }
    ]
  },
  {
    group: "Tools",
    icon: "tools.png",
    items: [
      {
        name: "Git",
        icon: "git.png",
        level: 85,
        color: "#f34f29",
        info: "2 years experience, used in all projects"
      },
      {
        name: "GitHub",
        icon: "github.png",
        level: 85,
        color: "#333",
        info: "2 years experience, used in all projects"
      },
      {
        name: "VS Code",
        icon: "vscode.png",
        level: 90,
        color: "#0078d7",
        info: "2 years experience, used daily"
      },
      {
        name: "Postman",
        icon: "postman.png",
        level: 75,
        color: "#ff6c37",
        info: "1.5 years experience, used in 3+ projects"
      },
      {
        name: "Figma",
        icon: "figma.png",
        level: 60,
        color: "#a259ff",
        info: "1 year experience, used for UI design"
      }
    ]
  }
];

export const projects = [
  // MERN STACK
  {
    name: "PageTurner – Online E-commerce Book Shop",
    category: "MERN STACK",
    images: ["bookshop1.png", "bookshop2.png"],
    technologies: [
      { name: "React", icon: "react.png" },
      { name: "Node.js", icon: "nodejs.png" },
      { name: "Express.js", icon: "express.png" },
      { name: "MongoDB", icon: "mongodb.png" },
    ],
    description: [
      "Developed a full-featured book-selling platform with admin, user, and staff modules.",
      "Integrated Razorpay for secure payments and streamlined order management."
    ],
    github: "https://github.com/AdityaT45/pageturner",
    live: "https://pageturner.live/"
  },
  {
    name: "PageTurner – Online E-commerce Book Shop",
    category: "MERN STACK",
    images: ["bookshop1.png", "bookshop2.png"],
    technologies: [
      { name: "React", icon: "react.png" },
      { name: "Node.js", icon: "nodejs.png" },
      { name: "Express.js", icon: "express.png" },
      { name: "MongoDB", icon: "mongodb.png" },
    ],
    description: [
      "Developed a full-featured book-selling platform with admin, user, and staff modules.",
      "Integrated Razorpay for secure payments and streamlined order management."
    ],
    github: "https://github.com/AdityaT45/pageturner",
    live: "https://pageturner.live/"
  },
  {
    name: "PageTurner ",
    category: "MERN STACK",
    images: ["p1.jpg", "p2.jpg"],
    technologies: [
      { name: "React", icon: "p1.jpg" },
      { name: "Node.js", icon: "profile.png" },
      { name: "Express.js", icon: "express.png" },
      { name: "MongoDB", icon: "mongodb.png" },
    ],
    description: [
      "Developed a full-featured book-selling platform with admin, user, and staff modules.",
      "Integrated Razorpay for secure payments and streamlined order management."
    ],
    github: "https://github.com/AdityaT45/pageturner",
    live: "https://pageturner.live/"
  },
  // PHP PROJECT
  {
    name: "Exam Hall Management System",
    category: "PHP PROJECT",
    images: ["examhall1.png", "examhall2.png"],
    technologies: [
      { name: "HTML", icon: "html.png" },
      { name: "CSS", icon: "css.png" },
      { name: "Bootstrap", icon: "bootstrap.png" },
      { name: "PHP", icon: "php.png" },
      { name: "MySQL", icon: "mysql.png" },
    ],
    description: [
      "Automated hall allocation and report generation for exam management.",
      "Improved efficiency for staff and reduced manual errors."
    ],
    github: "https://github.com/AdityaT45/examhall",
    live: "https://examhall.live/"
  },
  // MOBILE APPS
  {
    name: "Mess Management System (Mobile App)",
    category: "MOBILE APPS",
    images: ["messapp1.png", "messapp2.png"],
    technologies: [
      { name: "React Native", icon: "react-native.png" },
      { name: "Node.js", icon: "nodejs.png" },
      { name: "Express.js", icon: "express.png" },
      { name: "MongoDB", icon: "mongodb.png" },
    ],
    description: [
      "Mobile app for hostel students and mess owners to manage menus and interests.",
      "Real-time updates and secure data management."
    ],
    github: "https://github.com/AdityaT45/messapp",
    live: "https://messapp.live/"
  },
  // UI DESIGN
  {
    name: "Portfolio UI Design",
    category: "UI DESIGN",
    images: ["p1.jpg", "p2.jpg"],
    technologies: [
      { name: "Figma", icon: "figma.png" },
      { name: "Material-UI", icon: "mui.png" },
    ],
    description: [
      "Designed a modern, responsive portfolio UI in Figma.",
      "Focused on usability, accessibility, and visual appeal."
    ],
    github: "https://github.com/AdityaT45/portfolio-ui",
    live: "https://portfolio-ui.live/"
  },
  // Add more projects as needed...
];

export const experience = [
  {
    company: "Brightlink Infotech",
    image: "brightlink.png",
    role: "Frontend Developer Intern",
    time: "April 2025 to June 2025"
  },
  {
    company: "Brightlink Infotech",
    image: "brightlink.png",
    role: "Frontend Developer Intern",
    time: "April 2025 to June 2025"
  }
];

export const education = [
  {
    degree: "MCA",
    college: "Sinhgad Institute of Management and Computer Application, Pune",
    university: "Savitribai Phule Pune University",
    duration: "Aug 2023 - May 2025",
    score: "7.09 CGPA (First Class)",
    logo: "sinhgad.png"
  },
  {
    degree: "BCS",
    college: "New Arts, Commerce and Science College, Ahmednagar",
    university: "Savitribai Phule Pune University",
    duration: "Aug 2020 - Jun 2023",
    score: "7.76 CGPA (First Class)",
    logo: "newarts.png"
  },
  {
    degree: "HSC",
    college: "New Arts, Commerce and Science College, Ahmednagar",
    duration: "Jun 2019 - Mar 2020",
    score: "72.77%",
    logo: "newarts.png"
  },
  {
    degree: "SSC",
    college: "New English School, Wakodi",
    duration: "Jun 2017 - Mar 2018",
    score: "87.40%",
    logo: "wakodi.png"
  }
]; 