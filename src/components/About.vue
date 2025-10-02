<template>
  <section class="about" id="about">
    <div class="about__container">
      <div class="about__header">
        <h2 class="about__title">À propos de moi</h2>
        <div class="about__divider"></div>
      </div>

      <div class="about__content">
        <div class="about__text">
          <p>
            Passionné par le développement web et la photographie, je combine créativité et
            expertise technique pour créer des expériences digitales uniques et mémorables.
          </p>
          <p>
            Avec une solide expérience en développement Full-Stack, je maîtrise les technologies
            modernes comme React, Vue.js, Node.js et Express pour concevoir des applications
            web performantes et évolutives.
          </p>
          <p>
            Mon approche se concentre sur la qualité du code, l'accessibilité et l'expérience
            utilisateur, tout en gardant un œil artistique grâce à ma passion pour la photographie.
          </p>
        </div>

        <div class="about__stats">
          <div class="about__stat">
            <div class="about__stat-number">{{ stats.experience }}+</div>
            <div class="about__stat-label">Années d'expérience</div>
          </div>
          <div class="about__stat">
            <div class="about__stat-number">{{ stats.projects }}+</div>
            <div class="about__stat-label">Projets réalisés</div>
          </div>
          <div class="about__stat">
            <div class="about__stat-number">{{ stats.clients }}+</div>
            <div class="about__stat-label">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const stats = reactive({
  experience: 3,
  projects: 25,
  clients: 15
})
</script>

<style lang="scss" scoped>


.about {
  padding: 5rem 0;
  background-color: #e8e8e8;

  @media (min-width: 768px) {
    padding: 7rem 0;
  }

  &__container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 480px) {
      padding: 0 1.5rem;
    }

    @media (min-width: 768px) {
      padding: 0 2rem;
    }

    @media (min-width: 1024px) {
      padding: 0 3rem;
    }

    @media (min-width: 1440px) {
      padding: 0 4rem;
    }
  }

  &__header {
    text-align: center;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      margin-bottom: 4rem;
    }
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3rem);
    color: #222222;
    margin-bottom: 1rem;
  }

  &__divider {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4a90e2, lighten(#4a90e2, 15%));
    margin: 0 auto;
    border-radius: 2px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: 1.5fr 1fr;
      gap: 4rem;
    }
  }

  &__text {
    p {
      font-size: clamp(1rem, 2vw, 1.125rem);
      line-height: 1.8;
      color: lighten(#222222, 10%);
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__stat {
    text-align: center;
    padding: 2rem 1rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
  }

  &__stat-number {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    color: #4a90e2;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  &__stat-label {
    font-size: clamp(0.875rem, 2vw, 1rem);
    color: #222222;
    font-weight: 500;
  }
}
</style>
