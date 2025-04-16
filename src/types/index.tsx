export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}
