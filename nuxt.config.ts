// nuxt.config.ts

export default defineNuxtConfig({
  devtools: { enabled: true },

  // 我们将在这里配置 tailwindcss 模块
  modules: ["@nuxtjs/tailwindcss"],

  // 明确告诉模块我们的主样式文件在哪里
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },

  build: {
    transpile: ["gsap"],
  },

  // 注意：我们把之前的 css: [...] 这一行删掉了，
  // 因为 tailwindcss 模块会帮我们处理
});