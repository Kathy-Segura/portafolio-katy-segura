'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'GitHub', href: '#', icon: Github },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Email', href: 'mailto:tu.email@example.com', icon: Mail },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-linear-to-r from-primary via-secondary to-primary dark:from-[#9D8FDB] dark:via-[#8B7DCC] dark:to-[#5D50A0] bg-clip-text text-transparent">
              Dev Portfolio
            </h3>
            <p className="text-foreground/70">
              Ingeniero en Sistemas especializado en Backend y Desarrollo Móvil.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary dark:text-[#9D8FDB]">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Sobre mí', 'Formación', 'Proyectos', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary dark:text-[#9D8FDB]">Conecta Conmigo</h4>
            <div className="flex gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors text-primary"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Dev Portfolio. Todos los derechos reservados.
          </p>
          <p className="text-sm text-foreground/60 flex items-center gap-1">
            Hecho con
            <Heart className="w-4 h-4 text-secondary" />
            por un estudiante apasionado
          </p>
        </div>
      </div>
    </footer>
  );
}
