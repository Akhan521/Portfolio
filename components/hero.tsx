"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Handshake } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <h1 className="relative text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white animate-gradient">
              Hello, I'm Aamir!
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in-up delay-300">
            Aspiring Machine Learning Engineer & Software Developer
          </p>

          <p className="text-lg text-gray-400 mb-8 animate-fade-in-up delay-500 max-w-2xl mx-auto">
            Combining my passion for AI and machine learning with solid software skills to build thoughtful, intelligent tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-700">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 border border-gray-600"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up delay-1000">
            <a
              href="https://github.com/Akhan521"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/aamir-khan-aak521/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:aamirksfg@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
