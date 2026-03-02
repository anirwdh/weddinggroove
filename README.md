# The Wedding Groove - Luxury Wedding Choreography

A production-level luxury wedding choreography website built with React + Vite, optimized for performance, SEO, and Vercel deployment.

## 🚀 Features

- **⚡ Fast Load**: Optimized with lazy loading and code splitting
- **📈 SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **🧩 Scalable Architecture**: Clean component structure with CSS modules
- **🎯 Luxury Design**: Video hero, smooth animations, premium aesthetics
- **📱 Responsive**: Mobile-first design with fluid layouts
- **🎬 Video Optimized**: Production-ready video handling

## 🛠 Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Lightning-fast build tool
- **CSS Modules** - Scoped styling for maintainability
- **React Helmet Async** - SEO meta management
- **Framer Motion** - Smooth animations
- **React Intersection Observer** - Lazy loading performance

## 📁 Project Structure

```
src/
├── assets/
│   ├── videos/          # Hero and work videos
│   └── images/          # Founder image, logos
├── components/
│   ├── layout/          # Navbar, Footer
│   └── ui/              # Button, Container, SectionTitle
├── sections/            # Page sections
│   ├── Hero/            # Video hero section
│   ├── Work/            # Portfolio showcase
│   ├── Services/        # Service offerings
│   ├── Plans/           # Pricing packages
│   └── Founder/         # About section
├── seo/                 # SEO component
└── styles/              # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd wedding-groove

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 📊 Performance Optimization

### Video Guidelines
- **Hero Video**: Max 3MB, MP4 (H.264)
- **Work Videos**: Max 2MB each
- Use Handbrake for compression
- Preload="metadata" for faster initial load

### Image Guidelines
- Use WebP format
- Keep images under 200KB
- Optimize for mobile-first

### Lazy Loading
- Sections use Intersection Observer
- Videos load only when visible
- Code splitting for optimal performance

## 🔍 SEO Features

- Complete meta tags and Open Graph
- Semantic HTML5 structure
- Proper heading hierarchy
- Canonical URLs
- Mobile-responsive design
- Fast loading optimization

## 📱 Vercel Deployment

### Automatic Deployment
1. Push to GitHub repository
2. Connect to Vercel
3. Auto-deploy on main branch

### Manual Deployment
```bash
# Build and deploy
npm run build
vercel --prod
```

### Environment Variables
Set these in Vercel dashboard:
- `NODE_ENV=production`

## 🎯 Performance Targets

- **Performance**: 95+
- **SEO**: 100
- **Accessibility**: 95+
- **Best Practices**: 100

## 🛠 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📝 Content Guidelines

### Video Assets
- Place hero video in `src/assets/videos/hero.mp4`
- Work videos in `src/assets/videos/work1.mp4`, etc.
- Ensure videos are optimized for web

### Image Assets
- Founder image: `src/assets/images/founder.webp`
- Logo: `src/assets/images/logo.svg`
- Use WebP format for photos

## 🎨 Customization

### Colors
- Primary Gold: `#d4af37`
- Dark Background: `#0a0a0a`
- Light Background: `#111`
- Card Background: `#1a1a1a`

### Typography
- System font stack for performance
- Responsive font sizes with clamp()
- Proper line heights for readability

## 🚀 Production Checklist

- [ ] Optimize all videos (under 3MB)
- [ ] Convert images to WebP
- [ ] Test Lighthouse scores
- [ ] Verify SEO meta tags
- [ ] Test mobile responsiveness
- [ ] Set up domain on Vercel
- [ ] Configure SSL certificate

## 📞 Contact

For deployment issues or questions:
- Email: hello@theweddinggroove.com
- Phone: +91 98765 43210

---

**Built with ❤️ for luxury weddings in India**
