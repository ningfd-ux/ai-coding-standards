import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aicodingstandards.com",

  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
  ],

  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },

  vite: {
    ssr: {
      noExternal: ["@shikijs/transformers"],
    },
  },
});
