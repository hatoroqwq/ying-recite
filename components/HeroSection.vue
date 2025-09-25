<template>
  <section class="min-h-screen flex items-center justify-center text-center overflow-hidden">
    <div class="container mx-auto px-6">
      <h1 ref="title" class="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white opacity-0">
        不止于<span class="gradient-text">背单词</span>
      </h1>
      <p ref="subtitle" class="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-gray opacity-0">
        AI 驱动的智能单词记忆工具，将记忆转化为能力，让你的努力清晰可见。
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const title = ref(null);
const subtitle = ref(null);

onMounted(() => {
  gsap.timeline()
    .to(title.value, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 0.5)
    .to(subtitle.value, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.7');
  
  // 初始化状态
  gsap.set(title.value, { y: 50, opacity: 0 });
  gsap.set(subtitle.value, { y: 50, opacity: 0 });
});
</script>