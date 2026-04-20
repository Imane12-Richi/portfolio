import { motion } from "framer-motion"
import type { ComponentType } from "react"
import {
  Cloud,
  Code2,
  Database,
  Palette,
  Server,
  Wind,
} from "lucide-react"
import { type SkillIcon, skillCards } from "../data/content"
import { useI18n } from "../i18n"

const SNAP = [0.22, 1, 0.36, 1] as const

const icons: Record<
  SkillIcon,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  react: Code2,
  tailwind: Wind,
  palette: Palette,
  node: Server,
  database: Database,
  cloud: Cloud,
}

export function Stack() {
  const { t } = useI18n()
  return (
    <section
      id="competences"
      className="relative scroll-mt-20 px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          {t("skills_title").includes("skills") ? (
            <>
              My <span className="text-gradient-neon">skills</span>
            </>
          ) : (
            <>
              Mes <span className="text-gradient-neon">compétences</span>
            </>
          )}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-400"
        >
          {t("skills_sub")}
        </motion.p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.45, ease: SNAP }}
                className="glass-panel flex flex-col rounded-2xl border border-teal-400/20 bg-white/[0.04] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/25 to-sky-500/20 text-emerald-200">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-bold text-white">{s.name}</span>
                  </div>
                  <span className="font-mono text-sm font-semibold text-emerald-200/90">
                    {s.percent}%
                  </span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: SNAP, delay: 0.1 }}
                  />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
