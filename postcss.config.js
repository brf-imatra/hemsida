const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
      content: ["./components/**/*.js[x]?", "./pages/**/*.js[x]?", "./components/**/*.ts[x]?", "./pages/**/*.ts[x]?"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  ];
  
  module.exports = {
    plugins: [
      "postcss-import",
      "tailwindcss",
      "autoprefixer",
      ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    ],
  };
