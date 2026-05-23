# Nichoe Ashley De Jesus - Portfolio Website

A modern, professional portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my projects, skills, and professional journey as a Computer Science student and aspiring Full-Stack Developer.

## 🌟 Features

- **Modern Design**: Combines clean, professional aesthetics with creative, interactive elements
- **Smooth Animations**: Rich scroll-based animations and transitions using Framer Motion
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Friendly**: Proper metadata and semantic HTML for better search visibility
- **Interactive Components**: Hover effects, scroll animations, and smooth transitions
- **Type Safe**: Written in TypeScript for better code quality and developer experience

## 🚀 Tech Stack

### Frontend
- JavaScript
- HTML
- CSS
- React
- Tailwind CSS

### Libraries & Frameworks
- React
- Tailwind CSS

### Backend & Tools
- Firebase
- Supabase
- Git
- GitHub

### Languages
- JavaScript
- Java

### Additional
- RESTful APIs
- Responsive UI
- Project Workflows

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills showcase
│   ├── Projects.tsx        # Featured projects
│   ├── Contact.tsx         # Contact form and social links
│   ├── Footer.tsx          # Footer with navigation
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionHeading.tsx
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashdejesus/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint to check code quality

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Click "Deploy"

3. **Your site is live!**
   - Vercel provides a production URL
   - All subsequent pushes to `main` will trigger automatic deployments

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repository to Netlify
- **GitHub Pages**: Use `next export` for static site generation
- **Self-hosted**: Build and deploy to your own server

## 🎨 Customization

### Update Personal Information

Edit the content in the following files:
- `components/Hero.tsx` - Name and introduction
- `components/About.tsx` - Bio and profile information
- `components/Skills.tsx` - Skills and technologies
- `components/Projects.tsx` - Project details
- `components/Contact.tsx` - Contact information and social links

### Modify Colors

Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  background: "#0a0a0a",
  foreground: "#ededed",
  primary: "#3b82f6",      // Change primary color
  secondary: "#8b5cf6",    // Change secondary color
  accent: "#06b6d4",       // Change accent color
}
```

### Add New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Update navigation if needed

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

This portfolio is optimized for performance:
- Next.js 15 App Router for fast navigation
- Lazy loading for images and components
- Optimized animations with Framer Motion
- Minimal JavaScript bundle size
- Fast Time to Interactive (TTI)

## 🔒 SEO & Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images
- ARIA labels for interactive elements
- Meta tags for social sharing
- Sitemap and robots.txt ready

## 📧 Contact

**Nichoe Ashley De Jesus**
- Email: dejesusnichoeashley81@gmail.com
- GitHub: [@ashdejesus](https://github.com/ashdejesus)
<!-- LinkedIn removed: no LinkedIn account -->
- X: [@yoboyikoy](https://x.com/yoboyikoy)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [bryllim.com](https://bryllim.com) and [jamby.netlify.app](https://jamby.netlify.app)
- Built with [Next.js](https://nextjs.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

Built with ❤️ by Nichoe Ashley De Jesus
