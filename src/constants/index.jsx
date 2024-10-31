import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/career-link.png";
import projectImage2 from "../assets/elgant-seats.png";
import projectImage3 from "../assets/netflix.png";

import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "MUHAMMED RABEEH",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full-stack developer with a focus on creating functional and visually appealing web applications. I enjoy transforming ideas into dynamic, user-friendly digital experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Job Portal",
    description:
      "Developed a comprehensive career-link job portal designed to streamline the job application process for candidates and recruiters.",
    image: projectImage1,
    githubLink: "https://github.com/rabeehnp7/CareerLink",
    liveLink:"https://career-links.netlify.app/"
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/rabeehnp7/Elegant-seats",
    liveLink:"https://elegantseats-shop.onrender.com"
  },
  {
    id: 3,
    name: "Netflix Clone",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
    liveLink:"https://netfilxindia.netlify.app/"
  },
];

export const BIO = [
  "I studied computer science and completed a full-stack development internship, where I gained hands-on experience in both frontend and backend technologies.",
"Following my education, I developed expertise in building web applications using the MERN stack, Java, and C#, honing my skills in creating robust and scalable solutions.",

"In 2023, driven by a passion for innovative web development and a desire to continually evolve with new technologies, I set my sights on becoming a versatile developer.",
"I am now focused on learning Next.js and expanding my knowledge in modern web frameworks to further enhance my craft.",

"As a multi-disciplinary full-stack developer, I bring a deep understanding of both client-side and server-side development.",
"From my proficiency in HTML, CSS, and JavaScript to my experience with React, Node.js, and MSSQL, I am dedicated to delivering high-quality, performance-driven web solutions that leave a lasting impact.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },
  {
    icon: <IoLogoFirebase  className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "Firebase",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <SiMysql  className="text-4xl text-white lg:text-5xl" />,
    name: "MySql",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Full Stack Developer Intern",
    company: "Techzios",
    duration: "Dec 2023 - Sep 2024",
    description:
      "Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Collaborated with cross-functional teams to deliver features, troubleshoot issues, and optimize performance. Gained hands-on experience in both frontend and backend development, contributing to project architecture and deployment.",
  },
  
];

export const EDUCATION = [
  
  {
    degree: "Bachelors in Computer Application",
    institution: "Calicut University",
    duration: "September 2020 - June 2023",
    description:
      "Focused on web development, programming languages, and database management. Actively participated in coding clubs and hackathons, where I built web applications using the MERN stack (MongoDB, Express.js, React, Node.js), Java, and C#. Completed a senior project developing a job portal platform and graduated with a high GPA",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/rabeeh_np/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/rabeehnp7",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/rabeehnp/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
