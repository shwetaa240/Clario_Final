// src/pages/About.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HelpPopover from "@/components/HelpPopover";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Mail, Github, Linkedin } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Team Member",
      role: "Founder & Lead Developer",
      image: "👨‍💻",
    },
    {
      name: "Team Member",
      role: "UX Designer",
      image: "👩‍🎨",
    },
    {
      name: "Team Member",
      role: "AI Engineer",
      image: "👨‍🔬",
    },
    {
      name: "Team Member",
      role: "Accessibility Expert",
      image: "👩‍💼",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-[hsl(200,80%,60%)] text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">About Clario</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Empowering communication and breaking barriers through AI-powered accessibility
              technology for Indian languages and sign language.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl border-2 hover:border-primary transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To make digital content accessible to everyone, regardless of hearing ability or
                  literacy level, through innovative AI technology.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 hover:border-accent transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where language and hearing differences never prevent meaningful
                  communication and access to information.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2 hover:border-success transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="bg-success/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Inclusivity, innovation, and impact drive everything we build—with accessibility
                  at the core of our development process.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="bg-muted/30 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Over 70 million deaf and hard-of-hearing individuals in India face daily
                  communication barriers. Traditional captioning services are often expensive,
                  delayed, and not available in regional languages. Additionally, low-literacy users
                  struggle with complex text, further limiting access to essential information.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Indian Sign Language (ISL) is the primary language for many in the Deaf community,
                  yet most digital content lacks ISL translation, creating a significant
                  accessibility gap.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">What We Do</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Clario provides real-time, multilingual speech-to-text captioning with AI-powered
                  text simplification and ISL avatar translation—all in one seamless platform. We
                  support 9 major Indian languages and deliver results with sub-2-second latency.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our emotion-aware interface and offline capabilities ensure that accessibility is
                  not just an afterthought, but a fundamental feature available to everyone,
                  everywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated group of developers, designers, and accessibility advocates working to
              make the digital world inclusive for all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="rounded-2xl border-2 hover:border-primary transition-all">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-6xl mx-auto">{member.image}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-primary to-[hsl(200,80%,60%)] text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Have questions, feedback, or want to collaborate? We'd love to hear from you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-glare-effect"
                asChild
              >
                <a href="mailto:hello@clario.com">
                  <Mail className="h-5 w-5" />
                  Email Us
                  <span className="glare" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-glare-effect"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub
                  <span className="glare" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-glare-effect"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                  <span className="glare" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <HelpPopover />
    </div>
  );
};

export default About;