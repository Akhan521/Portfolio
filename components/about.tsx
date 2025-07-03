"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Rocket, Heart, User, Coffee, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
      // Languages
      "Python",
      "C++",
      "JavaScript",

      // Core ML
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation & Selection",
      "Feature Engineering",

      // Deep Learning
      "Deep Learning",
      "Neural Networks",
      "Convolutional Neural Networks (CNNs)",
      "Recurrent Neural Networks (RNNs)",
      "Transformers",
      "Backpropagation",
      "Hyperparameter Tuning",

      // Frameworks & Libraries
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",

      // Application Areas
      "Natural Language Processing (NLP)",

      // Dev Tools & Platforms
      "Docker",
      "Git",
      "Firebase",
      "FastAPI",

      // Libraries / APIs
      "OpenAI API",
      "PyQt6",

      // General Software Skills
      "Software Engineering",
      "Algorithm Design",
      "Model Optimization",

      // Soft Skills / Qualitative
      "Teaching & Mentorship",
      "Technical Communication",
      "Continuous Learning",
    ];


  const interests = [
    { icon: <Brain className="h-6 w-6" />, title: "AI & ML", desc: "Creating intelligent tools and systems" },
    { icon: <Code className="h-6 w-6" />, title: "Software Dev.", desc: "Scalable and meaningful applications" },
    { icon: <BookOpen className="h-6 w-6" />, title: "Continuous Learning", desc: "Always learning more" },
    { icon: <Heart className="h-6 w-6" />, title: "Problem Solving", desc: "Creative solutions and collaboration" },
    { icon: <User className="h-6 w-6" />, title: "Teaching & Mentorship", desc: "Helping others grow while growing myself" },
    { icon: <Coffee className="h-6 w-6" />, title: "Coffee", desc: "A true blessing from God" },
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            About Me
          </h2>

          {/* Main Content - Tighter spacing */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Personal Story - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="bg-gray-900/40 border-gray-700/30 backdrop-blur-sm h-fit">
                <CardContent className="p-5">
                  <div className="flex items-center mb-3">
                    <User className="h-5 w-5 text-gray-300 mr-2" />
                    <h3 className="text-lg font-bold text-white">My Journey</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                    I’m still learning what it means to be a great engineer, but one thing’s certain: I love pushing the boundaries of what machine learning and software can do. 
                    Whether it’s testing a new algorithm or staring up at a clear night sky, I’m always looking for patterns and possibilities.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                    I believe the best technology doesn’t just work, it feels right too. 
                    I’m drawn to tools and systems that are intuitive, human-centered, and built to solve real problems. 
                    For me, engineering is as much about curiosity and exploration as it is about intention.
                  </p>

                  {/* Fun Facts Inline - Tighter spacing */}
                  <div className="border-t border-gray-700/30 pt-3">
                    <h4 className="text-white font-semibold mb-2 flex items-center text-sm">
                      <Coffee className="h-4 w-4 mr-2" />
                      Quick Facts
                    </h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                      <div>🕌 Islam inspires my best self</div>
                      <div>🧠 Built a GPT model from scratch</div>
                      <div>☕ Coffee fuels my code</div>
                      <div>🧩 Always up for a coding puzzle</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Section - Reduced spacing */}
              <Card className="bg-gray-900/40 border-gray-700/30 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-white mb-3">Technologies & Skills</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300 text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests - Takes 1 column, optimized spacing */}
            <div>
              <Card className="bg-gray-900/40 border-gray-700/30 backdrop-blur-sm">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-white mb-4">What Drives Me</h3>
                  <div className="space-y-3">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/30 border border-gray-700/20 rounded-lg p-3 hover:bg-gray-700/40 transition-all duration-300 group"
                      >
                        <div className="flex items-start space-x-2">
                          <div className="text-gray-300 group-hover:text-white transition-colors mt-0.5 flex-shrink-0">
                            {interest.icon}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-white font-semibold text-sm mb-1 leading-tight">{interest.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{interest.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
