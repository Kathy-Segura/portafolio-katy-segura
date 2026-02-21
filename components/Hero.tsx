'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen gradient-primary dark:gradient-accent flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 github-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-8 relative z-10">
        {/* Avatar */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-secondary/50 shadow-lg">
          <img
            src="/profile-avatar.jpg"
            alt="Perfil"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Greeting Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50">
          <span className="text-sm font-medium text-primary">Bienvenido a mi portafolio</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight text-primary dark:text-gradient">
            Ingeniero en Sistemas
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary dark:from-[#9D8FDB] dark:via-[#8B7DCC] dark:to-[#5D50A0]">
              Backend & Móvil
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/80 text-balance max-w-2xl mx-auto leading-relaxed">
            Apasionado por desarrollar soluciones robustas en backend y aplicaciones móviles innovadoras. Convirtiendo ideas en código de calidad.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Ver mis proyectos
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
          >
            Contáctame
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 pt-8">
          <a
            href="#"
            className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-primary"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-primary"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
