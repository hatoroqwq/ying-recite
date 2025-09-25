<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <AppHeader />
      <main>
        <HeroSection />
        <StickyFeatures />
        <OtherFeatures />
        <CallToAction />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother;

onMounted(() => {
  smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
  });
});

onUnmounted(() => {
  if (smoother) {
    smoother.kill();
  }
});
</script>

<style>
/* 确保body和html有高度，以便GSAP滚动计算 */
html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>