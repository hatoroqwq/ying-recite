<template>
  <section class="pt-32 pb-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4 title">
        <span class="gradient-text">萤YING 背</span>, 不止于背单词
      </h1>
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto subtitle">
        AI 驱动的智能单词记忆工具，将记忆转化为能力，让你的努力清晰可见。
      </p>
      <div class="flex justify-center space-x-4">
        <a href="#" class="download-btn">立即下载</a>
        <a href="#features" class="secondary-btn">了解更多</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
  tl.from('.title', { opacity: 0, y: 50, duration: 1 })
    .from('.subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
    .from('.download-btn, .secondary-btn', { opacity: 0, y: 20, duration: 0.6, stagger: 0.2 }, '-=0.5');
});
</script>