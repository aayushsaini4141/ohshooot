import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/images/bg-img1.jpg')",
        'banner': "url('/images/bg-img2.jpg')",
        'banner1': "url('/images/bg-img3.jpg')",
        'banner2': "url('/images/bg-img4.jpg')",
        'about': "url('/images/bg-img4.jpg')",
        'about-bg': "url('/images/about-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
