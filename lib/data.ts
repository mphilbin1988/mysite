export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
}

export const siteConfig = {
  name: "Alex Rivera",
  role: "Full Stack Developer",
  email: "alex@alexrivera.dev",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/alexrivera",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/alexrivera",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/alexrivera",
    icon: "twitter",
  },
];

export const heroData = {
  greeting: "Hey, I'm",
  name: "Alex Rivera",
  tagline: "I craft digital experiences that live at the intersection of design and engineering.",
  description:
    "Full Stack Developer specializing in building exceptional web applications with modern technologies. Passionate about clean code, intuitive interfaces, and scalable architecture.",
  cta: {
    primary: "View My Work",
    secondary: "Download Resume",
  },
} as const;

export const aboutData = {
  paragraph:
    "I'm a developer who thrives on turning complex problems into elegant, user-friendly solutions. With over 5 years of experience spanning startups to enterprise, I've built everything from real-time trading platforms to AI-powered content systems. I believe great software is invisible — it just works, beautifully.",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "40+", label: "Projects Shipped" },
    { value: "15+", label: "Happy Clients" },
    { value: "99%", label: "Client Satisfaction" },
  ] satisfies Stat[],
} as const;

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "TypeScript", icon: "🔷", category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
  { name: "Framer Motion", icon: "🎬", category: "frontend" },
  { name: "Vue.js", icon: "💚", category: "frontend" },
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "GraphQL", icon: "◈", category: "backend" },
  { name: "Redis", icon: "🔴", category: "backend" },
  { name: "AWS", icon: "☁️", category: "backend" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "Git", icon: "📦", category: "tools" },
  { name: "Figma", icon: "🎭", category: "tools" },
  { name: "Vercel", icon: "▲", category: "tools" },
];

export const projects: Project[] = [
  {
    title: "Synapse AI",
    description:
      "An AI-powered content management platform that uses GPT-4 to generate, optimize, and schedule social media content across multiple channels.",
    image: "/projects/synapse.jpg",
    tags: ["Next.js", "OpenAI", "Prisma", "PostgreSQL", "Tailwind"],
    github: "https://github.com/alexrivera/synapse-ai",
    live: "https://synapse-ai.vercel.app",
    featured: true,
  },
  {
    title: "Velocity Trade",
    description:
      "Real-time cryptocurrency trading dashboard with live charts, portfolio tracking, and automated trading signals via WebSocket connections.",
    image: "/projects/velocity.jpg",
    tags: ["React", "TypeScript", "D3.js", "WebSocket", "Node.js"],
    github: "https://github.com/alexrivera/velocity-trade",
    live: "https://velocity-trade.vercel.app",
    featured: true,
  },
  {
    title: "Nomad Stays",
    description:
      "A modern booking platform for digital nomads, featuring interactive maps, real-time availability, and community reviews for co-living spaces worldwide.",
    image: "/projects/nomad.jpg",
    tags: ["Next.js", "Mapbox", "Supabase", "Stripe", "Tailwind"],
    github: "https://github.com/alexrivera/nomad-stays",
    live: "https://nomad-stays.vercel.app",
    featured: true,
  },
  {
    title: "DevPulse",
    description:
      "Developer productivity analytics tool that integrates with GitHub, Jira, and Slack to provide insights on code review cycles and team velocity.",
    image: "/projects/devpulse.jpg",
    tags: ["Vue.js", "Python", "FastAPI", "Chart.js", "Redis"],
    github: "https://github.com/alexrivera/devpulse",
    live: "https://devpulse.vercel.app",
    featured: false,
  },
];

export const contactData = {
  heading: "Let's Build Something Great",
  description:
    "Have a project in mind or just want to chat? I'm always open to discussing new opportunities, creative ideas, or ways to bring your vision to life.",
} as const;
