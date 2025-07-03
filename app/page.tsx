import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { FlowingStars } from "@/components/flowing-stars"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <FlowingStars />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
