import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HelpPopover from "@/components/HelpPopover";
import AnimatedHeroText from "@/components/AnimatedHeroText"; 
import {
  Mic,
  MessageSquare,
  User,
  Languages,
  Zap,
  Heart,
  Shield,
  Smartphone,
  Eye, // Added for new section
} from "lucide-react";
// ✅ 1. RE-ADDED HERO IMAGE IMPORT
import heroImage from "@/assets/hero-image.jpg"; 

const Home = () => {

  // ✅ 2. DEFINED KEY FEATURES FOR NEW INTRO SECTION
  const keyFeatures = [
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: "Live Captioning",
      description: "Real-time speech-to-text in 9+ Indian languages.",
    },
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: "AI Text Simplification",
      description: "Makes complex text easy for everyone to understand.",
    },
    {
      icon: <User className="h-8 w-8 text-success" />,
      title: "ISL Avatar Translation",
      description: "Converts text directly into Indian Sign Language.",
    },
  ];

  const allFeatures = [
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: "Real-Time Captioning",
      description:
        "Live speech-to-text transcription in 9 Indian languages with sub-2-second latency",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "AI Text Simplification",
      description:
        "Automatically simplify captions for low-literacy users with NLP-powered clarity",
    },
    {
      icon: <User className="h-8 w-8 text-success" />,
      title: "ISL Avatar Translation",
      description:
        "Watch text transform into Indian Sign Language through animated avatars",
    },
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: "Multilingual Support",
      description:
        "Hindi, English, Marathi, Gujarati, Tamil, Telugu, Bengali, Malayalam, Odia",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Low Latency",
      description:
        "End-to-end processing in under 3 seconds for seamless communication",
    },
    {
      icon: <Shield className="h-8 w-8 text-success" />,
      title: "Offline Ready",
      description:
        "Continue using core features even without internet connection",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4 fill-primary" />
                <span>Accessibility First</span>
              </div>

              <AnimatedHeroText />

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Experience multilingual speech-to-text captioning, AI-powered text simplification,
                and Indian Sign Language avatar translation—all in real-time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="btn-glare-effect btn-hero-shimmer"
                >
                  <Link to="/live-captioning">
                    Start Captioning
                    <span className="glare" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="btn-glare-effect"
                >
                  <Link to="/text-to-avatar">
                    Try Text to ISL
                    <span className="glare" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative animate-slide-up">
              {/* ✅ 3. RE-ADDED <img> TAG & FLOATING BADGES */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="People using accessibility technology with captions and sign language"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-2xl shadow-lg animate-bounce-subtle">
                <p className="text-sm font-semibold">9 Languages</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-2xl shadow-lg animate-bounce-subtle">
                <p className="text-sm font-semibold">&lt; 2s Latency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ 4. ADDED NEW INTRO & KEY FEATURES SECTION */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Small Intro Text */}
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Bridging Communication Gaps with AI
            </h2>
            <p className="text-lg text-muted-foreground">
              Clario is an all-in-one accessibility tool designed for India. We break down
              barriers for Deaf, hard-of-hearing, and low-literacy users with three core features.
            </p>
          </div>
          
          {/* Gradient Key Feature Boxes */}
          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="keyfeature-card">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create a truly inclusive experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-2 bg-background hover:border-primary transition-all duration-300 hover:shadow-lg rounded-2xl group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-[hsl(200,80%,60%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
            Ready to Experience Real-Time Accessibility?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands making communication accessible for Deaf, hard-of-hearing, and
            low-literacy communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-xl btn-glare-effect"
            >
              <Link to="/live-captioning">
                Get Started Free
                <span className="glare" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary btn-glare-effect"
            >
              <Link to="/about">
                Learn More
                <span className="glare" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <HelpPopover />
    </div>
  );
};

export default Home;