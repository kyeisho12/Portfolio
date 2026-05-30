"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Users, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
      color: "text-blue-500",
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: ["Figma", "Git", "GitHub", "Notion", "Microsoft Office"],
      color: "text-purple-500",
    },
    {
      title: "Programming Languages",
      icon: Wrench,
      skills: ["JavaScript", "TypeScript", "Java", "Python", "PHP"],
      color: "text-green-500",
    },
    {
      title: "Leadership & Soft Skills",
      icon: Users,
      skills: ["Team Leadership", "Project Management", "Communication", "Problem Solving"],
      color: "text-orange-500",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.title}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-sm">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>

          
        </div>
      </div>
    </section>
  )
}
