<template>
  <section class="hero" id="home">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title fade-in-up">
          Bonjour, je suis <span class="hero__highlight">Vincent Fuseau</span>
        </h1>
        <p class="hero__subtitle fade-in-up" style="animation-delay: 0.2s">
          Développeur Web Full-Stack en route vers le B3-M1-M2 | Curieux et rigoureux
        </p>
        <p class="hero__description fade-in-up" style="animation-delay: 0.3s">
          Je conçois des applications modernes avec React/Vue.js et Node.js/Express, alliant performance, accessibilité et sens du détail. Issu d'un parcours pluridisciplinaire, j'apporte adaptabilité, rigueur et une forte envie d'apprendre au service de projets concrets et innovants.        </p>
        <div class="hero__cta fade-in-up" style="animation-delay: 0.4s">
          <a href="#projects" class="btn btn--primary">Voir mes projets</a>
          <a href="#contact" class="btn">Me contacter</a>
        </div>
      </div>
      <div class="hero__visual fade-in" style="animation-delay: 0.5s">
        <div class="hero__avatar">
          <img src="/assets/icon/avatar-3d.webp" alt="Vincent Fuseau" />
        </div>
        <div class="hero__decoration"></div>
      </div>
    </div>
    <div class="hero__scroll">
      <a href="#about" class="hero__scroll-link" aria-label="Scroll to about section">
        <span class="hero__scroll-text">Découvrir</span>
        <svg class="hero__scroll-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>


.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 100px 0 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #f5f5f5;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
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
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    position: relative;
    z-index: 1;

    @media (min-width: 768px) {
      grid-template-columns: 1.2fr 1fr;
      gap: 4rem;
    }

    @media (min-width: 1024px) {
      gap: 6rem;
    }
  }

  &__content {
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  &__title {
    font-size: clamp(2rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
  }

  &__highlight {
    background: linear-gradient(120deg, #ffffff, #a8edea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__subtitle {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    margin-bottom: 1.5rem;
    font-weight: 600;
    opacity: 0.95;
  }

  &__description {
    font-size: clamp(1rem, 2vw, 1.125rem);
    margin-bottom: 2.5rem;
    opacity: 0.9;
    line-height: 1.7;
    max-width: 600px;

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }

    .btn {
      border-color: #f5f5f5;
      color: #f5f5f5;
      min-width: 160px;

      &--primary {
        background-color: #f5f5f5;
        color: #111111;

        &:hover {
          background-color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }
      }

      &:not(&--primary):hover {
        background-color: rgba(255, 255, 255, 0.15);
        border-color: #f5f5f5;
      }
    }
  }

  &__visual {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    order: -1;

    @media (min-width: 768px) {
      order: 1;
    }
  }

  &__avatar {
    position: relative;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
    backdrop-filter: blur(10px);
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: float 6s ease-in-out infinite;

    @media (min-width: 480px) {
      width: 320px;
      height: 320px;
    }

    @media (min-width: 1024px) {
      width: 380px;
      height: 380px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    animation: rotate 20s linear infinite;
    z-index: -1;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    }

    &::before {
      top: 10%;
      left: 50%;
    }

    &::after {
      bottom: 10%;
      right: 10%;
    }
  }

  &__scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  &__scroll-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: #f5f5f5;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transform: translateY(5px);
    }
  }

  &__scroll-text {
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__scroll-icon {
    width: 24px;
    height: 24px;
    animation: bounce 2s infinite;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
