<script setup lang="ts">
import { ref, onMounted } from 'vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<template>
  <section id="about" ref="sectionRef" class="about" :class="{ 'about--visible': isVisible }">
    <div class="about__container">
      <div class="about__image">
        <div class="about__image-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
        </div>
      </div>
      <div class="about__content">
        <h2 class="about__title">À propos</h2>
        <p class="about__text">
          Photographe passionné depuis plus de 10 ans, je capture les moments uniques et les émotions authentiques.
          Mon travail se concentre sur la recherche de la lumière parfaite et des compositions harmonieuses.
        </p>
        <p class="about__text">
          Chaque projet est une nouvelle aventure, une opportunité de raconter une histoire unique à travers mon objectif.
          Je crois que la photographie est un art qui fige le temps et révèle la beauté cachée du quotidien.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 2rem;
  background: #f8f9fa;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.about--visible {
  opacity: 1;
  transform: translateY(0);
}

.about__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about__image {
  position: relative;
}

.about__image-placeholder {
  aspect-ratio: 4/5;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.about__image-placeholder svg {
  width: 80px;
  height: 80px;
  opacity: 0.3;
}

.about__content {
  padding: 1rem;
}

.about__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0 0 2rem;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.about__text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin: 0 0 1.5rem;
}

.about__text:last-child {
  margin-bottom: 0;
}

@media (max-width: 968px) {
  .about {
    padding: 4rem 1.5rem;
  }

  .about__container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about__image {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
