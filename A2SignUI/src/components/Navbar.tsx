import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Subtitles } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav
      className="
        sticky top-0 z-50 
        bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 
        backdrop-blur-xl 
        border-b border-blue-500/20 
        shadow-[0_4px_30px_rgba(59,130,246,0.1)] 
        animate-fade-in
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🌈 Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="
                bg-gradient-to-r from-blue-500 to-purple-500 
                rounded-xl p-2 
                shadow-md shadow-blue-500/20 
                group-hover:scale-110 group-hover:shadow-blue-500/40 
                transition-all duration-300
              "
            >
              <Subtitles className="h-6 w-6 text-white" />
            </div>
            <span
              className="
                text-xl font-extrabold 
                bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 
                bg-clip-text text-transparent
              "
            >
              Clario
            </span>
          </Link>

          {/* 💻 Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: "Live Captioning", path: "/live-captioning" },
              { label: "Text to Avatar", path: "/text-to-avatar" },
              { label: "About", path: "/about" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="
                  relative font-medium text-foreground 
                  hover:text-blue-500 transition-all duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 
                  after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 
                  hover:after:w-full after:transition-all after:duration-300
                "
              >
                {link.label}
              </Link>
            ))}

            <ThemeToggle />

            <Button
              asChild
              size="sm"
              className="
                bg-gradient-to-r from-blue-500 to-purple-500 
                hover:from-purple-500 hover:to-cyan-400 
                text-white font-semibold rounded-xl shadow-md 
                hover:shadow-blue-500/40 transition-all
              "
            >
              <Link to="/live-captioning">Get Started</Link>
            </Button>
          </div>

          {/* 📱 Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="
              md:hidden p-2 rounded-lg 
              hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 
              transition-all duration-300
            "
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* 📜 Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="
              md:hidden py-4 border-t border-blue-500/20 
              animate-fade-in backdrop-blur-lg bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent
            "
          >
            <div className="flex flex-col gap-4">
              {[
                { label: "Live Captioning", path: "/live-captioning" },
                { label: "Text to Avatar", path: "/text-to-avatar" },
                { label: "About", path: "/about" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMobileMenu}
                  className="
                    text-foreground hover:text-blue-500 
                    transition-all font-medium py-2 
                    hover:translate-x-1
                  "
                >
                  {link.label}
                </Link>
              ))}

              <Button
                asChild
                size="sm"
                className="
                  bg-gradient-to-r from-blue-500 to-purple-500 
                  hover:from-purple-500 hover:to-cyan-400 
                  text-white font-semibold rounded-xl shadow-md 
                  hover:shadow-blue-500/40 transition-all
                "
              >
                <Link to="/live-captioning" onClick={toggleMobileMenu}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
