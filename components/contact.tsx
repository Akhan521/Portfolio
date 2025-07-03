"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { useEffect, useState } from "react"

export function Contact() {
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

    const element = document.getElementById("contact")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget;
      const firstName = (form[0] as HTMLInputElement).value;
      const lastName = (form[1] as HTMLInputElement).value;
      const email = (form[2] as HTMLInputElement).value;
      const subject = (form[3] as HTMLInputElement).value;
      const message = (form[4] as HTMLTextAreaElement).value;

      const fullName = `${firstName} ${lastName}`;
      const mailtoLink = `mailto:aamirksfg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${fullName}\nEmail: ${email}\n\n${message}`
      )}`;

      window.location.href = mailtoLink;
};


  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Connect with Me
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-300" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-sm">
                  I'm always on the lookout for new opportunities, collaboration, networking, and meaningful connections. 
                  Whether you'd like to chat about machine learning, space, nature, or the latest in tech, feel free to reach out!
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <Mail className="h-4 w-4 text-gray-300 flex-shrink-0" />
                    <span>aamirksfg@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 text-gray-300 flex-shrink-0" />
                    <span>Riverside, CA</span>
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600/50 text-gray-300 hover:bg-gray-700/50 bg-transparent text-xs px-3 py-2"
                    asChild
                  >
                    <a href="https://github.com/Akhan521" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600/50 text-gray-300 hover:bg-gray-700/50 bg-transparent text-xs px-3 py-2"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/aamir-khan-aak521/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-3 w-3 mr-1" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Send className="h-5 w-5 mr-2 text-gray-300" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Input
                        placeholder="First Name"
                        className="bg-gray-800/50 border-gray-600/30 text-gray-100 placeholder-gray-500 text-sm h-9"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Last Name"
                        className="bg-gray-800/50 border-gray-600/30 text-gray-100 placeholder-gray-500 text-sm h-9"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-800/50 border-gray-600/30 text-gray-100 placeholder-gray-500 text-sm h-9"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="bg-gray-800/50 border-gray-600/30 text-gray-100 placeholder-gray-500 text-sm h-9"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-gray-800/50 border-gray-600/30 text-gray-100 placeholder-gray-500 text-sm resize-none min-h-[100px] max-h-[200px] overflow-y-auto"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 border border-gray-600 text-sm h-9"
                  >
                    <Send className="h-3 w-3 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
