<template>
  <section id="how-to-use" class="py-20 bg-gray-950">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        三步上手，即刻开始高效学习
      </h2>
      <div class="relative">
        <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2"></div>
        <div class="grid md:grid-cols-3 gap-8 relative">
          <div class="step-card text-center" v-for="(step, index) in steps" :key="step.title">
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl border-4 border-gray-950">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold mb-2 mt-8">{{ step.title }}</h3>
            <p class="text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: '首次配置',
    description: '进入设置页面，简单配置您的 AI 服务 API，激活全部 AI 功能。',
  },
  {
    title: '开始学习',
    description: '从主页开始每日复习，或通过阅读助手建立新词库，开启学习之旅。',
  },
  {
    title: '练习与应用',
    description: '进入 AI 练习模块，通过造句等方式应用所学单词，将知识内化为能力。',
  }
]
</script>