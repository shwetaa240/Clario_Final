// src/components/ParticlesBackground.tsx

import { useEffect, useState, useMemo } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
// Make sure to import IOptions and RecursivePartial for TypeScript
import Particles from "@tsparticles/react";
import type { IOptions, RecursivePartial } from "@tsparticles/engine";
import { useTheme } from "next-themes"; // ✅ Import useTheme to read light/dark mode

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme(); // ✅ Get the current theme

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // ✅ Memoize options to prevent re-renders, update only when theme changes
  const options: RecursivePartial<IOptions> = useMemo(() => {
    // Match particle colors to your design system's foreground
    // From index.css:
    // Light: --foreground: 215 25% 27% (~#3a4a59)
    // Dark: --foreground: 210 20% 98% (~#f7f9fa)
    const particleColor = resolvedTheme === "dark" ? "#f7f9fa" : "#3a4a59";

    return {
      background: {
        color: { value: "transparent" }, // ✅ FIX: Make canvas transparent
      },
      particles: {
        number: { value: 80 },
        color: { value: particleColor }, // ✅ Use theme-aware color
        shape: { type: "circle" },
        opacity: { value: 0.5, anim: { enable: true, speed: 0.5 } },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          outModes: "out",
        },
        links: {
          enable: true,
          color: particleColor, // ✅ Use theme-aware color for links
          distance: 150,
          opacity: 0.4,
          width: 1,
        },
      },
      // ✅ Allow hover interactivity but disable click to let clicks pass through
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: false },
        },
        modes: {
          repulse: { distance: 100 },
        },
      },
    };
  }, [resolvedTheme]); // Re-calculate options when theme changes

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      // ✅ FIX: Position behind content, fill screen, and set negative z-index
      className="absolute top-0 left-0 w-full h-full -z-10"
      options={options}
    />
  );
};

export default ParticlesBackground;