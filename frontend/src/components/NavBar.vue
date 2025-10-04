<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }" role="navigation" aria-label="Navigation principale">
    <div class="navbar__container">
      <RouterLink to="/" class="navbar__logo" aria-label="Retour à l'accueil">
        <span>Portfolio</span>
      </RouterLink>

      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="navbar__menu" :class="{ 'navbar__menu--open': isMobileMenuOpen }">
        <li><RouterLink to="/" class="navbar__link" @click="isMobileMenuOpen = false">Accueil</RouterLink></li>
        <li><RouterLink to="/#about" class="navbar__link" @click="isMobileMenuOpen = false">À propos</RouterLink></li>
        <li><RouterLink to="/portfolio" class="navbar__link" @click="isMobileMenuOpen = false">Portfolio</RouterLink></li>
        <li><RouterLink to="/#contact" class="navbar__link" @click="isMobileMenuOpen = false">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.05);
}

.navbar__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: opacity 0.3s ease;
}

.navbar__logo:hover {
  opacity: 0.7;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.navbar__toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background: #1a1a1a;
  transition: all 0.3s ease;
}

.navbar__toggle--active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.navbar__toggle--active span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.navbar__menu {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__link {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  position: relative;
  transition: color 0.3s ease;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #1a1a1a;
  transition: width 0.3s ease;
}

.navbar__link:hover {
  color: #666;
}

.navbar__link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .navbar__container {
    padding: 1rem 1.5rem;
  }

  .navbar__toggle {
    display: flex;
  }

  .navbar__menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: #fff;
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  }

  .navbar__menu--open {
    right: 0;
  }

  .navbar__link::after {
    display: none;
  }
}
</style>
