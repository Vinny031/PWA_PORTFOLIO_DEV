<template>
  <div class="error">
    <div class="error__container">
      <div class="error__content">
        <div class="error__image">
          <img src="/assets/icon/404.webp" alt="404 Error" />
        </div>
        <h1 class="error__title">404</h1>
        <h2 class="error__subtitle">Page non trouvée</h2>
        <p class="error__description">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div class="error__actions">
          <router-link to="/" class="btn btn--primary">
            Retour à l'accueil
          </router-link>
          <a href="#contact" class="btn">
            Contactez-moi
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = '404 - Page non trouvée | Vincent Fuseau'
})
</script>

<style lang="scss" scoped>


.error {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  position: relative;
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
    position: relative;
    z-index: 1;
  }

  &__content {
    text-align: center;
    color: #f5f5f5;
    max-width: 600px;
    margin: 0 auto;
  }

  &__image {
    width: 200px;
    height: 200px;
    margin: 0 auto 2rem;
    animation: float 6s ease-in-out infinite;

    @media (min-width: 768px) {
      width: 280px;
      height: 280px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
    }
  }

  &__title {
    font-size: clamp(4rem, 15vw, 8rem);
    font-weight: 900;
    margin: 0 0 1rem 0;
    line-height: 1;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  &__subtitle {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    font-weight: 700;
    margin: 0 0 1rem 0;
  }

  &__description {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    margin: 0 0 2.5rem 0;
    opacity: 0.95;
    line-height: 1.6;
  }

  &__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    .btn {
      border-color: #f5f5f5;
      color: #f5f5f5;
      min-width: 180px;

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
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
