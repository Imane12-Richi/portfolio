import { motion } from "framer-motion"
import { GitFork, Link2, Mail, Phone, Send } from "lucide-react"
import {  useState, useRef } from "react"
import { profile } from "../data/content"
import { Logo } from "./Logo"
import { useI18n } from "../i18n"
import emailjs from "@emailjs/browser"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sentHint, setSentHint] = useState(false)
  const { t } = useI18n()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const SERVICE_ID = import.meta.env.service_id;
    const TEMPLATE_ID = import.meta.env.template_id;
    const PUBLIC_KEY = import.meta.env.public_key;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => alert("Message sent successfully! 🎉"))
      .catch(() => alert("Something went wrong. Please try again."));
  };

  // function onSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault()
  //   const form = e.currentTarget
  //   const fd = new FormData(form)
  //   const name = String(fd.get("name") ?? "").trim()
  //   const email = String(fd.get("email") ?? "").trim()
  //   const message = String(fd.get("message") ?? "").trim()
  //   const subject = encodeURIComponent(
  //     name ? `Message portfolio — ${name}` : "Message depuis le portfolio",
  //   )
  //   const body = encodeURIComponent(
  //     [name && `Nom : ${name}`, email && `Email : ${email}`, "", message].filter(Boolean).join("\n"),
  //   )
  //   window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  //   setSentHint(true)
  //   window.setTimeout(() => setSentHint(false), 4000)
  // }

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 px-4 pb-24 pt-12 md:px-8 md:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          <span className="text-gradient-neon">{t("contact_title")}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-400"
        >
          {t("contact_sub")}
        </motion.p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <h3 className="text-lg font-bold text-white">{t("contact_info")}</h3>
            <p className="mt-2 text-sm text-slate-400">
              {t("contact_info_sub")}
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-xl border border-teal-400/20 bg-white/5 p-4 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-emerald-300/35 hover:text-emerald-200"
                >
                  <Mail className="size-5 shrink-0 text-emerald-300" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-xl border border-teal-400/20 bg-white/5 p-4 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-emerald-300/35 hover:text-emerald-200"
                >
                  <Phone className="size-5 shrink-0 text-teal-300" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-teal-400/20 bg-white/5 p-4 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-emerald-300/35 hover:text-emerald-200"
                >
                  <GitFork className="size-5 shrink-0 text-slate-400" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-teal-400/20 bg-white/5 p-4 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:border-emerald-300/35 hover:text-emerald-200"
                >
                  <Link2 className="size-5 shrink-0 text-slate-400" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="glass-panel rounded-2xl border border-teal-400/20 bg-white/[0.04] p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-white">{t("contact_send")}</h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-300">
                  {t("contact_name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-teal-400/20 bg-void/80 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/45 focus:ring-2 focus:ring-emerald-400/20"
                  placeholder={t("contact_name")}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                  {t("contact_email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-teal-400/20 bg-void/80 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/45 focus:ring-2 focus:ring-emerald-400/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                  {t("contact_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-xl border border-teal-400/20 bg-void/80 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-emerald-400/45 focus:ring-2 focus:ring-emerald-400/20"
                  placeholder={t("contact_message")}
                />
              </div>
              <button
                type="submit"
                className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white md:w-auto md:px-10"
              >
                <Send className="size-4" />
                {t("contact_btn")}
              </button>
              {sentHint ? (
                <p className="text-sm text-slate-500">
                  {t("contact_hint")}
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-teal-400/15 pt-10 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name} — {t("footer")}
        </p>
        <div className="mt-4 flex justify-center">
          <Logo compact />
        </div>
      </footer>
    </section>
  )
}
