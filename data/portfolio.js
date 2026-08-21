// =====================================================================
// Edit this file to customize your portfolio content.
// No build step required — just refresh the page.
// =====================================================================

window.PORTFOLIO_DATA = {
  profile: {
    name: "John Albert F. Abris",
    role: "Network & Full-Stack Developer",
    typedRoles: [
      "Cisco Certified",
      "Full-Stack Web Developer",
      "Cybersecurity Enthusiast",
      "Lifelong Learner",
    ],
    tagline:
      "Building secure networks and elegant web experiences. Cisco-certified, code-driven, and obsessed with the details.",
    email: "aceabris00@gmail.com",
    resumeUrl: "assets/resume.pdf", // drop your resume PDF in /assets
    socials: {
      github:   "https://github.com/aceabris",
      linkedin: "https://linkedin.com/",
      twitter:  "https://twitter.com/",
      credly:   "https://www.credly.com/users/john-albert-abris",
    },
  },

  about: {
    intro:
     "I’m a Network & Full-Stack Developer passionate about building reliable infrastructure and practical web systems. I work across networking, backend development, databases, and modern web technologies, turning real-world requirements into functional, secure, and scalable solutions.",
education: [
      { school: "Eastern Samar State University - Guiuan Campus", program: "BS Information Technology", year: "2024 - Present" },
      
    ],
    goals:
      "To architect scalable, secure systems that combine strong networking foundations with delightful user-facing software.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "C++", "C#", "Java"],
  },

  // categories used by filters
  categories: ["All", "Networking", "Web Development", "Cybersecurity", "Programming"],

  certifications: [
    {
      id: "ccna",
      title: "Network Addressing and Basic Troubleshooting",
      issuer: "Cisco Networking Academy",
      date: "May 24, 2026",
      category: "Networking",
      description: "Comprehensive certification covering network fundamentals, IP services, and security fundamentals.",
      verifyUrl: "https://www.credly.com/badges/edb0f3e0-d69d-4e36-bb30-b12ed230dd69",
      image: "assets/certifications/NABT.png",
      accent: "linear-gradient(135deg,#0ea5e9,#6366f1)",
      badge: "Network Addressing and Basic Troubleshooting",
      icon: "🛰",
    },
    {
      id: "ccna",
      title: "Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      date: "May 29, 2026",
      category: "Security",
      description: "Skills in monitoring, detecting and responding to cybersecurity threats in a security operations center.",
      verifyUrl: "https://www.credly.com/badges/e68d2fc9-40ee-4e05-b3c8-89dd0510d142",
      image: "assets/certifications/CTM.png",
      accent: "linear-gradient(135deg,#22d3ee,#0f766e)",
      badge: "Cyber Threat Management",
      icon: "🛡",
    },
    {
      id: "ccna",
      title: "Hardware and Upgrade Support",
      issuer: "Cisco Networking Academy",
      date: "June 16, 2026",
      category: "Hardware",
      description: "Foundational knowledge for working safely with computer hardware. Learners practice safety procedures, identify ports and cables, assist users with device info, and troubleshoot common hardware issues.",
      verifyUrl: "https://www.credly.com/badges/2efa063f-befd-449a-8147-63457ab67447",
      image: "assets/certifications/HUS.png",
      accent: "linear-gradient(135deg,#3b82f6,#06b6d4)",
      badge: "Hardware and Upgrade Support",
      icon: "🔗",
    },
    {
      id: "ccna",
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "Aug 16, 2026",
      category: "Data Analytics",
      description: "Broad understanding how the data analytics process creates value from data, can explain characteristics of data, including formats, availability and methods to acquire, can transform data and analyze data using basic statistical and data preparation techniques.",
      verifyUrl: "https://www.credly.com/badges/4d08237e-b3ef-4784-929d-6636c7066abb",
      image: "assets/certifications/DAE.png",
      accent: "linear-gradient(135deg,#a855f7,#ec4899)",
      badge: "Data Analytics Essentials",
      icon: "🔒",
    },
    /*{
      id: "python",
      title: "Python Essentials 1",
      issuer: "Cisco / OpenEDG",
      date: "Jun 2023",
      category: "Programming",
      description: "Core Python syntax, data types, control flow, and functions.",
      verifyUrl: "https://www.credly.com/",
      accent: "linear-gradient(135deg,#facc15,#ef4444)",
      badge: "PY",
      icon: "🐍",
    },
    {
      id: "js",
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Feb 2023",
      category: "Web Development",
      description: "300+ hours of JavaScript fundamentals, ES6, algorithms, and data structures.",
      verifyUrl: "https://www.freecodecamp.org/",
      accent: "linear-gradient(135deg,#f59e0b,#fbbf24)",
      badge: "JS",
      icon: "{ }",
    },
    {
      id: "react",
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      date: "Sep 2024",
      category: "Web Development",
      description: "Compound components, render props, hooks composition and performance.",
      verifyUrl: "https://frontendmasters.com/",
      accent: "linear-gradient(135deg,#06b6d4,#3b82f6)",
      badge: "React",
      icon: "⚛",
    },
    {
      id: "linux",
      title: "Linux Unhatched",
      issuer: "Cisco Networking Academy",
      date: "Apr 2023",
      category: "Programming",
      description: "Introduction to the Linux operating system and CLI essentials.",
      verifyUrl: "https://www.credly.com/",
      accent: "linear-gradient(135deg,#f97316,#fde047)",
      badge: "Linux",
      icon: "🐧",
    }, */
  ], 

  projects: [
    {
  title: "RFID Based Computer Laboratory E-Logbook System",
  description: "An RFID based e-logbook system for computer labs, allowing students to log their activities and hours using RFID cards.",
  tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  github: "https://github.com/",
  demo: "https://labscan-events.site/labbook/information.php",
  accent: "linear-gradient(135deg,#0ea5e9,#6366f1)",
  screenshots: [
    "assets/projects/lab1.png",
    "assets/projects/lab2.png",
    "assets/projects/lab3.png",
    "assets/projects/lab4.png",
    "assets/projects/lab5.png",

  ],
},
    {
      title: "ITSO Events RFID Attendance & Fines Monitoring System",
      description: "An RFID based attendance and fines monitoring system for ITSO events.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/",
      demo: "https://labscan-events.site/itso-events/scanner.php",
      accent: "linear-gradient(135deg,#22d3ee,#0f766e)",
      screenshots: [
    "assets/projects/itso1.png",
    "assets/projects/itso2.png",
    "assets/projects/itso3.png",
    "assets/projects/itso4.png",
    "assets/projects/itso5.png",
  ],
    },
    /*{
      title: "VaultPass",
      description: "Zero-knowledge password manager with end-to-end encryption.",
      tech: ["JavaScript", "WebCrypto", "AES-GCM"],
      github: "https://github.com/",
      demo: "#",
      accent: "linear-gradient(135deg,#a855f7,#ec4899)",
    },
    {
      title: "Lab Topology Builder",
      description: "Drag-and-drop network topology designer that exports to Packet Tracer.",
      tech: ["JavaScript", "Canvas", "HTML5"],
      github: "https://github.com/",
      demo: "#",
      accent: "linear-gradient(135deg,#f97316,#facc15)",
    }, */
  ],

  skills: [
    {
      name: "Networking",
      items: [
        { name: "Routing & Switching",   level: 88 },
        { name: "Network Security",      level: 82 },
      ],
    },
    {
      name: "Front-end Development",
      items: [
        { name: "JavaScript",     level: 72 },
        { name: "HTML",            level: 90 },
         { name: "CSS",            level: 87 },
      ],
    },
    {
      name: "Back-end Development",
      items: [
        { name: "PHP",     level: 89 },
        { name: "SQL",     level: 86 },
      ],
    },
    {
      name: "Programming",
      items: [
        { name: "C++",                level: 85 },
        { name: "C#",              level: 81 },
        { name: "Java",                  level: 75 },
      ],
    },
  ],
};
