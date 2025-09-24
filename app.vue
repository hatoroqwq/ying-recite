<template>
  <div class="bg-gray-900 text-white">
    <AppHeader />
    <main>
      <Hero />
      <Features />
      <HowToUse />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // 全局动效设置
  gsap.utils.toArray('section').forEach((section, i) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })
  })
})
</script>

<style>
@import '~/assets/css/main.css';

body {
  font-family: 'Inter', sans-serif;
}
</style>