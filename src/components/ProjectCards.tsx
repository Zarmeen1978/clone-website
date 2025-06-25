import { motion } from 'framer-motion';
import { Project } from '@/constants/projects';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card h-100 shadow-sm"
    >
      <div className="card-img-top bg-light" style={{ height: '200px', overflow: 'hidden' }}>
        {/* Replace with your project image */}
        <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-secondary bg-opacity-10">
          <span className="text-muted">Project Screenshot</span>
        </div>
      </div>
      
      <div className="card-body d-flex flex-column">
        <h3 className="h5 card-title">{project.title}</h3>
        <p className="card-text flex-grow-1">{project.description}</p>
        
        <div className="mb-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge bg-light text-dark me-1 mb-1">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="d-flex gap-2">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary flex-grow-1"
            >
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-secondary flex-grow-1"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}