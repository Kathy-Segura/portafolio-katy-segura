# Portafolio - Ingeniero en Sistemas

Portafolio moderno, responsivo y profesional para un estudiante de Ingeniería en Sistemas especializado en **Backend** y **Desarrollo Móvil**.

## 🎨 Características

### Diseño
- **Tema Claro**: Blanco (#F6FCFB), Celeste (#C9F0EC) y Azul Marina (#122D30)
- **Tema Oscuro**: Negro Azulado (#24272D), Azul Oscuro (#3D387B) y Lila (#625C98)
- **Degradados personalizados** en ambos temas
- **Responsivo** - Mobile-first design
- **Animaciones suaves** y transiciones elegantes
- **Dark mode** con toggle automático

### Secciones

1. **Presentación (Hero)**
   - Avatar/foto del perfil
   - Título y descripción
   - Botones de llamada a la acción
   - Enlaces a redes sociales

2. **Sobre Mí**
   - Descripción personal
   - Habilidades por categoría:
     - Backend (Node.js, Express, Python, Django, etc.)
     - Móvil (React Native, Flutter, etc.)
     - Otros (TypeScript, Git, Docker, AWS, etc.)

3. **Formación**
   - Educación universitaria
   - Certificaciones
   - Experiencia académica y personal

4. **Proyectos**
   - Grid responsivo de 6 proyectos
   - Tarjetas con información detallada
   - Badges de categoría (Backend/Móvil)
   - Enlaces a GitHub y demos

5. **Contacto**
   - Formulario de contacto funcional
   - Información de contacto
   - Enlaces a redes sociales

6. **Footer**
   - Enlaces rápidos
   - Información de copyright

## 🛠️ Tecnologías

- **Next.js 16** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos y diseño
- **next-themes** - Sistema de temas
- **Lucide React** - Iconografía
- **shadcn/ui** - Componentes base

## 📁 Estructura del Proyecto

```
/components
  ├── Header.tsx          # Navegación y toggle de tema
  ├── Hero.tsx            # Sección de presentación
  ├── About.tsx           # Sobre mí y habilidades
  ├── Education.tsx       # Formación y certificaciones
  ├── Projects.tsx        # Galería de proyectos
  ├── ProjectCard.tsx     # Tarjeta individual de proyecto
  ├── Contact.tsx         # Formulario de contacto
  ├── Footer.tsx          # Pie de página
  └── theme-provider.tsx  # Proveedor de temas

/app
  ├── page.tsx            # Página principal
  ├── layout.tsx          # Layout raíz
  ├── globals.css         # Estilos globales y variables CSS
  └── scroll.css          # Estilos del scrollbar

/public
  ├── project-backend.jpg  # Imagen de proyectos backend
  ├── project-mobile.jpg   # Imagen de proyectos móvil
  └── profile-avatar.jpg   # Avatar del perfil
```

## 📱 Responsive Design

El portafolio es completamente responsivo:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accesibilidad

- Estructura semántica HTML5
- Labels apropiados en formularios
- Contraste de colores suficiente
- ARIA labels donde es necesario
- Navegación por teclado funcional

## 🌓 Modo Oscuro

El portafolio incluye soporte completo para tema oscuro:
- Toggle manual en el header
- Respeta preferencia del sistema
- Transiciones suaves entre temas
- Colores optimizados para ambos modos

## 📊 Rendimiento

- Optimizado para Core Web Vitals
- Imágenes optimizadas
- CSS purificado con Tailwind
- Lazy loading de componentes

