<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <span class="header__logo-text">VF</span>
      </router-link>

      <button
        class="header__toggle"
        :class="{ 'header__toggle--active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="link.href"
          class="header__link"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { id: 1, label: 'Accueil', href: '#home' },
  { id: 2, label: 'À propos', href: '#about' },
  { id: 3, label: 'Compétences', href: '#skills' },
  { id: 4, label: 'Projets', href: '#projects' },
  { id: 5, label: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(17, 17, 17, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &--scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
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

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    gap: 2rem;

    @media (min-width: 768px) {
      height: 80px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: #f5f5f5;
    z-index: 1001;

    &-text {
      padding: 0.5rem 0.75rem;
      border: 2px solid #f5f5f5;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    &:hover &-text {
      background-color: #f5f5f5;
      color: #111111;
      transform: scale(1.05);
    }
  }

  &__toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    @media (min-width: 768px) {
      display: none;
    }

    span {
      width: 100%;
      height: 3px;
      background-color: #f5f5f5;
      border-radius: 2px;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &--active {
      span:nth-child(1) {
        transform: rotate(45deg) translateY(9px);
      }

      span:nth-child(2) {
        opacity: 0;
        transform: translateX(-20px);
      }

      span:nth-child(3) {
        transform: rotate(-45deg) translateY(-9px);
      }
    }
  }

  &__nav {
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 767px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(17, 17, 17, 0.98);
      flex-direction: column;
      justify-content: center;
      gap: 2.5rem;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;

      &--open {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__link {
    color: #f5f5f5;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding: 0.5rem 0;

    @media (max-width: 767px) {
      font-size: 1.5rem;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #4a90e2;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #4a90e2;

      &::after {
        width: 100%;
      }
    }
  }
}
</style>
