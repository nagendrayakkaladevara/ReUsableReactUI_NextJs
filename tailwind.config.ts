import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        shadowPulse: {
          "33%": { background: "#FFF", boxShadow: "-24px 0 #FF3D00, 24px 0 #FFF" },
          "66%": { background: "#FF3D00", boxShadow: "-24px 0 #FFF, 24px 0 #FFF" },
          "100%": { background: "#FFF", boxShadow: "-24px 0 #FFF, 24px 0 #FF3D00" },
        },
        barStripe: {
          "0%": { backgroundPosition: "1em 0" },
          "100%": { backgroundPosition: "0 0" },
        },
      },
      animation: {
        rotation: 'rotation 1s linear infinite',
        shimmer: "shimmer 2s linear infinite",
        rotate: "rotate 1s linear infinite",
        "shadow-pulse": "shadowPulse 2s linear infinite",
        scaleY: "scaleY 1s infinite ease-in-out",
        "bar-stripe": "barStripe 1s linear infinite",
      }
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
