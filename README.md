# Luke Grady - Portfolio

A modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. Showcases data engineering, machine learning, and full-stack development projects with a focus on production-grade systems.

## 🚀 Live Demo

Visit the portfolio at: [https://lukegrady1.github.io/portfolio/](https://lukegrady1.github.io/portfolio/)

## ✨ Features

- **Modern Design**: Clean, professional layout with dark/light theme support
- **Responsive**: Optimized for all device sizes
- **Performance**: Built with Vite for fast development and optimized builds
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **3D Elements**: Subtle Three.js starfield background
- **Accessibility**: WCAG compliant with semantic HTML and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and social sharing
- **Type Safe**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Routing**: React Router v6
- **Forms**: React Hook Form with Zod validation
- **SEO**: React Helmet Async
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   ├── home/           # Home page sections
│   │   ├── visuals/        # Visual effects (Starfield, ProgressBar)
│   │   └── ui/             # Base UI components
│   ├── pages/              # Route components
│   ├── lib/                # Utilities and types
│   └── assets/             # Static assets
├── public/                 # Public assets
└── dist/                   # Build output
```

## 🎯 Pages & Features

### Home Page
- **Hero Section**: Animated introduction with rotating role descriptions
- **Featured Projects**: Showcase of top 3 projects with KPIs
- **Skills**: Interactive skill proficiency bars
- **Timeline**: Education and experience with achievements
- **Starfield Background**: Subtle 3D particle system

### Projects
- Filterable project grid
- Detailed case studies with:
  - Problem context and approach
  - Technical architecture
  - Key results and metrics
  - Code examples and lessons learned

### Resume
- Interactive resume with PDF download
- Chronological experience and education
- Technical skills breakdown
- Achievements and quantified results

### Contact
- Validated contact form
- Response time expectations
- Social media links
- Collaboration opportunities

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lukegrady1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Accessibility**: WCAG AA compliant

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) for CTAs and highlights
- **Muted**: Gray scale for secondary text and borders
- **Background**: Dynamic light/dark theme support

### Typography
- **Sans Serif**: Inter for body text and headings
- **Monospace**: JetBrains Mono for code blocks

### Spacing
- 8px grid system with Tailwind spacing scale
- Consistent padding and margins throughout

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚢 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   The `dist/` folder contains the built site ready for deployment.

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set source to "GitHub Actions"
3. The workflow will automatically deploy on push to main

## 🎯 Performance Optimizations

- **Code Splitting**: Dynamic imports for route-based splitting
- **Image Optimization**: Responsive images with proper sizing
- **Font Loading**: Preloaded fonts with display swap
- **Bundle Analysis**: Webpack Bundle Analyzer for size optimization
- **Lazy Loading**: Components and images load on demand

## 🧪 Testing

- **Type Safety**: Full TypeScript coverage
- **Build Validation**: CI/CD pipeline ensures builds pass
- **Accessibility**: Automated a11y testing in development

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: luke@example.com
- **LinkedIn**: [linkedin.com/in/luke-grady](https://linkedin.com/in/luke-grady)
- **GitHub**: [github.com/lukegrady1](https://github.com/lukegrady1)

---

Built with ❤️ by Luke Grady | WPI CS '26