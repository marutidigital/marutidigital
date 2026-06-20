/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          tint1: "var(--color-primary-tint-1)",
          tint2: "var(--color-primary-tint-2)",
          tint3: "var(--color-primary-tint-3)",
          shade1: "var(--color-primary-shade-1)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        n8nbg: {
          xlight: "var(--color-background-xlight)",
          lighter: "var(--color-background-lighter)",
          light: "var(--color-background-light)",
          base: "var(--color-background-base)",
          dark: "var(--color-background-dark)",
        },
        n8nfg: {
          base: "var(--color-foreground-base)",
          light: "var(--color-foreground-light)",
          xlight: "var(--color-foreground-xlight)",
        },
        n8ntext: {
          dark: "var(--color-text-dark)",
          base: "var(--color-text-base)",
          light: "var(--color-text-light)",
          lighter: "var(--color-text-lighter)",
          xlight: "var(--color-text-xlight)",
        },
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        info: "var(--color-info)",
      },
      fontFamily: {
        sans: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },
    },
  },
  plugins: [],
}
