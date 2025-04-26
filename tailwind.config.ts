import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "neon-red": "var(--neon-red)",
        "neon-blue": "var(--neon-blue)",
        "neon-purple": "var(--neon-purple)",
        "neon-yellow": "var(--neon-yellow)",
        "neon-green": "var(--neon-green)",
        "neon-red-glow": "var(--neon-red-glow)",
        "neon-blue-glow": "var(--neon-blue-glow)",
        "neon-purple-glow": "var(--neon-purple-glow)",
        "neon-yellow-glow": "var(--neon-yellow-glow)",
        "neon-green-glow": "var(--neon-green-glow)",
        "dark-bg": "var(--dark-bg)",
        "darker-bg": "var(--darker-bg)",
        "border-color": "var(--border-color)",
        "text-color": "var(--text-color)",
        "muted-color": "var(--muted-color)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        roboto: ["var(--font-roboto)"],
        cyber: ["Cyberpunk", "var(--font-orbitron)"],
        mono: ["monospace", "SFMono-Regular"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        scanline: "scanline 4s linear infinite",
        status: "status 3s ease-in-out infinite",
        "glitch-1": "glitch-anim-1 3s infinite linear alternate-reverse",
        "glitch-2": "glitch-anim-2 4s infinite linear alternate-reverse",
        "hologram-scan": "hologram-scan 6s linear infinite",
        "hologram-color": "hologram-color 8s infinite alternate",
        blink: "blink 1s step-end infinite",
        pulse: "pulse 3s infinite",
        "data-flow": "data-flow 3s linear infinite",
        distortion: "distortion 15s linear infinite",
        "neon-pulse-red": "neon-pulse-red 2s infinite alternate",
        "neon-pulse-blue": "neon-pulse-blue 2.5s infinite alternate",
        "neon-pulse-purple": "neon-pulse-purple 3s infinite alternate",
        "neon-pulse-yellow": "neon-pulse-yellow 3.5s infinite alternate",
        "neon-pulse-green": "neon-pulse-green 4s infinite alternate",
        "border-pulse-red": "border-pulse-red 2s infinite alternate",
        "border-pulse-blue": "border-pulse-blue 2.5s infinite alternate",
        "border-pulse-purple": "border-pulse-purple 3s infinite alternate",
        "border-pulse-yellow": "border-pulse-yellow 3.5s infinite alternate",
        "border-pulse-green": "border-pulse-green 4s infinite alternate",
        "heading-pulse-red": "heading-pulse-red 2s infinite alternate",
        "heading-pulse-blue": "heading-pulse-blue 2.5s infinite alternate",
        "heading-pulse-purple": "heading-pulse-purple 3s infinite alternate",
        "heading-pulse-yellow": "heading-pulse-yellow 3.5s infinite alternate",
        "heading-pulse-green": "heading-pulse-green 4s infinite alternate",
        "divider-flow": "divider-flow 3s infinite",
        "cyber-icon-rotate": "cyber-icon-rotate 6s linear infinite",
        "noise-animation": "noise-animation 0.5s infinite",
        "grid-pulse": "grid-pulse 8s infinite alternate",
        "frame-pulse": "frame-pulse 3s infinite alternate",
        "shadow-pulse": "shadow-pulse 3s infinite alternate",
        "gradient-shift": "gradient-shift 10s infinite alternate",
        "mesh-shift": "mesh-shift 15s infinite linear",
        "text-shift": "text-shift 5s infinite alternate",
        glitch: "glitch 2s infinite",
        "glitch-text": "glitch-text 3s infinite",
        "corner-pulse": "corner-pulse 3s infinite alternate",
        "terminal-border-pulse": "terminal-border-pulse 2s infinite alternate",
        "title-line-pulse": "title-line-pulse 2s infinite alternate",
        "tag-pulse": "tag-pulse 3s infinite alternate",
        "tag-pulse-blue": "tag-pulse-blue 3s infinite alternate",
        "interface-corner-pulse": "interface-corner-pulse 3s infinite alternate",
        "particle-float": "particle-float 15s infinite linear",
        backgroundPulse: "backgroundPulse 10s ease infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)", filter: "blur(5px)" },
          to: { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        scanline: {
          "0%": { top: "-5%", opacity: "0.3" },
          "50%": { opacity: "0.8" },
          "100%": { top: "105%", opacity: "0.3" },
        },
        status: {
          "0%": { left: "-30%", width: "30%" },
          "50%": { width: "40%" },
          "100%": { left: "100%", width: "30%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "hologram-scan": {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(50%) scale(1.05)" },
          "100%": { transform: "translateY(100%) scale(1)" },
        },
        "hologram-color": {
          "0%": { background: "linear-gradient(135deg, rgba(5, 217, 232, 0.1) 0%, rgba(212, 66, 245, 0.1) 100%)" },
          "50%": { background: "linear-gradient(135deg, rgba(255, 42, 109, 0.1) 0%, rgba(1, 255, 195, 0.1) 100%)" },
          "100%": { background: "linear-gradient(135deg, rgba(249, 248, 113, 0.1) 0%, rgba(5, 217, 232, 0.1) 100%)" },
        },
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 42, 109, 0.6)" },
          "70%": { boxShadow: "0 0 0 20px rgba(255, 42, 109, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255, 42, 109, 0)" },
        },
        "data-flow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(33.33%)" },
        },
        distortion: {
          "0%": { transform: "translateX(-5%) translateY(-5%) scale(1.1)" },
          "50%": { transform: "translateX(5%) translateY(5%) scale(1)" },
          "100%": { transform: "translateX(-5%) translateY(-5%) scale(1.1)" },
        },
        "neon-pulse-red": {
          "0%": {
            opacity: "0.8",
            textShadow: "0 0 5px var(--neon-red-glow), 0 0 15px var(--neon-red-glow), 0 0 30px var(--neon-red-glow)",
          },
          "100%": {
            opacity: "1",
            textShadow: "0 0 10px var(--neon-red-glow), 0 0 25px var(--neon-red-glow), 0 0 50px var(--neon-red-glow)",
          },
        },
        "neon-pulse-blue": {
          "0%": {
            opacity: "0.8",
            textShadow: "0 0 5px var(--neon-blue-glow), 0 0 15px var(--neon-blue-glow), 0 0 30px var(--neon-blue-glow)",
          },
          "100%": {
            opacity: "1",
            textShadow:
              "0 0 10px var(--neon-blue-glow), 0 0 25px var(--neon-blue-glow), 0 0 50px var(--neon-blue-glow)",
          },
        },
        "neon-pulse-purple": {
          "0%": {
            opacity: "0.8",
            textShadow:
              "0 0 5px var(--neon-purple-glow), 0 0 15px var(--neon-purple-glow), 0 0 30px var(--neon-purple-glow)",
          },
          "100%": {
            opacity: "1",
            textShadow:
              "0 0 10px var(--neon-purple-glow), 0 0 25px var(--neon-purple-glow), 0 0 50px var(--neon-purple-glow)",
          },
        },
        "neon-pulse-yellow": {
          "0%": {
            opacity: "0.8",
            textShadow:
              "0 0 5px var(--neon-yellow-glow), 0 0 15px var(--neon-yellow-glow), 0 0 30px var(--neon-yellow-glow)",
          },
          "100%": {
            opacity: "1",
            textShadow:
              "0 0 10px var(--neon-yellow-glow), 0 0 25px var(--neon-yellow-glow), 0 0 50px var(--neon-yellow-glow)",
          },
        },
        "neon-pulse-green": {
          "0%": {
            opacity: "0.8",
            textShadow:
              "0 0 5px var(--neon-green-glow), 0 0 15px var(--neon-green-glow), 0 0 30px var(--neon-green-glow)",
          },
          "100%": {
            opacity: "1",
            textShadow:
              "0 0 10px var(--neon-green-glow), 0 0 25px var(--neon-green-glow), 0 0 50px var(--neon-green-glow)",
          },
        },
        "border-pulse-red": {
          "0%": { boxShadow: "0 0 5px var(--neon-red-glow), inset 0 0 5px var(--neon-red-glow)" },
          "100%": { boxShadow: "0 0 10px var(--neon-red-glow), inset 0 0 10px var(--neon-red-glow)" },
        },
        "border-pulse-blue": {
          "0%": { boxShadow: "0 0 5px var(--neon-blue-glow), inset 0 0 5px var(--neon-blue-glow)" },
          "100%": { boxShadow: "0 0 10px var(--neon-blue-glow), inset 0 0 10px var(--neon-blue-glow)" },
        },
        "border-pulse-purple": {
          "0%": { boxShadow: "0 0 5px var(--neon-purple-glow), inset 0 0 5px var(--neon-purple-glow)" },
          "100%": { boxShadow: "0 0 10px var(--neon-purple-glow), inset 0 0 10px var(--neon-purple-glow)" },
        },
        "border-pulse-yellow": {
          "0%": { boxShadow: "0 0 5px var(--neon-yellow-glow), inset 0 0 5px var(--neon-yellow-glow)" },
          "100%": { boxShadow: "0 0 10px var(--neon-yellow-glow), inset 0 0 10px var(--neon-yellow-glow)" },
        },
        "border-pulse-green": {
          "0%": { boxShadow: "0 0 5px var(--neon-green-glow), inset 0 0 5px var(--neon-green-glow)" },
          "100%": { boxShadow: "0 0 10px var(--neon-green-glow), inset 0 0 10px var(--neon-green-glow)" },
        },
        "heading-pulse-red": {
          "0%": { boxShadow: "0 0 5px var(--neon-red-glow)", height: "100%" },
          "100%": { boxShadow: "0 0 15px var(--neon-red-glow)", height: "110%" },
        },
        "heading-pulse-blue": {
          "0%": { boxShadow: "0 0 5px var(--neon-blue-glow)", height: "100%" },
          "100%": { boxShadow: "0 0 15px var(--neon-blue-glow)", height: "110%" },
        },
        "heading-pulse-purple": {
          "0%": { boxShadow: "0 0 5px var(--neon-purple-glow)", height: "100%" },
          "100%": { boxShadow: "0 0 15px var(--neon-purple-glow)", height: "110%" },
        },
        "heading-pulse-yellow": {
          "0%": { boxShadow: "0 0 5px var(--neon-yellow-glow)", height: "100%" },
          "100%": { boxShadow: "0 0 15px var(--neon-yellow-glow)", height: "110%" },
        },
        "heading-pulse-green": {
          "0%": { boxShadow: "0 0 5px var(--neon-green-glow)", height: "100%" },
          "100%": { boxShadow: "0 0 15px var(--neon-green-glow)", height: "110%" },
        },
        "divider-flow": {
          "0%": { left: "-50%" },
          "100%": { left: "150%" },
        },
        "cyber-icon-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "noise-animation": {
          "0%": { opacity: "0.03" },
          "50%": { opacity: "0.05" },
          "100%": { opacity: "0.03" },
        },
        "grid-pulse": {
          "0%": { opacity: "0.3", backgroundSize: "100% 100%" },
          "100%": { opacity: "0.7", backgroundSize: "120% 120%" },
        },
        "frame-pulse": {
          "0%": { opacity: "0.6", filter: "blur(0.5px)" },
          "100%": { opacity: "0.9", filter: "blur(0px)" },
        },
        "shadow-pulse": {
          "0%": { opacity: "0.4", filter: "blur(8px)", transform: "scale(0.95)" },
          "100%": { opacity: "0.7", filter: "blur(12px)", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "mesh-shift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "50px 50px" },
        },
        "text-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        glitch: {
          "0%": {
            textShadow:
              "0.05em 0 0 rgba(255, 0, 0, 0.4), -0.025em -0.05em 0 rgba(0, 255, 0, 0.4), 0.025em 0.05em 0 rgba(0, 0, 255, 0.4)",
          },
          "14%": {
            textShadow:
              "0.05em 0 0 rgba(255, 0, 0, 0.4), -0.025em -0.05em 0 rgba(0, 255, 0, 0.4), 0.025em 0.05em 0 rgba(0, 0, 255, 0.4)",
          },
          "15%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255, 0, 0, 0.4), 0.025em 0.025em 0 rgba(0, 255, 0, 0.4), -0.05em -0.05em 0 rgba(0, 0, 255, 0.4)",
          },
          "49%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255, 0, 0, 0.4), 0.025em 0.025em 0 rgba(0, 255, 0, 0.4), -0.05em -0.05em 0 rgba(0, 0, 255, 0.4)",
          },
          "50%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255, 0, 0, 0.4), 0.05em 0 0 rgba(0, 255, 0, 0.4), 0 -0.05em 0 rgba(0, 0, 255, 0.4)",
          },
          "99%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255, 0, 0, 0.4), 0.05em 0 0 rgba(0, 255, 0, 0.4), 0 -0.05em 0 rgba(0, 0, 255, 0.4)",
          },
          "100%": {
            textShadow:
              "-0.025em 0 0 rgba(255, 0, 0, 0.4), -0.025em -0.025em 0 rgba(0, 255, 0, 0.4), -0.025em -0.05em 0 rgba(0, 0, 255, 0.4)",
          },
        },
        "glitch-text": {
          "0%, 100%": { textShadow: "none" },
          "20%": {
            textShadow:
              "0.05em 0 0 rgba(255, 42, 109, 0.7), -0.025em -0.05em 0 rgba(5, 217, 232, 0.7), 0.025em 0.05em 0 rgba(249, 248, 113, 0.7)",
          },
          "21%": { textShadow: "none" },
          "25%": {
            textShadow:
              "-0.05em -0.025em 0 rgba(255, 42, 109, 0.7), 0.025em 0.025em 0 rgba(5, 217, 232, 0.7), -0.05em -0.05em 0 rgba(249, 248, 113, 0.7)",
          },
          "26%": { textShadow: "none" },
          "45%": {
            textShadow:
              "0.025em 0.05em 0 rgba(255, 42, 109, 0.7), 0.05em 0 0 rgba(5, 217, 232, 0.7), 0 -0.05em 0 rgba(249, 248, 113, 0.7)",
          },
          "46%": { textShadow: "none" },
        },
        "corner-pulse": {
          "0%": { opacity: "0.5", width: "25px", height: "25px" },
          "100%": { opacity: "0.8", width: "35px", height: "35px" },
        },
        "terminal-border-pulse": {
          "0%": { borderLeftColor: "var(--neon-green)", boxShadow: "0 0 5px var(--neon-green-glow)" },
          "100%": { borderLeftColor: "var(--neon-blue)", boxShadow: "0 0 10px var(--neon-blue-glow)" },
        },
        "title-line-pulse": {
          "0%": { width: "20px", opacity: "0.6" },
          "100%": { width: "30px", opacity: "0.9" },
        },
        "tag-pulse": {
          "0%": { boxShadow: "0 0 5px var(--neon-red-glow)" },
          "100%": { boxShadow: "0 0 15px var(--neon-red-glow)" },
        },
        "tag-pulse-blue": {
          "0%": { boxShadow: "0 0 5px var(--neon-blue-glow)" },
          "100%": { boxShadow: "0 0 15px var(--neon-blue-glow)" },
        },
        "interface-corner-pulse": {
          "0%": { opacity: "0.6", width: "30px", height: "30px" },
          "100%": { opacity: "0.9", width: "40px", height: "40px" },
        },
        "particle-float": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) translateX(100px)", opacity: "0" },
        },
        backgroundPulse: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(5, 217, 232, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 217, 232, 0.05) 1px, transparent 1px)",
        "gradient-dark": "var(--gradient-dark)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-red-purple": "var(--gradient-red-purple)",
        "gradient-blue-green": "var(--gradient-blue-green)",
        "gradient-yellow-red": "var(--gradient-yellow-red)",
        "gradient-purple-blue": "var(--gradient-purple-blue)",
        "gradient-cyber": "var(--gradient-cyber)",
      },
      backgroundSize: {
        "cyber-grid": "30px 30px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
module.exports = {
  theme: {
    extend: {
      animation: {
        'pulse-bar': 'pulse-bar 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-bar': {
          '0%, 100%': { opacity: '0.7', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.3)' },
        },
      },
    },
  },
  plugins: [],
}

