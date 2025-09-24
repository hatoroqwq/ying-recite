<template>
  <section id="features" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        专为高效记忆而设计
      </h2>
      <p class="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        结合现代人工智能技术与经典记忆法，让你的英语学习事半功倍。
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="feature.icon"></svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-400">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: '智能复习',
    description: '基于艾宾浩斯遗忘曲线，自动提醒每日复习任务，科学抗遗忘。',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
  },
  {
    title: 'AI 助记',
    description: '一键为生词生成生动有趣的助记法，联想记忆更深刻。',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707m12.728 0l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'
  },
  {
    title: 'AI 造句练习',
    description: '通过造句应用单词，AI 实时评估并提供优化建议，从记忆到应用。',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>'
  },
  {
    title: 'AI 阅读助手',
    description: '从任意英文文章中智能提取生词，快速建立个人专属词库。',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v11.494m-9-5.747h18"></path>'
  },
  {
    title: '可视化分析',
    description: '通过学习热力图、掌握度饼图等，全方位展示学习成果。',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>'
  },
  {
    title: '个性化词库',
    description: '支持自由导入、导出和管理专属单词本，学习尽在掌握。',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>'
  }
]
</script>