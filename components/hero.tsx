"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Computer Science Graduate | AI Builder | Problem Solver"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Guian Carlo</span>
            <br />
            <span className="text-foreground">Francisco</span>
          </h1>

          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science graduate with experience in AI-powered applications, workflow automation, web development, and digital content production. Built an AI mock interview platform for  my final thesis atTarlac State University and developed tools that automate real business processes. Passionate about using technology to solve practical problems and create efficient user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="group">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact} className="group bg-transparent">
              <Mail className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/kyeisho12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/guian-carlo-vergara-francisco-a62909355"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <button
              onClick={scrollToContact}
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
