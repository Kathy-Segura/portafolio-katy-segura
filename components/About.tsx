'use client';

import { Code2, Smartphone, Server, Zap, Lightbulb, Users, BookOpen, MessageSquare, Target } from 'lucide-react';

export function About() {
  const technicalSkills = [
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      category: 'Móvil',
      icon: Smartphone,
      technologies: ['Android Studio', 'Jetpack Compose', 'Android Nativo', 'APIs REST'],
    },
    {
      category: 'Herramientas',
      icon: Code2,
      technologies: ['TypeScript', 'Git', 'Docker', 'SQL', 'POO', 'SOLID'],
    },
  ];

  const softSkills = [
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Comunicación efectiva y colaboración',
    },
    {
      icon: Lightbulb,
      title: 'Creatividad',
      description: 'Soluciones innovadoras y pensamiento crítico',
    },
    {
      icon: Target,
      title: 'Orientado a Resultados',
      description: 'Enfocado en calidad y deadlines',
    },
    {
      icon: BookOpen,
      title: 'Aprendizaje Continuo',
      description: 'Siempre actualizándome con nuevas tecnologías',
    },
    {
      icon: MessageSquare,
      title: 'Comunicación',
      description: 'Capaz de explicar conceptos complejos',
    },
    {
      icon: Zap,
      title: 'Eficiencia',
      description: 'Código optimizado y soluciones escalables',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary dark:heading-gradient">Sobre mí</h2>
          <div className="w-16 h-1 bg-linear-to-r from-secondary via-secondary to-transparent dark:from-[#5b45ba] dark:via-[#7f68e6] dark:to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Brief Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Soy un estudiante de Ingeniería en Sistemas apasionado por crear soluciones de software de alta calidad. Especializado en desarrollo backend robusto y aplicaciones móviles intuitivas que resuelven problemas del mundo real.
          </p>
        </div>

        {/* Soft Skills Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary dark:heading-gradient mb-2">Habilidades Blandas</h3>
            <p className="text-foreground/70">Cualidades que me definen como profesional</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-base mb-1">{skill.title}</h4>
                      <p className="text-foreground/70 text-sm">{skill.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary dark:heading-gradient mb-2">Habilidades Técnicas</h3>
            <p className="text-foreground/70">Tecnologías y lenguajes que domino</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {technicalSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.category}
                  className="p-8 rounded-xl bg-linear-to-br from-card to-card/50 border border-border hover:border-secondary/50 transition-all hover:shadow-xl group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-secondary/20 text-primary font-semibold hover:bg-secondary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
