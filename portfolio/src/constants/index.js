import project1 from "../assets/projects/kl-sq.jpeg"; 
import project2 from "../assets/projects/rcc.jpg";
import project3 from "../assets/projects/or.jpeg";
import project4 from "../assets/projects/goldilocks-logo.png";
import project5 from '../assets/projects/myvote-logo.png'


export const HERO_CONTENT = `I’m a software engineer with over four years of experience building modern, user-focused web applications. Skilled in front-end technologies like JavaScript, TypeScript, React, and Angular, I also work with back-end tools such as Java, Node.js, and databases like MySQL, PostgreSQL, and MongoDB. I’m passionate about creating intuitive applications and continuously advancing my technical expertise in the ever-evolving field of software engineering.`;

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
    technologies: ["JavaScript", "TypeScript", "Java", "Kotlin", "React", "Angular", "Material UI", "HTML", "CSS", "SASS", "mongoDB", "SQL", "Docker", "Circle CI", "Jenkins", "Elasticsearch", "Okta"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    href: "https://llanosengineering.vercel.app/",
    image: project1,
    description:
      "Personal portfolio website showcasing projects, technologies, and contact information.",
    technologies: ["Tailwind CSS", "React", "Framer Motion", "Vercel"],
  },
  {
    title: "Raising Consciousness Consulting, LLC",
    href: "https://raisingconsciousnessconsulting.com/",
    image: project2,
    description:
      "Wordpress site for consulting business with booking information and contact form.",
    technologies: ["Wordpress", "Unsplash", "Picsart"],
  },
  {
    title: "Oriel Romano, LLC",
    href: "https://orielromano.com/",
    image: project3,
    description:
      "Wordpress site for licensed professional counselor.",
    technologies: ["Wordpress", "Unsplash", "Picsart"],
  },
  {
    title: "Goldilocks Web Application",
    href: "https://github.com/slatzz/goldilocks",
    image: project4,
    description:
      "A room swapping social web application with room listings, room ratings, 1-1 chat messaging, and user profiles.",
    technologies: ["JavaScript", "TypeScript", "React", "PostgreSQL", "Material UI"],
  },
  {
    title: "MyVote Web Application",
    href: "https://github.com/hanging-chads/myvote",
    image: project5,
    description:
      "Voter information web application with polling location search option, user voter information, user profiles, and election information.",
    technologies: ["JavaScript", "React", "mongoDB", "Material UI", "Node.js", "Oauth"],
  },
];

export const CONTACT = {
  address: "New Orleans, LA",
  phoneNo: "(210) 630-7968",
  email: "llanosengineering@gmail.com",
};
