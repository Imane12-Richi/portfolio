import { motion } from "framer-motion"
import { ExternalLink, GitFork } from "lucide-react"
import { useMemo, useState } from "react"
import {
  type ProjectCategory,
  projectFilters,
  projects,
} from "../data/content"
import { useI18n } from "../i18n"

const SNAP = [0.22, 1, 0.36, 1] as const

const thumbGradients = [
  "from-emerald-500/85 via-teal-500/70 to-sky-600/85",
  "from-teal-500/85 via-cyan-500/70 to-sky-600/85",
  "from-sky-600/85 via-teal-500/70 to-emerald-500/85",
  "from-cyan-600/85 via-sky-600/70 to-teal-500/85",
]

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all")
  const { lang, t } = useI18n()

  const counts = useMemo(() => {
    const c: Record<ProjectCategory, number> = {
      all: projects.length,
      fullstack: 0,
      frontend: 0,
      backend: 0,
    }
    for (const p of projects) {
      c[p.category]++
    }
    return c
  }, [])

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section
      id="projets"
      className="relative scroll-mt-20 px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          {t("projects_title_a")}{" "}
          <span className="text-gradient-neon">{t("projects_title_b")}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-400"
        >
          {t("projects_sub")}
        </motion.p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f.id
                  ? "border-emerald-400/45 bg-emerald-400/10 text-emerald-200"
                  : "border-teal-400/15 bg-white/5 text-slate-400 hover:border-teal-300/25 hover:text-white"
              }`}
            >
              {lang === "fr" ? f.labelFr : f.labelEn}
              <span className="ml-1.5 tabular-nums opacity-70">{counts[f.id]}</span>
            </button>
          ))}
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {filtered.map((p) => {
            const gi = projects.indexOf(p)
            const grad = thumbGradients[gi % thumbGradients.length]
            return (
              <motion.li
                key={p.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: SNAP }}
              >
                <article className="glass-panel overflow-hidden rounded-2xl border border-teal-400/15 transition-shadow hover:shadow-[0_0_50px_-12px_rgba(0,255,170,0.18)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {p.image ? (
                      <div
                        className={`size-full ${p.imageBgClassName ?? "bg-black/20"}`}
                      >
                        <img
                          src={p.image}
                          alt=""
                          className={`size-full ${
                            p.imageMode === "contain" ? "object-contain" : "object-cover"
                          } ${p.imagePosition ?? "object-center"}`}
                        />
                      </div>
                    ) : (
                      <div
                        className={`flex size-full items-end justify-start bg-gradient-to-br p-6 ${grad}`}
                      >
                        <span className="rounded-lg bg-black/30 px-2 py-1 font-mono text-xs text-white/90 backdrop-blur-sm">
                          {String(gi + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                    {p.featured && (
                      <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-void">
                        {t("projects_featured")}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {lang === "fr" ? p.descFr : p.descEn}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-teal-400/20 bg-teal-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200/90"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {p.github ? (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-emerald-300/35 hover:text-emerald-200"
                        >
                          <GitFork className="size-4" />
                          GitHub
                        </a>
                      ) : null}
                      {p.demo ? (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
                        >
                          {t("projects_live")}
                          <ExternalLink className="size-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
