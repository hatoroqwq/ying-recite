<template>
  <section class="py-24">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        不止于此
      </h2>
      <p class="text-lg text-brand-gray max-w-2xl mx-auto mb-16">
        我们提供了更多强大功能，构建完整的学习闭环。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="feature in otherFeatures" :key="feature.title" class="feature-card bg-gray-900/50 border border-gray-800 p-8 rounded-2xl">
          <img :src="feature.iconUrl" :alt="feature.title" class="w-12 h-12 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-white mb-2">{{ feature.title }}</h3>
          <p class="text-brand-gray">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const otherFeatures = [
  {
    title: 'AI 阅读助手',
    description: '从任意文章中智能提取生词，快速建立个人词库。',
    iconUrl: '/icons/icon-book.svg'
  },
  {
    title: '可视化分析',
    description: '通过热力图、饼图等，全方位展示学习成果和进度。',
    iconUrl: '/icons/icon-chart.svg'
  },
  {
    title: '个性化词库',
    description: '自由导入、导出和管理专属单词本，学习尽在掌握。',
    iconUrl: '/icons/icon-stack.svg'
  }
];

onMounted(() => {
  gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 60,
      duration: 1,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      }
    });
  });
});
</script>