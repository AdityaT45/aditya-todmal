export const personalInfo = {
  name: 'Aditya Todmal',
  phone: '+91 8275742916',
  email: 'adityatodmal47@gmail.com',
  profileImage: 'me.png',
 summary: "Hello! I'm Aditya Todmal, a dedicated Full Stack Developer with a strong interest in building practical and efficient web and mobile applications. I specialize in the MERN stack and have hands-on experience with MySQL, MongoDB, and React Native.\n\nI enjoy solving real-world problems through code and continuously improving my development skills. Currently, I'm exploring tools like Material-UI and TypeScript to enhance frontend performance and maintainability. Passionate about learning and team collaboration, I aim to contribute meaningfully to every project I work on.\n\nLet’s connect!",
 social: [
  { name: 'View Resume', url: '/assets/AdityaTodmalv3.pdf' },
  
], hidden: [
 
  { name: 'graaphic', url: '/assets/aditya_portfolio_final.pdf' },
  
],
};

export const contact = {
  email: "adityatodmal47@gmail.com",
  phone: "+91 8275742916",
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aditya-todmal-3aa486255", icon: "bi bi-linkedin" },
    { name: "GitHub", url: "https://github.com/AdityaT45", icon: "bi bi-github" },
    { name: "X", url: "https://x.com/", icon: "bi bi-twitter-x" },
    { name: "Instagram", url: "https://www.instagram.com/its_adi_todmal/", icon: "bi bi-instagram" },
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
        icon: "html.png",
        level: 80,
        color: "#e44d26",
        // info: "3 years experience, used in 10+ projects"
      },
      {
        name: "CSS",
        icon: "css.png",
        level: 85,
        color: "#264de4",
        // info: "3 years experience, used in 10+ projects"
      },
      {
        name: "Bootstrap",
        icon: "bootstrap.png",
        level: 80,
        color: "#7952b3",
        // info: "2 years experience, used in 6+ projects"
      },
      {
        name: "JavaScript",
        icon: "js.png",
        level: 60,
        color: "#f7df1e",
        // info: "3 years experience, used in 8+ projects"
      },
      {
        name: "TypeScript",
        icon: "ts.png",
        level: 50,
        color: "#3178c6",
        info: "1 year experience, currently learning advanced concepts"
      },
      {
        name: "React",
        icon: "react.png",
        level: 55,
        color: "#61dafb",
        // info: "2 years experience, used in 5+ projects"
      },
      {
        name: "React Native",
        icon: "rn.png",
        level: 40,
        color: "#61dafb",
        // info: "1 year experience, used in 2 projects"
      },
      {
        name: "Material-UI",
        icon: "mui.png",
        level: 45,
        color: "#0081cb",
        // info: "1 year experience, used in 2 projects"
      }
    ]
  },
  {
    group: "Backend",
    icon: "backend.png",
    items: [
      {
        name: "Node.js",
        icon: "node.png",
        level: 50,
        color: "#3c873a",
        // info: "2 years experience, used in 5+ projects"
      },
      {
        name: "Express.js",
        icon: "ex.png",
        level: 45,
        color: "#f7df1e",
        // info: "2 years experience, used in 4+ projects"
      },
    
      {
        name: "RESTful APIs",
        icon: "api.png",
        level: 50,
        color: "#01c3a8",
        // info: "2 years experience, used in 5+ projects"
      },
      {
        name: "SQL",
        icon: "sql.png",
        level: 45,
        color: "#336791",
        // info: "2 years experience, used in 4+ projects"
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
        level: 50,
        color: "#00758f",
        // info: "2 years experience, used in 4+ projects"
      },
      {
        name: "MongoDB",
        icon: "mongo.png",
        level: 40,
        color: "#47a248",
        // info: "1.5 years experience, used in 3 projects"
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
        level: 65,
        color: "#f34f29",
        // info: "2 years experience, used in all projects"
      },
      {
        name: "GitHub",
        icon: "gith.png",
        level: 70,
        color: "#3c873a",
        // info: "2 years experience, used in all projects"
      },
      {
        name: "VS Code",
        icon: "vs.png",
        level: 90,
        color: "#0078d7",
        info: "2 years experience, used daily"
      },
      {
        name: "Postman",
        icon: "postman.png",
        level: 70,
        color: "#ff6c37",
        // info: "1.5 years experience, used in 3+ projects"
      },
      {
        name: "Figma",
        icon: "figma.png",
        level: 60,
        color: "#a259ff",
        // info: "1 year experience, used for UI design"
      },
      {
        name: "Photoshop",
        icon: "ps.png",
        level: 80,
        color: "#0078d7",
        // info: "1 year experience, used for UI design"
      },
      {
        name: "Corel Draw",
        icon: "corel.png",
        level: 70,
        color: "#47a248",
        // info: "1 year experience, used for UI design"
      }
    ]
  }
];

export const projects = [
  // MERN STACK
  
  {
    name: "Vastra-shuddhi",
    category: "MERN STACK",
    images: ["vs1.png","vs2.png","vs3.png","vs4.png","vs5.png"],
    technologies: [
      { name: "React", icon: "react.png" },
      { name: "Node.js", icon: "node.png" },
      { name: "Express.js", icon: "ex.png" },
      { name: "MongoDB", icon: "mongo.png" },
    ],
    description: [
      "Vastrashuddhi is a digital platform connecting users with local laundry services.",
      "Supports service booking, real-time tracking, secure payments, and customer feedback."
    ],
    github: "",
    live: ""
  },
  
  // PHP PROJECT
  {
    name: "PageTurner – Online E-commerce Book Shop",
    category: "PHP PROJECT",
    images: ["pt1.png","pt2.png","pt3.png","pt4.png","pt5.png",],
    technologies: [
      { name: "HTML", icon: "html.png" },
      { name: "CSS", icon: "css.png" },
      { name: "Bootstrap", icon: "bootstrap.png" },
      { name: "PHP", icon: "php.png" },
      { name: "MySQL", icon: "mysql.png" },
    ],
    description: [
      "Developed a full-featured book-selling platform with admin, user, and staff modules.",
      "Integrated Razorpay for secure payments and streamlined order management."
    ],
    github: "https://github.com/AdityaT45/Page_Turner/tree/main",
    live: ""
  },
  {
    name: "Exam Hall Management System",
    category: "PHP PROJECT",
    images: ["eh1.png","eh2.png","eh3.png",],
    technologies: [
      { name: "HTML", icon: "html.png" },
      { name: "CSS", icon: "css.png" },
      { name: "Bootstrap", icon: "bootstrap.png" },
      { name: "PHP", icon: "php.png" },
      { name: "MySQL", icon: "mysql.png" },
    ],
    description: [
      "Automated hall allocation and report generation for exam management.",
      "Improved efficiency for staff and reduced manual errors.",
      "Streamlined administrative tasks and improved overall exam management operations"
    ],
    github: "https://github.com/AdityaT45/exam_hall_managment_system",
    live: ""
  },
  // MOBILE APPS
  {
    name: "Mess Management System (Mobile App)",
    category: "MOBILE APPS",
    images: ["cmm1.jpg", "cmm2.jpg","cmm3.jpg"],
    technologies: [
      { name: "React Native", icon: "rn.png" },
      { name: "Node.js", icon: "node.png" },
      { name: "Express.js", icon: "ex.png" },
      { name: "MongoDB", icon: "mongo.png" },
    ],
    description: [
      "Mobile app for hostel students and mess owners to manage menus and interests.",
      "Real-time updates and secure data management."
    ],
    github: "https://github.com/AdityaT45/check-my-mess",
    live: ""
  },
  // UI DESIGN
  {
    name: "fillow ui",
    category: "UI DESIGN",
    images: ["fl1.png","fl2.png","fl3.png",],
    technologies: [
      { name: "React", icon: "react.png" },
      { name: "Typescript", icon: "ts.png" },
      { name: "Material-UI", icon: "mui.png" },
    ],
    description: [
     "Used prop drilling to render components dynamically from JSON data.",
  "clean aesthetics, mobile responsiveness, accessibility, and user-friendly interactions to enhance the overall user experience."
    ],
    github: "https://github.com/AdityaT45/fillow_website_ui",
    live: "https://fillowui.netlify.app/"
  },

  {
    name: "Digital Wedding Invitation Card",
    category: "UI DESIGN",
    images: ["wic1.jpg","wic2.jpg"],
    technologies: [
      { name: "Html", icon: "html.png" },
      { name: "Css", icon: "css.png" },
      { name: "Bootstrap", icon: "bootstrap.png" },
      { name: "Javascript", icon: "js.png" },
    ],
    description: [
     "Designed a beautiful and responsive digital wedding invitation using HTML, CSS, Bootstrap, and JavaScript.",
  "Focused on elegant layout, smooth animations, and mobile-friendly design."
    ],
    github: "",
    live: "https://swapnil-wedding.netlify.app/#"
  },
  {
    name: "weshare",
    category: "UI DESIGN",
    images: ["ws1.png","ws2.jpg","ws3.jpg",],
    technologies: [
      { name: "React", icon: "react.png" },
      { name: "Typescript", icon: "ts.png" },
      { name: "Material-UI", icon: "mui.png" },
    ],
    description: [
     "Used prop drilling to render components dynamically from JSON data.",
  "clean aesthetics, mobile responsiveness, accessibility, and user-friendly interactions to enhance the overall user experience."
    ],
    github: "https://github.com/AdityaT45/fillow_website_ui",
    live: "https://weshare1234.netlify.app/"
  },
  // Add more projects as needed...
];

export const experience = [
  {
    company: "Brightlink Infotech",
    image: "a5.jpg",
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
    logo: "sinhgad.jpg"
  },
  {
    degree: "BCS",
    college: "New Arts, Commerce and Science College, Ahmednagar",
    university: "Savitribai Phule Pune University",
    duration: "Aug 2020 - Jun 2023",
    score: "7.76 CGPA (First Class)",
    logo: "necsa.png"
  },
  
]; 