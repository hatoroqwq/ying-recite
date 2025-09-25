// nuxt.config.ts

export default defineNuxtConfig({
  devtools: { enabled: true },

  // 正确的配置方式是在 modules 数组中，
  // 将模块和它的配置放在一个数组里
  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
      },
    ],
  ],

  build: {
    transpile: ["gsap"],
  },
});