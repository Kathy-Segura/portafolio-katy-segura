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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'katherinesofia719@gmail.com', href: 'mailto:katherinesofia719@gmail.com' },
    { icon: Phone, label: 'Teléfono', value: '+505 8938 4376', href: 'tel:+50589384376' },
    { icon: MapPin, label: 'Ubicación', value: 'Managua', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:katherinesofia719@gmail.com' },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'var(--gradient-primary)' }}
    >
      <div className="relative max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{
              color: 'var(--foreground)', // Negro en claro automáticamente
            }}
          >
            Contacto
          </h2>

          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: 'var(--muted-foreground)' }}
          >
            ¿Tienes un proyecto en mente?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ================= FORM (REDUCIDO) ================= */}
          <div
            className="rounded-2xl p-6 sm:p-8 transition-all duration-300"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              maxWidth: '480px',
            }}
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: 'var(--foreground)' }}
            >
              Envíame un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label
                    className="block text-sm font-medium mb-1 capitalize"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {field === 'name' && 'Nombre'}
                    {field === 'email' && 'Email'}
                    {field === 'subject' && 'Asunto'}
                  </label>

                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg outline-none transition-all"
                    style={{
                      backgroundColor: 'var(--input)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  style={{ color: 'var(--foreground)' }}
                >
                  Mensaje
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg outline-none resize-none transition-all"
                  style={{
                    backgroundColor: 'var(--input)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                <Send className="w-4 h-4" />
                Enviar
              </button>

              {submitted && (
                <div
                  className="p-3 rounded-lg text-center text-sm mt-3"
                  style={{
                    backgroundColor: 'var(--input)',
                    border: '1px solid var(--border)',
                    color: 'var(--primary)',
                  }}
                >
                  ¡Gracias por tu mensaje!
                </div>
              )}
            </form>
          </div>

          {/* ================= SMART ART CONTACT INFO ================= */}
          <div className="flex flex-col justify-center space-y-10">

          <h3
              className="text-xl font-semibold mb-6 p"
              style={{ color: 'var(--foreground)' }}
            >
             Información de Contacto
            </h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full transition-all group-hover:scale-110"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {info.label}
                    </p>
                    <p
                      className="text-base font-semibold"
                      style={{ color: 'var(--foreground)' }}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social */}
            <div className="pt-6">
              <h4
                className="font-semibold mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Sígueme
              </h4>

              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
                      style={{
                        backgroundColor: 'var(--primary)',
                        color: 'var(--primary-foreground)',
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}