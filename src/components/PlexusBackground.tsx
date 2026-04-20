import { useEffect, useRef } from "react"

type Point = { x: number; y: number; vx: number; vy: number }

const MAX_DIST = 130
const N = 55

export function PlexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const node = canvasRef.current
    if (!node) return
    const context = node.getContext("2d")
    if (!context) return
    const surface: HTMLCanvasElement = node
    const graphics: CanvasRenderingContext2D = context

    let points: Point[] = []
    let w = 0
    let h = 0
    let raf = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      surface.width = w * dpr
      surface.height = h * dpr
      surface.style.width = `${w}px`
      surface.style.height = `${h}px`
      graphics.setTransform(dpr, 0, 0, dpr, 0, 0)

      points = Array.from({ length: N }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    function step() {
      graphics.fillStyle = "#050510"
      graphics.fillRect(0, 0, w, h)

      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        p.x = Math.max(0, Math.min(w, p.x))
        p.y = Math.max(0, Math.min(h, p.y))
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i]
          const b = points[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.22
            graphics.strokeStyle = `rgba(0, 179, 161, ${alpha})`
            graphics.lineWidth = 0.6
            graphics.beginPath()
            graphics.moveTo(a.x, a.y)
            graphics.lineTo(b.x, b.y)
            graphics.stroke()
          }
        }
      }

      for (const p of points) {
        graphics.fillStyle = "rgba(0, 255, 170, 0.55)"
        graphics.beginPath()
        graphics.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        graphics.fill()
      }

      raf = requestAnimationFrame(step)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(step)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden
    />
  )
}
