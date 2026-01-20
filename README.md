# Portfolio Website

A high-end, responsive portfolio website built for **Nikhil Kumar**, featuring modern SaaS design principles, sophisticated animations, and a performance-optimized tech stack.

## 🚀 Features

- **Premium SaaS Header**: Fixed navigation with backdrop blur and smooth hover effects.
- **Advanced Skills Grid**: High-end SaaS design featuring staggered animations and interactive "lift + glow" card effects.
- **Impact-Driven About Section**: Two-column layout with a professional summary and strategic performance metrics.
- **Responsive Projects Showcase**: Grid-based display of key engineering projects.
- **Modern Footer**: Centered layout with social link integration and muted aesthetics.
- **Seamless Animations**: Utilizing Framer Motion for scroll-triggered entry effects and smooth interactions.

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS v4** - Next-generation utility-first CSS framework for modern UI components
- **SCSS** - Powerful CSS preprocessor for base styles and layout utilities
- **Framer Motion** - Sophisticated animation library for high-end web interactions
- **Lucide React** - Beautifully simple, consistent icon set

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Header.jsx   # Premium fixed navigation
│   │   ├── Hero.jsx     # Dynamic landing section
│   │   ├── About.jsx    # Stats-driven professional bio
│   │   ├── Skills.jsx   # Advanced SaaS-style skills grid
│   │   ├── Projects.jsx # Project showcase
│   │   ├── Contact.jsx  # Interactive contact form
│   │   ├── Footer.jsx   # Minimal social footer
│   │   └── index.js     # Component entry point
│   ├── styles/      # Styling layer
│   │   ├── variables.scss  # Global design tokens
│   │   ├── mixins.scss      # Reusable layout utilities
│   │   ├── base.scss        # Reset and core styles
│   │   ├── typography.scss  # Type scale and classes
│   │   ├── components.scss  # Legacy component styles
│   │   └── main.scss        # Main stylesheet (SCSS + Tailwind)
│   ├── App.jsx      # Main application architecture
│   └── main.jsx     # Application entry point
├── index.html       # HTML5 template
├── vite.config.js  # Vite + Tailwind configuration
└── package.json     # Orchestration and dependencies
```

## 🎨 Styling

The project employs a dual-power styling approach:
- **Tailwind CSS v4**: Powers high-end components with utility-first precision and modern UI aesthetics.
- **SCSS**: Handles global design tokens, complex layout mixins, and foundational styles using BEM-like conventions.

## 📄 License

MIT
