import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "./Logo"
import { useI18n } from "../i18n"
import { profile } from "../data/content"

const SNAP = [0.22, 1, 0.36, 1] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, toggle, t } = useI18n()
  const links = [
    { href: "#accueil", label: t("nav_home") },
    { href: "#services", label: t("nav_services") },
    { href: "#projets", label: t("nav_projects") },
    { href: "#competences", label: t("nav_skills") },
    { href: "#contact", label: t("nav_contact") },
  ]

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: SNAP }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-teal-400/15 bg-void/75 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 lg:gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-emerald-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-teal-400/20 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 backdrop-blur transition-colors hover:border-emerald-300/35 hover:text-emerald-200"
            aria-label="Toggle language"
            title="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          {profile.cvUrl ? (
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gradient hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-block"
            >
              {t("nav_cv")}
            </a>
          ) : (
            <button
              type="button"
              disabled
              title={t("nav_cv_missing")}
              className="hidden cursor-not-allowed rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/60 md:inline-block"
            >
              {t("nav_cv")}
            </button>
          )}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-teal-400/15 bg-void/95 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-lg py-3 text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              {profile.cvUrl ? (
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gradient mt-2 block rounded-full py-3 text-center font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {t("nav_cv")}
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title={t("nav_cv_missing")}
                  className="mt-2 block w-full cursor-not-allowed rounded-full border border-white/15 bg-white/5 py-3 text-center font-semibold text-white/60"
                >
                  {t("nav_cv")}
                </button>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
