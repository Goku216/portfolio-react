import { Project, Experience, Education } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "CodeBook – E-commerce React App",
    description: "A fully functional e-commerce app with product listings, filtering, and a cart system.",
    image: "https://images.unsplash.com/photo-1608716343086-4b98f162d19b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["React", "Node.js", "Tailwind"],
    demoLink: "https://codebook-sp.netlify.app/",
    githubLink: "https://github.com/Goku216/codebook.git"
  },
  {
    id: 2,
    title: "CineMate – Movie Browsing App",
    description: "A website to browse and search for movies, with detailed information and imdb ratings.",
    image: "https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["React", "TMDB API", "Tailwind CSS", "JSON Server"],
    demoLink: "https://cinemate-sp.netlify.app/",
    githubLink: "https://github.com/Goku216/cinemate.git"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Front-End Developer Intern",
    company: "Brahmabyte Lab | Kathmandu, Nepal",
    period: "August 2025 - Present",
    description: " Developed and deployed multiple responsive web applications using Next.js, Typescript, and Tailwind CSS. Worked on dynamic components, API integrations, and state management using React hooks. Collaborated with online communities and peers to enhance UI/UX design and debug code. Gained hands-on experience with Git version control and responsive layouts."
  },
  
];

export const education: Education[] = [

  {
    id: 1,
    degree: "Bachelor in Computer Application",
    institution: "Pokhara University",
    period: "2021 - 2026",
    description: "Major in Computer Application with focus on Web Technologies"
  }
];