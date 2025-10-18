import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: "#0a1929",
        secondary: "#1e3a5f",
        accent: "#00d4ff",
        text: "#e0e0e0",
        bg: "#000814",
        "card-bg": "#0d1b2a",
        "section-bg": "var(--section-bg)",
        "section-fg": "var(--section-fg)",
        rule: "var(--rule)",
        gridline: "var(--gridline)",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      fontSize: {
        // Semantic display sizes (use font-display)
        'display-1': ['clamp(2.25rem, 6vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(1.9rem, 3.5vw, 2.5rem)', { lineHeight: '1.10' }],

        // Legacy sizes (backwards compatibility)
        'display': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 4vw + 1rem, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.5rem, 3vw + 0.5rem, 2.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.25rem, 2vw + 0.5rem, 1.875rem)', { lineHeight: '1.4' }],
        'body': ['clamp(1rem, 1.1vw, 1.125rem)', { lineHeight: '1.6' }],
        'small': ['clamp(0.875rem, 0.5vw + 0.75rem, 1rem)', { lineHeight: '1.6' }],
        'overline': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em', textTransform: 'uppercase' }],
      },
      maxWidth: {
        'measure': '65ch',
        'container': '1280px',
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out",
        "spin-slow": "rotate 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
