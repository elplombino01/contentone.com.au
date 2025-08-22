/**
 * Master Design Plan - ContentOne
 * This file contains the complete design system specifications
 */

export const designSystem = {
  colors: {
    // Primary palette - Enhanced Dark Theme
    "onyx-profond": "#0A0A0A",    // Deeper main background
    "ivoire-mat": "#F8F8F8",      // Brighter titles & important elements
    "acier-doux": "#B8B8B8",      // Softer paragraph text
    "indigo-electrique": "#6366F1", // More vibrant accent color (indigo-500)
    "indigo-brillant": "#818CF8",  // Lighter indigo for highlights
    "graphite": "#1F1F1F",         // Darker borders & separators
    "acier-fonce": "#4A4A4A",      // Darker gray for secondary elements
    "violet-profond": "#4C1D95",    // Deep violet for special accents
    "cyan-electrique": "#06B6D4",   // Cyan accent for CTAs and highlights
    
    // Gradient definitions
    gradients: {
      primary: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
      secondary: "linear-gradient(135deg, #1F1F1F 0%, #2D2D2D 100%)",
      accent: "linear-gradient(135deg, #06B6D4 0%, #6366F1 100%)",
      hero: "linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.9) 100%)",
    },
    
    // Semantic colors
    background: "#0A0A0A",
    foreground: "#F8F8F8",
    primary: "#6366F1",
    secondary: "#1A1A1A",
    muted: "#1F1F1F",
    border: "#1F1F1F",
    accent: "#06B6D4",
    
    // Shadow colors
    shadow: {
      primary: "rgba(99, 102, 241, 0.15)",
      secondary: "rgba(6, 182, 212, 0.15)",
      dark: "rgba(0, 0, 0, 0.5)",
    }
  },
  
  typography: {
    fonts: {
      satoshi: ["Satoshi", "system-ui", "sans-serif"],
      inter: ["Inter", "system-ui", "sans-serif"],
      // Adding modern font alternatives
      spaceGrotesk: ["Space Grotesk", "system-ui", "sans-serif"],
      jetBrainsMono: ["JetBrains Mono", "monospace"],
    },
    weights: {
      satoshi: {
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      inter: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
    sizes: {
      xs: "0.75rem",   // 12px
      sm: "0.875rem",  // 14px
      base: "1rem",     // 16px
      lg: "1.125rem",   // 18px
      xl: "1.25rem",    // 20px
      "2xl": "1.5rem",  // 24px
      "3xl": "1.875rem",// 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem",    // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem",  // 72px
      "8xl": "6rem",    // 96px
    },
  },
  
  spacing: {
    // Based on 4px grid system
    scale: {
      1: "0.25rem",  // 4px
      2: "0.5rem",   // 8px
      3: "0.75rem",  // 12px
      4: "1rem",     // 16px
      5: "1.25rem",  // 20px
      6: "1.5rem",   // 24px
      8: "2rem",     // 32px
      10: "2.5rem",  // 40px
      12: "3rem",    // 48px
      16: "4rem",    // 64px
      20: "5rem",    // 80px
      24: "6rem",    // 96px
      32: "8rem",    // 128px
      40: "10rem",   // 160px
    },
  },
  
  borderRadius: {
    none: "0",
    sm: "0.125rem",   // 2px
    DEFAULT: "0.375rem", // 6px
    md: "0.5rem",     // 8px
    lg: "0.75rem",    // 12px
    xl: "1rem",       // 16px
    "2xl": "1.5rem",  // 24px
    "3xl": "2rem",    // 32px
    full: "9999px",
  },
  
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    // Custom colored shadows
    primary: "0 0 20px rgba(99, 102, 241, 0.25)",
    accent: "0 0 20px rgba(6, 182, 212, 0.25)",
    glow: "0 0 30px rgba(99, 102, 241, 0.5)",
  },
  
  icons: {
    library: "lucide-react",
    size: {
      xs: "0.75rem",  // 12px
      sm: "1rem",     // 16px
      md: "1.25rem",  // 20px
      lg: "1.5rem",   // 24px
      xl: "2rem",     // 32px
      "2xl": "2.5rem", // 40px
      "3xl": "3rem",   // 48px
    },
  },
  
  animations: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
      slower: "700ms",
      slowest: "1000ms",
    },
    easing: {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  
  transitions: {
    fast: "all 150ms ease",
    normal: "all 300ms ease",
    slow: "all 500ms ease",
    color: "color 300ms ease",
    background: "background-color 300ms ease",
    border: "border-color 300ms ease",
    transform: "transform 300ms ease",
    opacity: "opacity 300ms ease",
    shadow: "box-shadow 300ms ease",
  },
} as const;

// Helper function to apply consistent styling
export const getDesignTokens = () => ({
  // Typography classes
  heading: "font-satoshi font-bold text-ivoire-mat",
  subheading: "font-satoshi font-semibold text-ivoire-mat",
  body: "font-inter text-acier-doux leading-relaxed",
  accent: "text-indigo-electrique",
  highlight: "text-cyan-electrique",
  
  // Button classes
  primaryButton: "bg-gradient-to-r from-indigo-electrique to-violet-profond text-ivoire-mat font-satoshi font-semibold hover:shadow-lg hover:shadow-indigo-electrique/25 transition-all duration-300",
  secondaryButton: "bg-secondary text-ivoire-mat border border-graphite font-satoshi font-semibold hover:bg-graphite hover:border-indigo-electrique transition-all duration-300",
  accentButton: "bg-gradient-to-r from-cyan-electrique to-indigo-electrique text-ivoire-mat font-satoshi font-semibold hover:shadow-lg hover:shadow-cyan-electrique/25 transition-all duration-300",
  
  // Layout classes
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-20 md:py-32",
  sectionSmall: "py-16 md:py-24",
  
  // Card classes
  card: "bg-secondary border border-graphite rounded-xl transition-all duration-300 hover:border-indigo-electrique hover:shadow-lg hover:shadow-indigo-electrique/10",
  cardGlow: "bg-secondary border border-indigo-electrique/30 rounded-xl shadow-lg shadow-indigo-electrique/10 transition-all duration-300 hover:border-indigo-electrique hover:shadow-xl hover:shadow-indigo-electrique/20",
  
  // Animation classes
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  slideInLeft: "animate-slide-in-left",
  slideInRight: "animate-slide-in-right",
  scaleIn: "animate-scale-in",
  
  // Interactive classes
  interactive: "transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
  glowOnHover: "transition-all duration-300 hover:shadow-lg hover:shadow-indigo-electrique/25",
  
  // Gradient text
  gradientText: "bg-gradient-to-r from-indigo-electrique to-cyan-electrique bg-clip-text text-transparent",
  gradientTextAlt: "bg-gradient-to-r from-cyan-electrique to-violet-profond bg-clip-text text-transparent",
});