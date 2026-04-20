import { motion } from "framer-motion"
import { services } from "../data/content"
import { useI18n } from "../i18n"

const SNAP = [0.22, 1, 0.36, 1] as const

export function Services() {
  const { lang, t } = useI18n()
  return (
    <section
      id="services"
      className="relative scroll-mt-20 px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-gradient-neon md:text-4xl"
        >
          {t("services_title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-400"
        >
          {t("services_sub")}
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={lang === "fr" ? s.titleFr : s.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: SNAP }}
              className="glass-panel group rounded-2xl border border-teal-400/20 bg-white/[0.03] p-6 transition-shadow hover:shadow-[0_0_40px_-10px_rgba(0,255,170,0.22)]"
            >
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-200">
                {lang === "fr" ? s.titleFr : s.titleEn}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {lang === "fr" ? s.descFr : s.descEn}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
