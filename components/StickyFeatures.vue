<template>
  <section ref="sectionRef" class="py-24">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div class="md:sticky top-32 h-full">
          <div class="bg-gray-900/50 border border-gray-800 rounded-3xl aspect-square flex items-center justify-center">
             <div class="w-24 h-24 transition-all duration-500 ease-in-out" :key="activeIndex">
              <img :src="features[activeIndex].iconUrl" :alt="features[activeIndex].title" class="w-full h-full opacity-0 animate-fade-in" />
            </div>
          </div>
        </div>
        <div class="space-y-48 md:space-y-96">
          <div v-for="(feature, index) in features" :key="index" :ref="el => featureRefs[index] = el" class="feature-text">
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {{ feature.title }}
            </h2>
            <p class="text-lg text-brand-gray">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const features = [
  {
    title: '智能复习',
    description: '基于艾宾浩斯遗忘曲线，自动提醒每日复习任务，用科学对抗遗忘。',
    iconUrl: '/icons/icon-brain.svg',
  },
  {
    title: 'AI 助记',
    description: '一键为生词生成生动有趣的助记法，无论是谐音、词根还是故事，总有一种适合你。',
    iconUrl: '/icons/icon-magic.svg',
  },
  {
    title: 'AI 造句练习',
    description: '通过造句应用单词，AI 实时评估并提供优化建议，真正实现从记忆到应用。',
    iconUrl: '/icons/icon-chat.svg',
  },
];

const sectionRef = ref(null);
const featureRefs = ref([]);
const activeIndex = ref(0);
let triggers = [];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  featureRefs.value.forEach((panel, i) => {
    const trigger = ScrollTrigger.create({
      trigger: panel,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if (self.isActive) {
          activeIndex.value = i;
        }
      },
    });
    triggers.push(trigger);

    // Animate text fade in
    gsap.from(panel, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: panel,
        start: 'top 80%',
      }
    });
  });
});

onUnmounted(() => {
  triggers.forEach(trigger => trigger.kill());
});
</script>