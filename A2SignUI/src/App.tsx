// src/app.tsx

import "./ui-enhancements.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes"; // ✅ 1. Import ThemeProvider

// Page Imports
import Index from "./pages/Home";
import LiveCaptioning from "./pages/LiveCaptioning";
import TextToAvatar from "./pages/TextToAvatar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ParticlesBackground from "./components/ParticlesBackground";

const queryClient = new QueryClient();

const App = () => (
  // ✅ 2. Wrap your entire application in ThemeProvider
  // This enables light/dark mode switching
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        
        {/* Your background is now correctly placed */}
        <ParticlesBackground />

        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/live-captioning" element={<LiveCaptioning />} />
            <Route path="/text-to-avatar" element={<TextToAvatar />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
