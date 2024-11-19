import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        prarineblue: "hsl(213, 96%, 18%)",
        prPurplishblue: "hsl(243, 100%, 62%)",
        prPastelblue: "hsl(228, 100%, 84%)",
        prLightblue: "hsl(206, 94%, 87%)",
        prStrawberryred: "hsl(354, 84%, 57%)",
        prCoolgray: "hsl(231, 11%, 63%)",
        prLightgray:" hsl(229, 24%, 87%)",
        prMagnolia: "hsl(217, 100%, 97%)",
        prAlabaster: "hsl(231, 100%, 99%)",
        prWhite: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'], // Add Ubuntu font
    },
  },
  plugins: [],
} satisfies Config;
