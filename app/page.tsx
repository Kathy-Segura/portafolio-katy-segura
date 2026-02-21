import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Dev Portfolio - Ingeniero en Sistemas',
  description: 'Portafolio profesional de Ingeniería en Sistemas especializado en Backend y Desarrollo Móvil.',
  keywords: ['Backend', 'Móvil', 'Desarrollo', 'Ingeniero en Sistemas'],
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
