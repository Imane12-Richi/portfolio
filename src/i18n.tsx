import { createContext, useContext, useMemo, useState } from "react"

export type Language = "fr" | "en"

type I18nValue = {
  lang: Language
  setLang: (lang: Language) => void
  toggle: () => void
  t: (key: keyof typeof dict.fr) => string
}

const dict = {
  fr: {
    nav_home: "Accueil",
    nav_services: "Services",
    nav_projects: "Réalisations",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    nav_cv: "Télécharger CV",
    nav_cv_missing: "Ajoute le lien CV dans content.ts",

    hero_hello: "Bonjour, je suis",
    hero_and_im: "Et je suis",
    hero_cta_work: "Voir les réalisations",
    hero_cta_contact: "Contact",
    hero_scroll: "Défiler",
    hero_github: "GitHub",
    hero_linkedin: "LinkedIn",

    services_title: "Mes services",
    services_sub: "Des offres claires pour passer de l’idée au produit en ligne.",

    projects_title_a: "Mes",
    projects_title_b: "récentes réalisations",
    projects_sub:
      "Aperçu de projets web et produits livrés — ajoutez vos captures dans content.ts (image).",
    projects_featured: "Featured",
    projects_live: "Live",

    skills_title: "Mes compétences",
    skills_sub: "Stack technique et niveau de maîtrise — à ajuster selon votre parcours.",

    contact_title: "Me contacter",
    contact_sub:
      "Collaborations, missions freelance ou échanges tech — réponse sous quelques jours.",
    contact_info: "Coordonnées",
    contact_info_sub: "Choisissez le canal qui vous convient :",
    contact_send: "Envoyer un message",
    contact_name: "Nom",
    contact_email: "Email",
    contact_message: "Message",
    contact_btn: "Envoyer",
    contact_hint: "Si rien ne s’ouvre, vérifiez qu’un client mail est configuré.",
    footer: "React, TypeScript & Tailwind.",
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_projects: "Portfolio",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_cv: "Download CV",
    nav_cv_missing: "Add your CV link in content.ts",

    hero_hello: "Hello, I'm",
    hero_and_im: "And I'm",
    hero_cta_work: "View work",
    hero_cta_contact: "Contact me",
    hero_scroll: "Scroll",
    hero_github: "GitHub",
    hero_linkedin: "LinkedIn",

    services_title: "My services",
    services_sub: "Clear offers to take your idea from concept to production.",

    projects_title_a: "My",
    projects_title_b: "recent work",
    projects_sub:
      "A selection of shipped projects — add screenshots in content.ts (image).",
    projects_featured: "Featured",
    projects_live: "Live demo",

    skills_title: "My skills",
    skills_sub: "Tech stack and proficiency — adjust to match your journey.",

    contact_title: "Get in touch",
    contact_sub:
      "Open to collaborations, freelance work, or a friendly tech chat.",
    contact_info: "Contact info",
    contact_info_sub: "Reach out through any of these channels:",
    contact_send: "Send a message",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_btn: "Send",
    contact_hint: "If nothing opens, make sure a mail app is configured.",
    footer: "React, TypeScript & Tailwind.",
  },
} as const

const I18nContext = createContext<I18nValue | null>(null)

function getInitialLanguage(): Language {
  const saved = localStorage.getItem("lang")
  if (saved === "fr" || saved === "en") return saved
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en"
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => getInitialLanguage())

  function setLang(next: Language) {
    setLangState(next)
    localStorage.setItem("lang", next)
  }

  const value = useMemo<I18nValue>(() => {
    return {
      lang,
      setLang,
      toggle: () => setLang(lang === "fr" ? "en" : "fr"),
      t: (key) => dict[lang][key],
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const v = useContext(I18nContext)
  if (!v) throw new Error("useI18n must be used within I18nProvider")
  return v
}

