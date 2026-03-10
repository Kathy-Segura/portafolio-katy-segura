'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen gradient-primary dark:gradient-accent flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 github-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start max-w-xl mx-auto lg:ml-12">

        {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/30 border border-secondary/50">
            <span className="text-sm font-medium text-primary">
              Bienvenido a mi portafolio
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary dark:text-gradient">

            Ingeniero en Sistemas

            <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary dark:from-[#9D8FDB] dark:via-[#8B7DCC] dark:to-[#5D50A0]">
              Backend & Móvil
            </span>

          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Convirtiendo ideas en código de calidad.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start flex-wrap">

            <a
                href="/CV-Katherine-Segura.pdf"
                download
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                  Descargar CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
            >
              Contáctame
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4 justify-center lg:justify-start">

            <a
              href="https://github.com/Kathy-Segura"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-primary"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/katherine-s-segura-8050aa329/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-primary"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-center lg:pr-10">

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-secondary/50 shadow-xl">

            <img
              src="/katy.jpeg"
              alt="Perfil"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
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

    </section>
  );
}