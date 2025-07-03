"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  trail: Array<{ x: number; y: number; opacity: number }>
}

export function FlowingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const scrollOffsetRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < 150; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          trail: [],
        })
      }
    }
    initStars()

    // Handle scroll
    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY * 0.5
    }
    window.addEventListener("scroll", handleScroll)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Update star position with scroll influence
        star.y += star.speed + scrollOffsetRef.current * 0.01

        // Add to trail
        star.trail.push({ x: star.x, y: star.y, opacity: star.opacity })
        if (star.trail.length > 8) {
          star.trail.shift()
        }

        // Reset star if it goes off screen
        if (star.y > canvas.height + 50) {
          star.y = -50
          star.x = Math.random() * canvas.width
        }

        // Draw trail
        star.trail.forEach((point, index) => {
          const trailOpacity = ((point.opacity * (index + 1)) / star.trail.length) * 0.3
          ctx.beginPath()
          ctx.arc(point.x, point.y, star.size * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`
          ctx.fill()
        })

        // Draw main star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)

        // Create glow effect
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        gradient.addColorStop(0.5, `rgba(200, 200, 255, ${star.opacity * 0.5})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.fill()

        // Twinkling effect
        star.opacity = Math.sin(Date.now() * 0.002 + star.x * 0.01) * 0.3 + 0.7
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
