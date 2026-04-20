export const profile = {
  firstName: "Imane",
  name: "Imane Richi",
  headlineFr: "Développeuse full stack + UX/UI Design",
  headlineEn: "Full Stack Developer + UX/UI Design",
  taglineFr:
    "Je conçois des expériences digitales modernes — du prototype à la mise en production, avec une attention constante à l’utilisateur.",
  taglineEn:
    "I build modern digital experiences — from prototype to production, with a constant focus on the end user.",
  email: "contact@exemple.com",
  phone: "+33 6 00 00 00 00",
  location: "France · Remote",
  /** Fichier dans public/ → URL à la racine : /nom.svg (pas /public/...) */
  avatarUrl: "/img.svg",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  cvUrl: "/imane.richi.pdf",
}

export const stats: Stat[] = [
  { value: "Junior", labelFr: "Profil full stack — en progression", labelEn: "Full stack profile — growing" },
  { value: "4+", labelFr: "Projets perso & exercices", labelEn: "Personal projects & practice" },
  { value: "100%", labelFr: "Motivation & apprentissage continu", labelEn: "Motivation & continuous learning" },
]

export const services: Service[] = [
  {
    titleFr: "Développement web",
    titleEn: "Web development",
    descFr: "Applications React / TypeScript performantes, SEO et accessibilité.",
    descEn: "High-performance React/TypeScript apps, SEO and accessibility.",
  },
  {
    titleFr: "UX/UI design",
    titleEn: "UX/UI design",
    descFr: "Maquettes, design system et parcours utilisateur clairs et cohérents.",
    descEn: "Wireframes, design systems, and clear user journeys.",
  },
  {
    titleFr: "API & backend",
    titleEn: "APIs & backend",
    descFr: "Services REST, bases de données et intégrations sécurisées.",
    descEn: "REST services, databases, and secure integrations.",
  },
  {
    titleFr: "Conseil & audit",
    titleEn: "Consulting & audit",
    descFr: "Revue de code, performance et feuille de route technique.",
    descEn: "Code review, performance, and a clear technical roadmap.",
  },
]

export type SkillIcon = "react" | "tailwind" | "palette" | "node" | "database" | "cloud"

export const skillCards: {
  name: string
  percent: number
  icon: SkillIcon
}[] = [
  { name: "React", percent: 90, icon: "react" },
  { name: "Tailwind", percent: 92, icon: "tailwind" },
  { name: "Figma", percent: 85, icon: "palette" },
  { name: "Node.js", percent: 88, icon: "node" },
  { name: "PostgreSQL", percent: 80, icon: "database" },
  { name: "Cloud / CI", percent: 78, icon: "cloud" },
]

export type ProjectCategory = "all" | "fullstack" | "frontend" | "backend"

export type Stat = {
  value: string
  labelFr: string
  labelEn: string
}

export type Service = {
  titleFr: string
  titleEn: string
  descFr: string
  descEn: string
}

export type Project = {
  title: string
  descFr: string
  descEn: string
  stack: string[]
  category: Exclude<ProjectCategory, "all">
  featured: boolean
  github: string
  demo: string
  image: string
}

export type ProjectFilter = {
  id: ProjectCategory
  labelFr: string
  labelEn: string
}

export const projects: Project[] = [
  {
    title: "SaaS analytics",
    descFr: "Tableaux de bord temps réel et agrégation de données.",
    descEn: "Real-time dashboards and data aggregation.",
    stack: ["React", "Node", "PostgreSQL"],
    category: "fullstack" as const,
    featured: true,
    github: "https://github.com",
    demo: "https://vercel.app",
    image: "",
  },
  {
    title: "API e-commerce",
    descFr: "Catalogue, panier et paiements modulaires.",
    descEn: "Catalog, cart, and modular payments.",
    stack: ["TypeScript", "Express", "Stripe"],
    category: "fullstack" as const,
    featured: true,
    github: "https://github.com",
    demo: "",
    image: "",
  },
  {
    title: "Design system",
    descFr: "Composants documentés et thèmes pour toute l’équipe.",
    descEn: "Documented components and themes for the whole team.",
    stack: ["React", "Storybook", "Tailwind"],
    category: "frontend" as const,
    featured: true,
    github: "",
    demo: "https://example.com",
    image: "",
  },
  {
    title: "Worker webhooks",
    descFr: "Files d’événements et retries pour intégrations.",
    descEn: "Event queues and retries for integrations.",
    stack: ["Node.js", "Redis"],
    category: "backend" as const,
    featured: false,
    github: "https://github.com",
    demo: "",
    image: "",
  },
]

export const projectFilters: ProjectFilter[] = [
  { id: "all", labelFr: "Tous", labelEn: "All" },
  { id: "fullstack", labelFr: "Full stack", labelEn: "Full stack" },
  { id: "frontend", labelFr: "Frontend", labelEn: "Frontend" },
  { id: "backend", labelFr: "Backend", labelEn: "Backend" },
]
