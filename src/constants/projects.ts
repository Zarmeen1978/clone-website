export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and checkout process.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    demoUrl: 'https://example.com',
    codeUrl: 'https://github.com/yourusername/ecommerce-demo',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with drag-and-drop functionality and real-time updates.',
    technologies: ['React', 'Firebase', 'Bootstrap', 'Redux'],
    demoUrl: 'https://example.com/task-app',
    codeUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://example.com/portfolio',
    codeUrl: 'https://github.com/yourusername/portfolio',
  },
  // Add more projects as needed
];