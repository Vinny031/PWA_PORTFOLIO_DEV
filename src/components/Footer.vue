<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">

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
  background: linear-gradient(180deg, #111 0%, #1a1a1a 100%);
  color: #f5f5f5;
  padding: 3rem 0;
  font-family: 'Inter', sans-serif;

  &__container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
    position: relative;
    margin-bottom: 0.5rem;

    &::after {
      content: "";
      display: block;
      width: 40px;
      height: 2px;
      background: #00adb5;
      margin-top: 0.5rem;
      border-radius: 2px;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__link {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    transition: all 0.3s ease;

    &:hover {
      color: #00adb5;
      transform: translateX(4px);
    }
  }

  &__social {
    display: flex;
    gap: 1rem;
  }

  &__social-link {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }

    img {
      width: 70%;
      filter: brightness(0) invert(1);
    }
  }

  &__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__copyright {
    font-size: 0.9rem;
    opacity: 0.8;
    text-align: center;
  }

  &__links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    .footer__link {
      font-size: 0.9rem;

      &:hover {
        color: #00adb5;
      }
    }
  }
}
</style>
