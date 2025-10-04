<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <section class="hero" role="banner">
    <div class="hero__content" :class="{ 'hero__content--visible': isVisible }">
      <h1 class="hero__title">Photographe Portfolio</h1>
      <p class="hero__subtitle">Capturer l'instant, immortaliser l'émotion</p>
      <a href="#about" class="hero__cta" aria-label="Découvrir mon travail">
        Découvrir
      </a>
    </div>
    <div class="hero__overlay"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.05" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat bottom;
  background-size: cover;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.hero__content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: #fff;
  padding: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}

.hero__content--visible {
  opacity: 1;
  transform: translateY(0);
}

.hero__title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  margin: 0 0 1rem;
  letter-spacing: -1px;
  line-height: 1.1;
}

.hero__subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 300;
  margin: 0 0 2.5rem;
  letter-spacing: 0.5px;
  opacity: 0.95;
}

.hero__cta {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #fff;
  color: #667eea;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  background: #f8f9fa;
}

.hero__cta:active {
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .hero {
    height: 80vh;
  }

  .hero__content {
    padding: 1.5rem;
  }

  .hero__cta {
    padding: 0.875rem 2rem;
    font-size: 0.95rem;
  }
}
</style>
