<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Photo } from '../types';

const props = defineProps<{
  photos: Photo[];
  columns?: number;
}>();

const loadedImages = ref<Set<string>>(new Set());

const columns = computed(() => props.columns || 3);

const handleImageLoad = (photoId: string) => {
  loadedImages.value.add(photoId);
};
</script>

<template>
  <div class="gallery" :style="{ '--columns': columns }">
    <article
      v-for="photo in photos"
      :key="photo._id"
      class="gallery__item"
      :class="{ 'gallery__item--loaded': loadedImages.has(photo._id) }"
    >
      <div class="gallery__image-wrapper">
        <img
          :src="photo.imageUrl"
          :alt="photo.alt"
          class="gallery__image"
          loading="lazy"
          @load="handleImageLoad(photo._id)"
        />
        <div class="gallery__overlay">
          <h3 class="gallery__title">{{ photo.title }}</h3>
          <p v-if="photo.description" class="gallery__description">{{ photo.description }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 2rem;
  padding: 2rem 0;
}

.gallery__item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.gallery__item--loaded {
  opacity: 1;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gallery__image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4/5;
  background: #f0f0f0;
  cursor: pointer;
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery__image-wrapper:hover .gallery__image {
  transform: scale(1.05);
}

.gallery__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem 1.5rem 1.5rem;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery__image-wrapper:hover .gallery__overlay {
  opacity: 1;
}

.gallery__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.gallery__description {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.9;
  line-height: 1.4;
}

@media (max-width: 968px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .gallery {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
