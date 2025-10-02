<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__section">
          <h3 class="footer__logo">VF</h3>
          <p class="footer__description">
            Développeur web passionné, créant des expériences digitales modernes et performantes.
          </p>
        </div>

        <div class="footer__section">
          <h4 class="footer__title">Navigation</h4>
          <nav class="footer__nav">
            <a href="#home" class="footer__link">Accueil</a>
            <a href="#about" class="footer__link">À propos</a>
            <a href="#skills" class="footer__link">Compétences</a>
            <a href="#projects" class="footer__link">Projets</a>
            <a href="#contact" class="footer__link">Contact</a>
          </nav>
        </div>

        <div class="footer__section">
          <h4 class="footer__title">Contact</h4>
          <div class="footer__contacts">
            <a href="mailto:vincent.fuseau@hotmail.fr" class="footer__link">
              vincent.fuseau@hotmail.fr
            </a>
            <p class="footer__text">Toulouse, France</p>
          </div>
        </div>

        <div class="footer__section">
          <h4 class="footer__title">Suivez-moi</h4>
          <div class="footer__social">
            <a
              href="https://github.com/Vinny031?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__social-link"
              aria-label="GitHub"
            >
              <img src="/assets/icon/github.webp" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; {{ currentYear }} Vincent Fuseau. Tous droits réservés.
        </p>
        <div class="footer__links">
          <a href="#" class="footer__link">Mentions légales</a>
          <a href="#" class="footer__link">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>


.footer {
  background-color: #111111;
  color: #f5f5f5;
  padding: 3rem 0 1.5rem;

  @media (min-width: 768px) {
    padding: 4rem 0 2rem;
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

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 3rem;

    @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 3rem;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__logo {
    font-size: 2rem;
    font-weight: 800;
    color: #f5f5f5;
    margin: 0;
    padding: 0.5rem 0.75rem;
    border: 2px solid #f5f5f5;
    border-radius: 4px;
    display: inline-block;
    width: fit-content;
  }

  &__description {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.85;
    margin: 0;
  }

  &__title {
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__link {
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.95rem;
    transition: all 0.3s ease;
    width: fit-content;

    &:hover {
      color: white;
      transform: translateX(5px);
    }
  }

  &__text {
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.95rem;
    margin: 0;
  }

  &__social {
    display: flex;
    gap: 1rem;
  }

  &__social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
    padding: 0.625rem;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
  }

  &__bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__copyright {
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 0;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  &__links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: flex-end;
    }

    .footer__link {
      font-size: 0.9rem;

      &:hover {
        transform: translateX(0);
      }
    }
  }
}
</style>
