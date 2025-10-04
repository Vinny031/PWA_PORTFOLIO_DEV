<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__container">
      <div class="footer__content">
        <p class="footer__text">&copy; {{ currentYear }} Portfolio Photographe. Tous droits réservés.</p>
        <div class="footer__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer__link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="mailto:contact@portfolio.com" class="footer__link" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
  padding: 2.5rem 2rem;
}

.footer__container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.footer__text {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.8;
}

.footer__social {
  display: flex;
  gap: 1.5rem;
}

.footer__link {
  color: #fff;
  opacity: 0.7;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__link:hover {
  opacity: 1;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem;
  }

  .footer__content {
    flex-direction: column;
    text-align: center;
  }

  .footer__text {
    font-size: 0.9rem;
  }
}
</style>
