import type { Project } from "@/components/ProjectCard";

export const profile = {
  name: "Bisrat Gulelat",
  location: "Addis Ababa, Ethiopia",
  email: "bisratgulelat@gmail.com",
  phone: "+251 918 873 328",
  github: "https://github.com/bisratG101",
  leetcode: "BisratG",
} as const;

export const education = {
  school: "Addis Ababa University",
  degree: "B.Sc. in Software Engineering",
  period: "2022–Present",
  coursework: [
    "Data Structures & Algorithms",
    "OOP (Java)",
    "Database Systems",
    "Web Development",
    "Python Programming",
  ],
} as const;

export const experience = [
  {
    role: "Software Engineering Trainee",
    company: "A2SV (Africa to Silicon Valley)",
    period: "2025–Present",
    points: [
      "Advanced data structures and algorithms",
      "Problem-solving with C++ and Python",
      "Time complexity analysis and clean, readable code",
    ],
  },
] as const;

export const projects: Project[] = [
  {
    title: "MiniGit",
    description:
      "Lightweight version control system with commits, branching, checkout, and merge. Built to understand how Git works under the hood.",
    techStack: ["C++", "File I/O", "Hashing"],
    learned:
      "Low-level system design, file tracking, and implementing core version control concepts.",
    githubUrl: null, // placeholder until repo is public
  },
  {
    title: "Travel Agency Booking System",
    description:
      "Full-stack web application for booking and reservation management. Handles booking processing and persistence.",
    techStack: ["Full-stack", "REST APIs", "Backend logic", "Database integration"],
    learned:
      "REST API design, backend logic, and database integration for real-world workflows.",
    githubUrl: null,
  },
  {
    title: "Amazon Website Replica",
    description:
      "Front-end clone of an e-commerce site with responsive layout and interactive UI.",
    techStack: ["HTML", "CSS", "JavaScript"],
    learned:
      "Responsive UI, DOM manipulation, and structuring a multi-page front-end.",
    githubUrl: null,
  },
];

export const skills = {
  languages: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
  frameworks: ["React (learning)", "REST APIs", "OOP", "Data Structures"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
  spoken: ["Amharic (Native)", "English (Professional)"],
} as const;
