<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';
import FooterSection from '../components/FooterSection.vue';
import GalleryGrid from '../components/GalleryGrid.vue';
import { getCategories, getPhotos } from '../services/api';
import type { Category, Photo } from '../types';

const categories = ref<Category[]>([]);
const photos = ref<Photo[]>([]);
const selectedCategory = ref<string>('all');
const isLoading = ref(true);

onMounted(async () => {
  try {
    const [categoriesData, photosData] = await Promise.all([
      getCategories(),
      getPhotos()
    ]);

    categories.value = categoriesData;
    photos.value = photosData;
  } catch (error) {
    console.error('Error loading data:', error);
  } finally {
    isLoading.value = false;
  }
});

const filteredPhotos = ref<Photo[]>([]);

const filterByCategory = async (categorySlug: string) => {
  selectedCategory.value = categorySlug;
  isLoading.value = true;

  try {
    if (categorySlug === 'all') {
      photos.value = await getPhotos();
    } else {
      photos.value = await getPhotos(categorySlug);
    }
  } catch (error) {
    console.error('Error filtering photos:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="portfolio">
    <NavBar />

    <main class="portfolio__main">
      <header class="portfolio__header">
        <h1 class="portfolio__title">Portfolio</h1>
        <p class="portfolio__subtitle">Découvrez mes travaux photographiques</p>
      </header>

      <nav class="portfolio__filters" aria-label="Filtres de catégories">
        <button
          class="portfolio__filter"
          :class="{ 'portfolio__filter--active': selectedCategory === 'all' }"
          @click="filterByCategory('all')"
        >
          Tous
        </button>
        <button
          v-for="category in categories"
          :key="category._id"
          class="portfolio__filter"
          :class="{ 'portfolio__filter--active': selectedCategory === category.slug }"
          @click="filterByCategory(category.slug)"
        >
          {{ category.name }}
        </button>
      </nav>

      <div class="portfolio__content">
        <div v-if="isLoading" class="portfolio__loader">
          <div class="spinner"></div>
          <p>Chargement...</p>
        </div>

        <div v-else-if="photos.length === 0" class="portfolio__empty">
          <p>Aucune photo à afficher pour le moment.</p>
        </div>

        <GalleryGrid v-else :photos="photos" :columns="3" />
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
.portfolio {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.portfolio__main {
  flex: 1;
  padding-top: 5rem;
}

.portfolio__header {
  text-align: center;
  padding: 4rem 2rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.portfolio__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin: 0 0 1rem;
  letter-spacing: -1px;
}

.portfolio__subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin: 0;
  opacity: 0.95;
}

.portfolio__filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 2rem;
  flex-wrap: wrap;
}

.portfolio__filter {
  padding: 0.75rem 1.5rem;
  background: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #555;
}

.portfolio__filter:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
}

.portfolio__filter--active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
  color: #fff;
}

.portfolio__content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.portfolio__loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
  color: #666;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f0f0f0;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.portfolio__empty {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .portfolio__header {
    padding: 3rem 1.5rem 1.5rem;
  }

  .portfolio__filters {
    padding: 2rem 1.5rem;
    gap: 0.75rem;
  }

  .portfolio__filter {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }

  .portfolio__content {
    padding: 0 1.5rem 3rem;
  }
}
</style>
