<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import DistributorSection from './components/DistributorSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import LeaderboardSection from './components/LeaderboardSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="site-wrapper">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <DistributorSection />
      <TestimonialsSection />
      <LeaderboardSection />
    </main>
    <FooterSection />
  </div>
</template>

<style>
.site-wrapper {
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
