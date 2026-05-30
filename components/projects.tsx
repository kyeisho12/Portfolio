"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "University Career Service Management System",
      description:
        "A full-stack career services platform developed as our undergraduate thesis. The system centralizes student profiles, résumé building, job postings, and event management while integrating an AI-powered mock interview module using speech-to-text, semantic evaluation, and adaptive follow-up question generation.",
      technologies: ["React", "Python", "Supabase", "Whisper", "RoBERTa", "Phi-3 Mini"],
      github: "https://github.com/kyeisho12/universityApp.git",
      liveDemo: "https://university-app-pink.vercel.app/login",
      type: "AI / Full Stack",
      status: "Completed",
      image: "/universityApp.png",
    },
    {
      title: "Discord Payroll & Attendance Bot",
      description:
        "A custom Discord bot developed for a remote content production team that automates payroll computation and attendance tracking. The system reduces manual administrative work, improves record accuracy, and streamlines weekly payroll processing.",
      technologies: ["Python", "Discord.py"],
      github: "https://github.com/kyeisho12/DCBot.git",
      type: "Automation",
      status: "Completed",
      image: "/discordapp.avif",
    },
    {
      title: "TEMU Redesign",
      description:
        "A modern redesign of the TEMU e-commerce platform focusing on improved user experience and clean interface design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kyeisho12/TEMU-redesign.git",
      type: "Frontend",
      status: "Completed",
      image: "/temu-screenshot.png",
    },
    {
      title: "HeyBrew Coffee Shop",
      description:
        "A comprehensive web application for a coffee shop featuring menu management, ordering system, and customer interface.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/kyeisho12/HEY-BREW-1.git",
      type: "Full Stack",
      status: "Completed",
      image: "/heybrew-screenshot.png",
    },
    {
      title: "Page Replacement Algorithm",
      description:
        "Interactive visualization of various page replacement algorithms including FIFO, LRU, and Optimal algorithms for educational purposes.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kyeisho12/Page-Replacement-Algorithm.git",
      type: "Educational",
      status: "Completed",
      image: "/Pagereplace.png",
    },
    {
      title: "OJT Task Logger",
      description:
        "A task management system designed for OJT students to track their daily activities, progress, and learning outcomes.",
      technologies: ["TypeScript", "React", "CSS"],
      github: "https://github.com/kyeisho12/OJT-Task-Log.git",
      liveDemo: "https://v0-simple-task-logger.vercel.app",
      type: "Productivity",
      status: "Completed",
      image: "/task%20logger.png",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-primary/10 text-primary border-primary/20"
      case "In Progress":
        return "bg-accent/10 text-accent border-accent/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="projects" className="py-24 bg-linear-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my experience in web development, AI integration, workflow automation,
              productivity systems, and problem-solving through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group card-hover overflow-hidden border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} font-medium`}>{project.status}</Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary" className="magnetic-btn" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.liveDemo && (
                        <Button size="sm" className="magnetic-btn" asChild>
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl font-sans group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs font-medium shrink-0">
                      {project.type}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 magnetic-btn bg-transparent" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    {project.liveDemo && (
                      <Button size="sm" className="flex-1 magnetic-btn" asChild>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center fade-in-scale">
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-linear-to-r from-primary/5 to-accent/5 border border-primary/10">
              <div className="text-left">
                <h3 className="font-sans font-semibold text-lg mb-1">Explore More Projects</h3>
                <p className="text-sm text-muted-foreground">Check out my complete collection on GitHub</p>
              </div>
              <Button size="lg" className="magnetic-btn shrink-0" asChild>
                <a
                  href="https://github.com/kyeisho12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
