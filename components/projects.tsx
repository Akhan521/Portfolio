"use client"

import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "GPT From Scratch",
      description:
        "Curious about how large language models like ChatGPT actually work, I set out to build one myself from scratch. No model libraries, no shortcuts. Just coffee, PyTorch, persistence, and a desire to deeply understand the mechanics of self-attention, tokenization, transformers, and transformer-based generation. Along the way, I implemented each component by hand, from multi-head attention to GPT-style autoregressive decoding, and trained my model entirely on my CPU. For training, I used the first six chapters of Winnie the Pooh, a childhood favorite of mine. It was a fun and meaningful way to learn while building, letting my model pick up on the whimsical tone and playful spirit of the stories that first sparked my imagination years ago.",
      image: "/gpt.png?height=400&width=600",
      tags: ["Python", "PyTorch", "Matplotlib", "NumPy", "Google Colab"],
      github: "https://github.com/Akhan521/GPT-From-Scratch",
      demo: "https://colab.research.google.com/drive/1pHiw6OKHFPuaUIHw2aJkLGNz1k-cHXLt?usp=sharing",
      featured: true,
    },
    {
      title: "Neural Style Transfer",
      description:
        "Ever wondered what your photos would look like as works of art? This project brings that idea to life using deep learning. I built a full desktop app that lets you upload two images, one as your content image (like a selfie or landscape) and another as your style image (like a Van Gogh painting). My app then blends them together, transferring the textures and colors of the style image onto your original photo, turning it into a completely new artistic creation. Users can experiment with different combinations and instantly preview their results. Everything runs in real-time on your own computer, with a clean interface that makes it easy for anyone, even without a technical background, to explore AI-powered creativity.",
      image: "/nst.png?height=400&width=600",
      tags: ["Python", "PyQt6", "PyTorch", "Pillow", "Matplotlib", "NumPy"],
      github: "https://github.com/Akhan521/Neural-Style-Transfer",
      demo: "https://github.com/Akhan521/Neural-Style-Transfer/releases",
      featured: true,
    },
    {
      title: "Ask GPT-2",
      description:
        "Can a small, general-purpose language model become better at answering questions with just a little guidance? In this short project, I fine-tuned a lightweight GPT-2 model using Hugging Face tools and the Guanaco QA dataset. The result: a model that answers basic questions more clearly, instead of just continuing text like the original GPT-2. This project was my way of exploring how fine-tuning can align a model with user intent, and thanks to Hugging Face's powerful libraries, I was able to train, evaluate, and deploy everything smoothly. There's even a Colab demo so anyone can try it out instantly, no setup needed.",
      image: "/ask-gpt.png?height=400&width=600",
      tags: ["Python", "Hugging Face", "PyTorch", "Transformers", "Fine-Tuning"],
      github: "https://github.com/Akhan521/Ask-GPT-2",
      demo: "https://colab.research.google.com/drive/1mIY6XrOPOAuhILn_oL9H4j_Y_bPvQio-?usp=sharing",
      featured: true,
    },
    {
      title: "8-Puzzle AI Solver",
      description:
        "The 8-Puzzle is a classic brain teaser, a 3x3 grid with numbered tiles and one empty space. Your goal? Slide the tiles around until they're back in order. This project brings 8-Puzzle to life using AI. Built in Python, it solves any puzzle setup you give it by using smart search algorithms like A* and Uniform Cost Search. You’ll watch your computer plan, think ahead, and solve the puzzle step by step, just like a human but faster. It’s not just a solver, it’s a peek into how AI makes decisions. You can compare different algorithms side by side, see how their strategies evolve, and explore how small changes in heuristics affect performance. Whether you're curious about AI or just love puzzles, my project offers something fun and insightful for you to explore.",
      image: "/puzzle.png?height=400&width=600",
      tags: ["Python", "NumPy", "Matplotlib", "Pandas", "AI", "Algorithms"],
      github: "https://github.com/Akhan521/8-Puzzle-AI",
      // demo: "",
      featured: true,
    },
    {
      title: "Pixelate: An Inclusive Pixel Art Editor",
      description:
        "Pixelate is a pixel art creation platform built with inclusion in mind. More than 300 million people are affected by colorblindness worldwide, yet most design tools overlook accessibility. Inspired by friends and family members with color vision deficiencies, I wanted to build a tool with others that empowers everyone to create freely, regardless of how they see color. With smart filters tailored for the three most common types of colorblindness (protanopia, deuteranopia, tritanopia), an AI assistant for helpful suggestions, and a public gallery for sharing and discovery, Pixelate brings creativity and accessibility together. Whether you're an artist or just curious, I invite you to explore, create, and be part of a more inclusive digital art community.",
      image: "/pixelate.png?height=400&width=600",
      tags: ["Python", "PyQt6", "Firebase", "FastAPI", "OpenAI API", "Docker"],
      github: "https://github.com/Akhan521/Pixelate",
      demo: "https://github.com/Akhan521/Pixelate?tab=readme-ov-file#-pixelate-in-action",
      featured: true,
    },
  ]

  // Fixed star positions to avoid hydration mismatch
  const starPositions = [
    { left: 15, top: 20, delay: 0.5, duration: 3 },
    { left: 85, top: 10, delay: 1.2, duration: 2.5 },
    { left: 25, top: 80, delay: 2.1, duration: 3.5 },
    { left: 70, top: 60, delay: 0.8, duration: 2.8 },
    { left: 45, top: 30, delay: 1.8, duration: 3.2 },
    { left: 90, top: 75, delay: 0.3, duration: 2.2 },
    { left: 10, top: 45, delay: 2.5, duration: 3.8 },
    { left: 60, top: 15, delay: 1.5, duration: 2.7 },
    { left: 35, top: 90, delay: 0.9, duration: 3.1 },
    { left: 80, top: 40, delay: 2.2, duration: 2.9 },
    { left: 5, top: 70, delay: 1.1, duration: 3.4 },
    { left: 95, top: 25, delay: 1.9, duration: 2.4 },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Featured Projects
          </h2>

          {/* Floating Stars Animation Container */}
          <div className="relative">
            {/* Animated Stars - Only render after mount to avoid hydration mismatch */}
            {mounted && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {starPositions.map((star, i) => (
                  <div
                    key={i}
                    className="absolute animate-pulse"
                    style={{
                      left: `${star.left}%`,
                      top: `${star.top}%`,
                      animationDelay: `${star.delay}s`,
                      animationDuration: `${star.duration}s`,
                    }}
                  >
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                  </div>
                ))}
              </div>
            )}

            {/* Projects Grid with Staggered Animation */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-700 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="bg-gray-900/40 border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 group relative overflow-hidden h-full">
                    {/* Shooting Star Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute top-4 right-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 animate-pulse"></div>
                    </div>

                    {/* Project Image with Overlay */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Featured Badge with Star */}
                      {project.featured && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center animate-bounce">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Featured
                        </div>
                      )}

                      {/* Floating Action Buttons */}
                      <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="bg-black/50 hover:bg-black/70 text-white border border-gray-600/50 backdrop-blur-sm"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="bg-black/50 hover:bg-black/70 text-white border border-gray-600/50 backdrop-blur-sm"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-white text-xl group-hover:text-gray-100 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex-shrink-0 ml-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {project.description}
                      </p>

                      {/* Tech Stack with Constellation Effect */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-gray-800/50 text-gray-300 border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 relative"
                          >
                            <span className="relative z-10">{tag}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600/50 text-gray-300 hover:bg-gray-700/50 hover:text-white flex-1 bg-transparent transition-all duration-300 hover:border-gray-500"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white flex-1 border border-gray-600 transition-all duration-300 hover:scale-105"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Bottom Star Accent */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-1 bg-white rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.5}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Constellation Lines Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="w-full h-full opacity-10">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" />
                <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" />
                <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" />
                <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" />
              </svg>
            </div>

            {/* View More Projects Button */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 border border-gray-600"
                asChild
              >
                <a href="https://github.com/akhan521" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Interested in seeing more projects?
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
