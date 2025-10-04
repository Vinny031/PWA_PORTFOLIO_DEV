<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';
import FooterSection from '../components/FooterSection.vue';
</script>

<template>
  <div class="home">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
