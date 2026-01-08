
import { Project, Skill, NavItem, Certification } from './types';

export const NAME = "Rostom Siervo";
export const TITLE = "Web Developer & Networking Professional";
export const SHORT_BIO = "Bridging the gap between software development and network infrastructure. I build robust, scalable web applications and ensure the systems they run on are secure and efficient.";

export const RESUME_LINK = "/Resume_Rostom_Siervo.pdf"; 
export const PROFILE_IMAGE = "/profile.jpg";

export const AVAILABILITY_STATUSES = [
  "Available for Hire",
  "Open to Collaborations",
  "Building Scalable Web Apps",
  "Securing Network Systems",
  "Ready for New Challenges"
];

export const ABOUT_HEADLINE = "I’m a passionate Full-Stack Developer specializing in Python, Django, and AI-powered solutions. I love building modern, scalable, and elegant applications that make an impact.";
export const ABOUT_BODY = "Beyond coding, I enjoy solving problems, mentoring peers, and exploring emerging tech. I believe in crafting solutions that balance functionality and aesthetics. My focus is on clean architecture, automation, and user-friendly designs.";
export const ABOUT_HIGHLIGHTS = [
  "Based in the Philippines",
  "Building AI-powered systems & web apps",
  "Passionate about teamwork & leadership",
  "Cloud Infrastructure & Networking",
  "Cybersecurity & Systems Optimization"
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    major: "Specialized in Artificial Intelligence & Web Development",
    school: "University of Eastern Philippines (UEP)",
    year: "2019 – 2024",
    description: "Graduated with Latin Honors. Developed strong foundations in software engineering, research, and leadership.",
    highlights: [
      "Academic Excellence Awardee (Multiple Semesters)",
      "Cum Laude – For showing an outstanding performance",
      "Consistent Dean’s Lister, 2019 – 2024",
      "Performing Arts Organization Awardee – UEP Performing Arts Guild"
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Academic Excellence Awardee",
    organization: "University of Eastern Philippines",
    year: "2019 – 2024",
    description: "Recognized for consistent outstanding academic performance throughout college."
  },
  {
    title: "Cum Laude",
    organization: "Class of 2024",
    year: "2024",
    description: "Graduated with Latin Honors for exemplary scholastic achievement in BS Information Technology."
  }
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Tom Tech",
    year: "2025 – Present",
    description: "Developing and deploying scalable web applications. Integrating AI-driven solutions to optimize workflows.",
    technologies: ["Web Apps", "AI Integration", "Agile", "Team Leadership"]
  },
  {
    role: "Technical Support Engineer",
    company: "Total Information Management Corporation",
    year: "2024 – Present",
    description: "Providing technical support to enterprise clients. Troubleshooting hardware and software systems.",
    technologies: ["Enterprise Support", "Network Stability", "Data Security", "Hardware/Software"]
  }
];

// --- CERTIFICATIONS REPOSITORY ---
// To add a new certificate, simply add an object to this array.
// Ensure your image file is placed in: assets/certificates/[filename].png
export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: "Oracle Certified DevOps Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Mastery of CI/CD pipelines, Infrastructure as Code, and automation on Oracle Cloud.",
    imageUrl: "/certificates/devops.png", 
    credentialLink: "#"
  },
  {
    id: 2,
    name: "Oracle Cloud Infrastructure Certified Networking Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Advanced architecture of virtual cloud networks, connectivity, and load balancing.",
    imageUrl: "/certificates/networking.png",
    credentialLink: "#"
  },
  {
    id: 3,
    name: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    description: "Fundamental concepts of public cloud, OCI services, and security basics.",
    imageUrl: "/certificates/associate.png",
    credentialLink: "#"
  },
  {
    id: 4,
    name: "Cisco Networking - JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description: "Core programming logic and JavaScript fundamentals for network automation.",
    imageUrl: "/certificates/js.png",
    credentialLink: "#"
  },
  {
    id: 5,
    name: "Oracle Cloud Infrastructure Developer Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Cloud-native application development, serverless functions, and secure coding.",
    imageUrl: "/certificates/dev prof.png",
    credentialLink: "#"
  },
  {
    id: 6,
    name: "Oracle Cloud Infrastructure Certified Architect Professional",
    issuer: "Oracle",
    year: "2025",
    description: "High-level design of enterprise-grade, resilient, and high-availability cloud systems.",
    imageUrl: "/certificates/architect.png",
    credentialLink: "#"
  },
  {
    id: 7,
    name: "Oracle Database & AWS Certified Architect Professional",
    issuer: "Oracle & AWS",
    year: "2025",
    description: "Hybrid cloud management and expert-level database administration.",
    imageUrl: "/certificates/database.png",
    credentialLink: "#"
  },

  {
    id: 9,
    name: "CSS NC II",
    issuer: "TESDA Philippines",
    year: "2019",
    description: "Computer Hardware and Software management and troubleshooting",
    imageUrl: "/certificates/logov2.1.png",
    credentialLink: "#"
  }
];

export const SERVICES = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance web applications using modern technologies like React, TypeScript, and Node.js.",
    iconKey: "Layout"
  },
  {
    title: "Network Infrastructure",
    description: "Designing and configuring secure, scalable network systems. Expertise in Cisco IOS, routing protocols, and VLANs.",
    iconKey: "Server"
  },
  {
    title: "System Administration",
    description: "Managing Linux servers, automating tasks with Python/Bash, and ensuring system security and uptime.",
    iconKey: "Terminal"
  }
];

export const VALUE_PROPS = [
  {
    title: "Academic Excellence",
    description: "Graduated Cum Laude in IT, demonstrating strong theoretical foundations and dedication.",
    iconKey: "Award"
  },
  {
    title: "Hybrid Skillset",
    description: "Rare combination of software development chops and networking hardware knowledge.",
    iconKey: "Layers"
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "I start by understanding the core problem and creating a solid roadmap."
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Mapping topology for networks or UI/UX for applications."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. A. Santos",
    role: "Capstone Adviser",
    text: "Rostom showed exceptional leadership and technical ability during his capstone project."
  }
];

export const FAQS = [
  {
    question: "Are you available for full-time roles?",
    answer: "Yes! I am currently available for full-time positions in Web Development or Network Administration."
  }
];

export const CORE_TECH = [
  "React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "Python", "Django", "PostgreSQL", "Docker", "Git", "Linux", "Cisco"
];

export const TECH_LOGOS: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Cisco": "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg",
};

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Django / DRF', level: 80, category: 'Backend' },
  { name: 'Cisco IOS', level: 85, category: 'Tools' },
  { name: 'Linux Administration', level: 75, category: 'Tools' },
];

//projects images and info.

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "File Management System",
    description: "Fully featured Django app with file editing, version control, and role-based permissions.",
    technologies: ["Django", "PostgreSQL", "JavaScript"],
    imageUrl: "/logov2.1.png",
    github: "#",
    link: "#"
  },
  {
    id: 2,
    title: "Medical AI Assistant",
    description: "AI-assisted image analysis platform with Django frontend and REST backend.",
    technologies: ["Django", "REST API", "AI"],
    imageUrl: "/logov2.1.png",
    github: "#",
    link: "#"
  },
  {
    id: 3,
    title: "Dr. Tom AI",
    description: "A medical assistant powered by Gemini AI, providing real-time health insights.",
    technologies: ["Gemini AI", "Python", "Django"],
    imageUrl: "/logov2.1.png",
    github: "#",
    link: "#"
  },

  {
    id: 4,
    title: "Smart Queing System",
    description: "A smart queing with AI integration.",
    technologies: ["Gemini AI", "Python", "Django", "Typescript", "React"],
    imageUrl: "/logov2.1.png",
    github: "#",
    link: "#"
  },

  {
    id: 5,
    title: "Cattleya Resort",
    description: "A smart website and booking for cattleya resort",
    technologies: ["Gemini AI", "Typescript", "React", "Vite", "AI Integration"],
    imageUrl: "/cattleya.jpg",
    github: "https://github.com/RSiervo/cattleya-resort",
    link: "cattleya-resort.vercel.app"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/RSiervo",
  linkedin: "https://linkedin.com/",
  facebook: "https://facebook.com/rostomdevdotnet",
  instagram: "https://instagram.com/",
  messenger: "https://m.me/@rostomdevdotnet",
  email: "mailto:rostomdevdotnet@gmail.com"
};

export const AI_SYSTEM_PROMPT = `
You are the professional AI portfolio assistant for Rostom Siervo.
Answer questions accurately based on his resume and projects. 
His key strength is the hybrid skillset of Web Development and Networking.
Concise, professional, and helpful.
`;
