'use client';

import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'Backend' | 'Móvil';
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  category,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden border border-border hover:border-secondary/50 transition-all hover:shadow-xl bg-card">
      {/* Image */}
      <div className="relative h-48 sm:h-56 bg-linear-to-br from-secondary/20 to-secondary/5 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category Badge */}
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/30 text-primary">
            {category}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-foreground/80 leading-relaxed">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs bg-secondary/20 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg transition-all hover:scale-105 font-medium"
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Ver
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
