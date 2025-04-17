import project1 from "../assets/kl-sq.jpeg";
import project2 from "../assets/rcc.jpg";
import project3 from "../assets/or.jpeg";
import project4 from "../assets/goldilocks-logo.png";
import project5 from "../assets/myvote-logo.png";
import project6 from "../assets/ygt-mobile.png";
import project7 from "../assets/luxarboreus.jpg";

export const HERO_CONTENT = `Bienvenidos! My name is Kristiana Llanos, and I am a software engineer with 5 years of experience building modern, user-focused web applications. `;

export const ABOUT_TEXT = `
In 2020, I earned a certificate in Fundamentals of JavaScript Functional Programming and Web Development from Operation Spark New Orleans, marking my transition from the field of psychology to a career in technology. This shift builds on my academic foundation, which includes a Master of Science in Clinical Mental Health Counseling from Loyola University New Orleans (2019) and a Bachelor of Arts in Psychology from The University of Texas at Austin (2015).

When I’m not coding, you’ll likely find me tending to my balcony garden, spending time with my cats, Coopy and ChiChi, or rehearsing and performing with the Symphony of New Orleans (SONO).
`;

export const EXPERIENCES = [
  {
    year: "2021 - 2024",
    role: "Software Engineer",
    company: "Metafora, LLC",
    description: `Designed, developed and maintained web applications using JavaScript, TypeScript, Java and Kotlin. Responsible for designing and the development of company's first commercial web application. Implemented and updated RESTful APIs and SQL and mongoDB databases. Collaborated with product managers to design and modernize websites for consulting clients.`,
    technologies: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Kotlin",
      "React",
      "Angular",
      "Material UI",
      "HTML",
      "CSS",
      "SASS",
      "mongoDB",
      "SQL",
      "Docker",
      "CircleCI",
      "Jenkins",
      "Elasticsearch",
      "Okta",
      "Figma",
    ],
  },
];

export const PROJECTS = [
  {
    title: "You Got This Mobile Application",
    href: "https://github.com/llanosengineering/mobile-you-got-this-app",
    image: project6,
    description: "Mobile application to help manage your daily tasks.",
    technologies: ["React", "React Native", "Firebase (Firestore)"],
  },
  {
    title: "Portfolio Website",
    href: "https://github.com/llanosengineering/portfolio",
    image: project1,
    description:
      "Personal portfolio website showcasing projects, technologies, and contact information.",
    technologies: ["Vite", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
  },

  {
    title: "Goldilocks Web Application",
    href: "https://github.com/slatzz/goldilocks",
    image: project4,
    description:
      "A room swapping social web application with room listings, room ratings, 1-1 chat messaging, and user profiles.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Material UI",
      "JSON Web Token",
      "Bcrypt.js",
    ],
  },
  {
    title: "MyVote Web Application",
    href: "https://github.com/hanging-chads/myvote",
    image: project5,
    description:
      "Voter information web application with polling location search option, user voter information, user profiles, and election information.",
    technologies: [
      "JavaScript",
      ,
      "Node.js",
      "React",
      "mongoDB",
      "Material UI",
      "Oauth",
    ],
  },
];

export const FREELANCE_PROJECTS = [
  {
    title: "mysticbardlux.com",
    year: "(2025 - present)",
    href: "https://mysticbardlux.com/",
    image: project7,
    description:
      "Squarespace website for spiritual diviner offering a varity of services for purchase.",
    technologies: ["Squarespace", "Unsplash", "Picsart"],
  },
  {
    title: "Raising Consciousness Consulting, LLC",
    year: "(2024 - present)",
    href: "https://raisingconsciousnessconsulting.com/",
    image: project2,
    description:
      "Wordpress website for consulting business with booking information and contact form.",
    technologies: ["Wordpress", "Unsplash", "Vecteezy", "Picsart"],
  },
  {
    title: "Oriel Romano, LLC",
    year: "(2023 - present)",
    href: "https://orielromano.com/",
    image: project3,
    description: "Wordpress website for licensed professional counselor.",
    technologies: ["Wordpress", "Unsplash", "Picsart"],
  },
];

export const CONTACT = {
  address: "New Orleans, LA",
  phoneNo: "(210) 630-7968",
  email: "llanosengineering@gmail.com",
};
