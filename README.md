# Pelumi Isola - Portfolio Website

A world-class, interactive portfolio website showcasing my skills, projects, and professional journey as a Full-Stack Software Engineer.

## 🌟 Features

- **Modern Design**: Clean, minimal aesthetic with glassmorphism effects and smooth animations
- **Dark/Light Mode**: Seamless theme toggle with system preference detection
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Sections**:
  - Animated hero section with profile showcase
  - Interactive skills display with animated progress bars
  - Project showcase with filtering and modal previews
  - Testimonials carousel
  - Blog/Insights section
  - Contact form with validation
- **Performance Optimized**: Built with Next.js 16 for optimal performance
- **SEO Friendly**: Comprehensive meta tags and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: GSAP, AOS (Animate On Scroll)
- **Icons**: Remix Icon
- **Fonts**: Space Grotesk, Source Sans 3, Monument Extended

## 🎨 Design System

### Color Palette
- **Primary**: #1560BD (Tech Blue)
- **Secondary**: #536878 (Blue Slate)
- **Accent**: #4682B4 (Steel Blue)
- **Background Light**: #FAFAFA
- **Background Dark**: #1C2328

### Typography
- **Headings**: Space Grotesk
- **Body**: Source Sans 3
- **Brand**: Monument Extended

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/philtechphilips/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── data/              # Mock data and content
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Modal.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── contexts/
│   └── ThemeContext.tsx   # Theme management
├── types/
│   └── index.ts           # TypeScript definitions
├── utils/
│   └── formatters.ts      # Utility functions
├── constants/
│   └── enums.ts           # Constants and enums
└── public/
    ├── fonts/             # Custom fonts
    └── images/            # Project images
```

## 🎯 Key Sections

### Hero Section
- Animated headline and introduction
- Profile image with glassmorphism effect
- Call-to-action buttons
- Social media links
- Scroll indicator

### Skills Section
- Category filtering (Frontend, Backend, Tools)
- Animated progress bars
- Interactive skill cards with hover effects

### Projects Section
- Project filtering by category
- Project cards with images and descriptions
- Modal with detailed project information
- Live demo and GitHub links

### Testimonials Section
- Auto-playing carousel
- Manual navigation controls
- Grid display of additional testimonials

### Contact Section
- Form with real-time validation
- Contact information display
- Social media links
- Copy email functionality

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast compliance

## 🔧 Customization

### Update Personal Information
Edit the files in `app/data/` to update:
- Projects
- Skills
- Testimonials
- Blog posts

### Change Colors
Modify the color palette in `tailwind.config.ts`

### Add New Sections
Create new components in `components/sections/` and import them in `app/page.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Pelumi Isola**
- Email: pelumiisola87@gmail.com
- LinkedIn: [linkedin.com/in/pelumi-isola-84661821a](https://www.linkedin.com/in/pelumi-isola-84661821a)
- GitHub: [github.com/philtechphilips](https://github.com/philtechphilips)

---

Built with ❤️ using Next.js and Tailwind CSS
