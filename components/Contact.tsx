'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tu.email@example.com',
      href: 'mailto:tu.email@example.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+57 123 456 7890',
      href: 'tel:+573124567890',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Colombia',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:tu.email@example.com',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary dark:heading-gradient">Contacto</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Conecta conmigo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="tu.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  placeholder="Tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-secondary/20 border border-secondary text-primary text-center">
                  ¡Gracias por tu mensaje! Te contactaré pronto.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border hover:border-secondary/50 transition-all hover:shadow-lg"
                    >
                      <div className="p-3 rounded-lg bg-secondary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{info.label}</h4>
                        <p className="text-foreground/70">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Sígueme</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors text-primary hover:text-primary"
                      aria-label={link.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-primary dark:bg-gradient-accent">
              <h4 className="font-semibold text-primary mb-2">Disponible para proyectos</h4>
              <p className="text-sm text-foreground/80">
                Estoy abierto a colaboraciones y nuevas oportunidades. ¡No dudes en contactarme!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
