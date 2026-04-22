export const profile = {
  firstName: "Imane",
  name: "Imane Richi",
  headlineFr: "Développeuse full stack + UX/UI Design",
  headlineEn: "Full Stack Developer + UX/UI Design",
  taglineFr:
    "Je conçois des expériences digitales modernes — du prototype à la mise en production, avec une attention constante à l’utilisateur.",
  taglineEn:
    "I build modern digital experiences — from prototype to production, with a constant focus on the end user.",
  email: "imanerichi8@gmail.com",
  phone: "0660188611",
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
    descFr: "Applications React / TypeScript performantes, Express.js, PostgreSQL, etc.",
    descEn: "High-performance React/TypeScript apps.",
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
  imageMode?: "cover" | "contain"
  imagePosition?: string
  imageBgClassName?: string
}

export type ProjectFilter = {
  id: ProjectCategory
  labelFr: string
  labelEn: string
}

export const projects: Project[] = [
  {
    title: "Application web de covoiturage pour femmes",
    descFr:
      "Plateforme de covoiturage dédiée aux femmes : recherche de trajets, profils, et messagerie pour organiser des déplacements en confiance.",
    descEn:
      "Women-focused carpooling web app: ride search, profiles, and messaging to plan trips with confidence.",
    stack: ["Angular", "Spring Boot"],
    category: "fullstack" as const,
    featured: true,
    github: "https://github.com",
    demo: "https://vercel.app",
    image: "/yala-covoiturage.png",
    imageMode: "contain",
    imageBgClassName: "bg-white",
  },
  {
    title: "Admin IA Coffee Dashboard",
    descFr:
      "Interface full stack de monitoring pour robot barista. Centralise les commandes et les données clients collectées par l’IA, avec suivi en temps réel des statistiques et de l’activité.",
    descEn:
      "Full‑stack monitoring dashboard for a barista robot. Centralizes orders and AI-collected customer data, with real-time stats and user activity tracking.",
    stack: ["React", "Express", "Node.js"],
    category: "fullstack" as const,
    featured: true,
    github: "https://github.com",
    demo: "",
    image: "/coffee-dashboard.png",
    imageMode: "contain",
    imageBgClassName: "bg-[#041018]",
  },
  {
    title: "E-commerce cosmétiques",
    descFr:
      "Site e-commerce de cosmétiques : catalogue, panier, authentification et back-office. Frontend en EJS, backend Express, base de données MongoDB Atlas.",
    descEn:
      "Cosmetics e-commerce website: catalog, cart, authentication, and admin area. EJS frontend, Express backend, MongoDB Atlas database.",
    stack: ["EJS", "Express", "MongoDB Atlas"],
    category: "fullstack" as const,
    featured: true,
    github: "https://github.com",
    demo: "",
    image: "/cosmetics-ecommerce.png",
    imageMode: "cover",
    imagePosition: "object-center",
    imageBgClassName: "bg-[#f4efe8]",
  },
]

export const projectFilters: ProjectFilter[] = [
  { id: "all", labelFr: "Tous", labelEn: "All" },
  { id: "fullstack", labelFr: "Full stack", labelEn: "Full stack" },
  { id: "frontend", labelFr: "Frontend", labelEn: "Frontend" },
  { id: "backend", labelFr: "Backend", labelEn: "Backend" },
]
