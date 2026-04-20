import { useId } from "react"

type LogoProps = {
  className?: string
  compact?: boolean
  /** Taille du pictogramme (classes Tailwind) */
  markClassName?: string
}

/**
 * Logo tech en format cercle : anneau néon, pastilles type IDE, touches &lt; &gt;,
 * monogramme IR. Dégradé avec id unique (useId) car le logo peut être rendu 2×.
 */
function MarkIcon({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "")
  const gradId = `logo-grad-${uid}`
  const clipId = `logo-clip-${uid}`
  const glowId = `logo-glow-${uid}`

  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden>
      <defs>
        <linearGradient
          id={gradId}
          x1="2"
          y1="2"
          x2="38"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#34d399" />
          <stop offset="0.45" stopColor="#14b8a6" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
        <radialGradient id={glowId} cx="30%" cy="25%" r="65%">
          <stop stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="0.45" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <clipPath id={clipId}>
          <circle cx="20" cy="20" r="16.25" />
        </clipPath>
      </defs>

      {/* Disque + anneau néon */}
      <circle cx="20" cy="20" r="18.75" fill="#041018" stroke={`url(#${gradId})`} strokeWidth="2" />
      <circle cx="20" cy="20" r="16.25" fill={`url(#${glowId})`} />

      <g clipPath={`url(#${clipId})`}>
        {/* Pastilles type fenêtre / IDE */}
        <circle cx="13" cy="12" r="1.25" fill="#fb7185" opacity="0.95" />
        <circle cx="17" cy="12" r="1.25" fill="#facc15" opacity="0.95" />
        <circle cx="21" cy="12" r="1.25" fill="#4ade80" opacity="0.95" />

        <line
          x1="9"
          y1="15"
          x2="31"
          y2="15"
          stroke="#94a3b8"
          strokeOpacity="0.22"
          strokeWidth="0.75"
        />

        {/* Lignes type prompt */}
        <path
          d="M10 18.5h9M10 21h14"
          stroke="#64748b"
          strokeOpacity="0.38"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* Crochets code */}
        <path
          d="M11.5 26.5l-2.2 2.2 2.2 2.2"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M28.5 26.5l2.2 2.2-2.2 2.2"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />

        {/* Piste circuit bas */}
        <path
          d="M12 33.5h4l2-2.5h4"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </g>

      <text
        x="20"
        y="28.5"
        textAnchor="middle"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
        fontSize="11.5"
        fontWeight="700"
        fill="#ecfdf5"
        letterSpacing="-0.06em"
      >
        IR
      </text>
    </svg>
  )
}

export function Logo({
  className = "",
  compact = false,
  markClassName = "size-9 sm:size-10",
}: LogoProps) {
  return (
    <a
      href="#accueil"
      className={`group flex items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label="Imane Richi — accueil du portfolio"
    >
      <span className="inline-flex shrink-0 rounded-full drop-shadow-[0_0_14px_rgba(52,211,153,0.35)] transition-[filter] group-hover:drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]">
        <MarkIcon className={markClassName} />
      </span>
      {!compact && (
        <span className="hidden min-[380px]:flex flex-col items-start leading-tight">
          <span className="text-sm font-bold tracking-tight text-white sm:text-base">
            Imane Richi
          </span>
          <span className="font-mono text-[10px] text-emerald-200/90 sm:text-[11px]">
            <span className="text-teal-300/90">&lt;</span>
            ImaneRichi
            <span className="text-teal-300/90"> /&gt;</span>
          </span>
        </span>
      )}
    </a>
  )
}
