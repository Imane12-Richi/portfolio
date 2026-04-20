import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { profile, stats } from "../data/content"
import { useI18n } from "../i18n"

const SNAP = [0.22, 1, 0.36, 1] as const

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.17-3.35-1.17-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.11-4.54-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.39.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.93.68 1.88v2.78c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
      />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.39-1.86 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 2H1.77C.79 2 0 2.77 0 3.72v16.56C0 21.23.79 22 1.77 22h20.46c.98 0 1.77-.77 1.77-1.72V3.72C24 2.77 23.21 2 22.23 2Z"
      />
    </svg>
  )
}

export function Hero() {
  const [avatarOk, setAvatarOk] = useState(true)
  const showPhoto = profile.avatarUrl && avatarOk
  const { lang, t } = useI18n()

  return (
    <section
      id="accueil"
      className="relative scroll-mt-20 px-4 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36"
    >
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-emerald-300"
          >
            {t("hero_hello")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.55, ease: SNAP }}
            className="mt-2 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-2 text-base font-semibold text-slate-300 md:text-lg"
          >
            {t("hero_and_im")}{" "}
            <span className="text-gradient-neon">
              {lang === "fr" ? profile.headlineFr : profile.headlineEn}
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
          >
            {lang === "fr" ? profile.taglineFr : profile.taglineEn}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-6 flex items-center gap-3"
          >
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-teal-400/20 bg-white/5 text-slate-200 backdrop-blur transition-colors hover:border-emerald-300/35 hover:text-emerald-200"
              aria-label={t("hero_github")}
              title={t("hero_github")}
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-teal-400/20 bg-white/5 text-slate-200 backdrop-blur transition-colors hover:border-emerald-300/35 hover:text-emerald-200"
              aria-label={t("hero_linkedin")}
              title={t("hero_linkedin")}
            >
              <LinkedInIcon className="size-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {stats.map((s) => (
              <div
                key={lang === "fr" ? s.labelFr : s.labelEn}
                className="glass-panel rounded-xl border border-emerald-400/25 px-4 py-4 text-center sm:text-left"
              >
                <p className="text-2xl font-bold text-gradient-neon md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium leading-snug text-slate-400">
                  {lang === "fr" ? s.labelFr : s.labelEn}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projets"
              className="btn-gradient inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-white"
            >
              {t("hero_cta_work")}
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-emerald-400/35 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-teal-300/45"
            >
              {t("hero_cta_contact")}
            </a>
          </motion.div>

          <p className="mt-6 text-sm text-slate-500">{profile.location}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.65, ease: SNAP }}
          className="relative mx-auto flex w-full max-w-sm justify-center lg:mx-0 lg:max-w-none lg:justify-end"
        >
          <div className="relative aspect-square w-72 sm:w-80 md:w-96">
            <div
              className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-emerald-400/35 via-teal-400/25 to-sky-500/25 opacity-60 blur-3xl"
              aria-hidden
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-500 p-[3px] shadow-[0_0_50px_rgba(0,255,170,0.22)]">
              <div className="relative size-full overflow-hidden rounded-full bg-void">
                {showPhoto ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="size-full scale-110 object-cover object-center"
                    onError={() => setAvatarOk(false)}
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-gradient-to-br from-surface to-void">
                    <span className="font-mono text-5xl font-bold text-gradient-neon sm:text-6xl">
                      IR
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#services"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium uppercase tracking-widest text-slate-500"
      >
        {t("hero_scroll")}
        <ChevronDown className="size-5 animate-scroll-hint text-emerald-300" strokeWidth={2} />
      </a>
    </section>
  )
}
