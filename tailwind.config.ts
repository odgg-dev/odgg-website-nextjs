import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1364px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        nav: ["18px", { fontWeight: "300", lineHeight: "18px" }],
        navMobile: ["20px", { fontWeight: "300", lineHeight: "25px" }],
        bodyL: ["22px", { fontWeight: "300", lineHeight: "40px" }],
        bodyLMobile: ["18px", { fontWeight: "300", lineHeight: "26px" }],
        bodyM: [
          "18px",
          { fontWeight: "300", lineHeight: "30px", letterSpacing: "0%" },
        ],
        bodyMMobile: ["15px", { fontWeight: "300", lineHeight: "23px" }],
        headingXL: ["100px", { fontWeight: "300", lineHeight: "100%" }],
        headingXLMobile: ["60px", { fontWeight: "300", lineHeight: "58px" }],
        headingL: ["40px", { lineHeight: "100%", fontWeight: "300" }],
        headingLMobile: ["36px", { lineHeight: "100%", fontWeight: "300" }],
        headingM: ["30px", { lineHeight: "44px", fontWeight: "300" }],
        headingMMobile: ["26px", { lineHeight: "30px", fontWeight: "300" }],
        headingS: ["20px", { lineHeight: "100%", fontWeight: "300" }],
        headingSMobile: ["18px", { lineHeight: "100%", fontWeight: "300" }],
        heroIntro: ["32px", { lineHeight: "45px", fontWeight: "400" }],
        heroIntroMobile: ["18px", { lineHeight: "25px", fontWeight: "400" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          "100": "hsl(var(--primary-100))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
