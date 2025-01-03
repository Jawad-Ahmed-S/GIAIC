
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Automatically adds vendor prefixes for cross-browser compatibility
  },
};

export default config;