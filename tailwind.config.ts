import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#023e8a", // Deeper Royal Blue (Aligning with potential Logo)
                secondary: "#ffffff",
                accent: "#0077b6", // Brighter Blue for accents
                "text-primary": "#1e293b",
                "text-secondary": "#64748b",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                scroll: 'scroll 40s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
