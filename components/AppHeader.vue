<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
    <div class="container mx-auto px-4 h-16 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        <h1 class="text-xl font-bold gradient-text">萤YING 背</h1>
      </div>
      <nav class="hidden md:flex space-x-8">
        <a href="#features" class="hover:text-blue-400 transition-colors">核心功能</a>
        <a href="#how-to-use" class="hover:text-blue-400 transition-colors">如何使用</a>
      </nav>
      <a href="#" class="download-btn">
        下载
      </a>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('header', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('header nav a', {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 0.5
  });
});
</script>