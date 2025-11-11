<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__section">
          <h3 class="footer__title">Suivez-moi</h3>
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
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  color: #f5f5f5;
  padding: 2.5rem 0 1.5rem;
  font-family: 'Inter', sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  &__content {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.875rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.5px;
    margin-bottom: 0;
  }

  &__social {
    display: flex;
    gap: 1rem;
  }

  &__social-link {
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.08);

    &:hover {
      background: rgba(0, 173, 181, 0.15);
      border-color: rgba(0, 173, 181, 0.3);
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 173, 181, 0.2);
    }

    img {
      width: 65%;
      filter: brightness(0) invert(1);
      transition: all 0.3s ease;
    }
  }

  &__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.875rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__copyright {
    font-size: 0.875rem;
    opacity: 0.7;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.3px;
  }

  &__links {
    display: flex;
    gap: 1.25rem;
    flex-wrap: wrap;
    justify-content: center;

    .footer__link {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.3s ease;
      position: relative;
      font-weight: 400;
      letter-spacing: 0.3px;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: #00adb5;
        transition: width 0.3s ease;
      }

      &:hover {
        color: #00adb5;

        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
