import { Card } from "@/components/ui/card"
import { MapPin, GraduationCap, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I enjoy building systems that solve real problems. My projects range from AI-powered interview platforms and workflow automation tools to full-stack web applications and productivity systems. Through academic projects, leadership roles, and professional experience, I've developed a practical approach to technology—focusing on solutions that are useful, scalable, and easy to use.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Beyond development, I have experience in video editing, content production, and team coordination, giving me a strong understanding of both technical execution and user needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Sitio Tarvet, San Rafael, Tarlac City</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">BS Computer Science - Tarlac State University</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Expected Graduation: 2026</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Building responsive web applications using React, JavaScript, and modern development practices. Focused on creating clean interfaces, efficient workflows, and seamless user experiences.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Leadership Experience</h3>
                <p className="text-muted-foreground">
                  Led student organizations, managed teams, coordinated events, and worked with university stakeholders. Developed strong communication, project management, and organizational skills through leadership roles.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Constantly exploring AI tools, automation systems, software development, and emerging technologies. Committed to continuous improvement through hands-on projects and real-world problem solving.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
