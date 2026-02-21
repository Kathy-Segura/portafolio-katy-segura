'use client';

import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'API REST de E-commerce',
      description: 'API completa para plataforma de e-commerce con autenticación, gestión de productos y carrito de compras.',
      image: '/project-backend.jpg',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
      category: 'Backend' as const,
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'App Móvil de Tareas',
      description: 'Aplicación móvil para gestión de tareas con sincronización en tiempo real y notificaciones push.',
      image: '/project-mobile.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'React Navigation'],
      category: 'Móvil' as const,
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Sistema de Blogs',
      description: 'Plataforma de blogs con CMS integrado, búsqueda avanzada y gestión de categorías.',
      image: '/project-backend.jpg',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      category: 'Backend' as const,
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Red Social',
      description: 'Red social móvil con feed, comentarios, likes y perfiles de usuario con interfaz moderna.',
      image: '/project-mobile.jpg',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Provider'],
      category: 'Móvil' as const,
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Gestor de Inventario',
      description: 'Sistema de gestión de inventario en tiempo real con reportes y análisis de datos.',
      image: '/project-backend.jpg',
      technologies: ['Node.js', 'MongoDB', 'Socket.io', 'Charts.js'],
      category: 'Backend' as const,
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'App de Fitness',
      description: 'Aplicación de fitness con seguimiento de entrenamientos, nutrición y progreso con gráficos.',
      image: '/project-mobile.jpg',
      technologies: ['React Native', 'TypeScript', 'Expo', 'AsyncStorage'],
      category: 'Móvil' as const,
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary dark:heading-gradient">Proyectos Destacados</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Selección de mis mejores trabajos en backend y desarrollo móvil
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Más información sobre mis proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
