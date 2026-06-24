import { Accessibility, Heart, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-transparent backdrop-blur-lg border-t border-border/30 animate-fade-in">
      {/* Gradient border on top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4 transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl shadow-md shadow-blue-500/20">
                <Accessibility className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Clario
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0">
              Empowering inclusivity with real-time multilingual captions and ISL translation.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Product</h3>
            <ul className="space-y-3">
              {[
                { name: "Live Captioning", path: "/live-captioning" },
                { name: "Text to Avatar", path: "/text-to-avatar" },
                { name: "Settings", path: "/settings" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Team", path: "#team" },
                { name: "Contact", path: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Mail, href: "mailto:hello@clario.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="font-semibold">Clario</span>. Built with accessibility at its core.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 animate-bounce-subtle" /> for inclusion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
