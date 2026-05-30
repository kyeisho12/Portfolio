"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:guian.francisco17@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "guian.francisco17@gmail.com",
      href: "mailto:guian.francisco17@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 991-511-8612",
      href: "tel:+639915118612",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sitio Tarvet, San Rafael, Tarlac City",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kyeisho12",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/guian.francisco16",
      color: "hover:text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/guian-carlo-vergara-francisco-a62909355",
      color: "hover:text-blue-700",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and
            leadership.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full group">
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon
                    return (
                      <div key={info.label} className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-muted">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{info.label}</div>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Connect with me</CardTitle>
                  <CardDescription>Follow my work and connect on social platforms.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-lg bg-muted hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 ${social.color}`}
                          title={social.label}
                        >
                          <IconComponent className="h-5 w-5" />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Let's collaborate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Open to internships, freelance projects, technical support roles, AI-related opportunities, and collaborative technology projects. Feel free to reach out if you'd like to work together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
