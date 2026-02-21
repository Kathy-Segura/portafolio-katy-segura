'use client';

import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  const education = [
    {
      icon: GraduationCap,
      title: 'Ingeniería en Sistemas',
      institution: 'Universidad Principal',
      period: '2021 - 2025 (Cursando)',
      description: 'Estudiante activo de Ingeniería en Sistemas con énfasis en desarrollo de software y arquitectura de sistemas.',
      subjects: ['Desarrollo Backend', 'Desarrollo Móvil', 'Bases de Datos', 'Algoritmos', 'Ingeniería de Software'],
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: 'Certificación Full Stack',
      issuer: 'Plataforma Online',
      date: '2024',
    },
    {
      icon: Award,
      title: 'React Developer',
      issuer: 'Curso Online Especializado',
      date: '2024',
    },
    {
      icon: Award,
      title: 'Backend con Node.js',
      issuer: 'Bootcamp de Programación',
      date: '2023',
    },
  ];

  const experience = [
    {
      icon: BookOpen,
      title: 'Proyectos Académicos',
      description: 'Desarrollo de múltiples proyectos en equipo aplicando metodologías ágiles y buenas prácticas de código.',
      highlights: ['Trabajo en equipo', 'Metodología Scrum', 'Git y control de versiones'],
    },
    {
      icon: BookOpen,
      title: 'Proyectos Personales',
      description: 'Creación de aplicaciones propias para fortalecer habilidades y explorar nuevas tecnologías.',
      highlights: ['Innovación', 'Aprendizaje continuo', 'Calidad de código'],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary dark:heading-gradient">Formación</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Mi camino educativo y desarrollo profesional
          </p>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary dark:text-[#9D8FDB] flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Educación
          </h3>
          <div className="grid gap-6">
            {education.map((edu) => {
              const Icon = edu.icon;
              return (
                <div key={edu.title} className="p-6 rounded-xl bg-background border border-border hover:border-secondary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-primary mb-1">{edu.title}</h4>
                      <p className="text-foreground/70 mb-2">{edu.institution}</p>
                      <p className="text-sm text-foreground/60 mb-3">{edu.period}</p>
                      <p className="text-foreground/80 mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 rounded-full text-xs bg-secondary/20 text-primary font-medium"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary dark:text-[#9D8FDB] flex items-center gap-2">
            <Award className="w-6 h-6" />
            Certificaciones
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="p-6 rounded-xl bg-background border border-border hover:border-secondary/50 transition-all hover:shadow-lg text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-secondary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{cert.title}</h4>
                  <p className="text-sm text-foreground/70 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-foreground/60">{cert.date}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Experiencia
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.title}
                  className="p-6 rounded-xl bg-background border border-border hover:border-secondary/50 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-secondary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                  </div>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-foreground/70">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
