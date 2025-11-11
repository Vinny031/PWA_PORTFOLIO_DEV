<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
  }
})
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 14px;
  scroll-behavior: smooth;

  @media (min-width: 480px) {
    font-size: 15px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 17px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #222222;
  background-color: #e8e8e8;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.3s ease, color 0.3s ease;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1rem;
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}

h2 {
  font-size: clamp(1.75rem, 4vw, 3rem);
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
}

h4 {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
}

p {
  margin-bottom: 1rem;
  font-size: clamp(0.9rem, 2vw, 1.125rem);
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #4a90e2;
  }
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

:focus-visible {
  outline: 2px solid #4a90e2;
  outline-offset: 2px;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border: 2px solid #111111;
  border-radius: 4px;
  background-color: transparent;
  color: #111111;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: #111111;
    color: #f5f5f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &--primary {
    background-color: #111111;
    color: #f5f5f5;

    &:hover {
      background-color: #2a2a2a;
    }
  }

  &--accent {
    border-color: #4a90e2;
    color: #4a90e2;

    &:hover {
      background-color: #4a90e2;
      color: #f5f5f5;
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
