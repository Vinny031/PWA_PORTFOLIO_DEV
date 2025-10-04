import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Accueil - Portfolio Photographe'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioPage,
      meta: {
        title: 'Portfolio - Mes Travaux'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Portfolio Photographe';
  next();
});

export default router;
