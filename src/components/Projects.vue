<template>
  <section class="projects" id="projects">
    <div class="projects__container">
      <div class="projects__header">
        <h2 class="projects__title">Mes Projets</h2>
        <div class="projects__divider"></div>
        <p class="projects__subtitle">
          Découvrez une sélection de mes réalisations récentes
        </p>
      </div>

      <div class="projects__filters">
        <button
          v-for="filter in filters"
          :key="filter"
          class="projects__filter"
          :class="{ 'projects__filter--active': activeFilter === filter }"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="projects__grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-card__image">
            <img :src="project.image" :alt="project.title" loading="lazy" />
            <div class="project-card__overlay">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="project-card__link"
                :aria-label="`Voir la démo de ${project.title}`"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-card__link"
                :aria-label="`Voir le code source de ${project.title} sur GitHub`"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="project-card__content">
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__description">{{ project.description }}</p>
            <div class="project-card__tags">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="project-card__tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const activeFilter = ref('Tous')
const filters = ref(['Tous'])
const projects = ref([])

// Charger les projets depuis le fichier JSON
onMounted(async () => {
  try {
    const response = await fetch('/data/projects.json')
    const data = await response.json()

    // Transformer les données pour correspondre au format du composant
    projects.value = data.projects.map(project => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.images && project.images[0] ? project.images[0] : '/assets/icon/data.webp',
      technologies: project.tags || [],
      category: getCategoryFromTypes(project.types),
      demo: project.url,
      github: project.url.includes('github.com') ? project.url : null,
      year: project.year
    }))

    // Extraire les catégories uniques pour les filtres
    const categories = new Set(['Tous'])
    projects.value.forEach(project => {
      if (project.category) {
        categories.add(project.category)
      }
    })
    filters.value = Array.from(categories)
  } catch (error) {
    console.error('Erreur lors du chargement des projets:', error)
  }
})

// Fonction pour déterminer la catégorie basée sur les types
const getCategoryFromTypes = (types) => {
  if (!types) return 'Web'

  const typeString = types.join(' ').toUpperCase()

  if (typeString.includes('BACK-END')) return 'Backend'
  if (typeString.includes('FRONT-END')) return 'Frontend'
  if (typeString.includes('REACT') || typeString.includes('VUE')) return 'Frontend'

  return 'Web'
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})
</script>

<style lang="scss" scoped>


.projects {
  padding: 5rem 0;
  background-color: #e8e8e8;

  @media (min-width: 768px) {
    padding: 7rem 0;
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

  &__header {
    text-align: center;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      margin-bottom: 4rem;
    }
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3rem);
    color: #222222;
    margin-bottom: 1rem;
  }

  &__divider {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4a90e2, lighten(#4a90e2, 15%));
    margin: 0 auto 1.5rem;
    border-radius: 2px;
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.125rem);
    color: lighten(#222222, 20%);
  }

  &__filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  &__filter {
    padding: 0.625rem 1.5rem;
    border: 2px solid #999999;
    border-radius: 25px;
    background-color: white;
    color: #111111;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: #3875c7;
      color: #3875c7;
      background-color: #f0f7ff;
    }

    &--active {
      background-color: #3875c7;
      border-color: #3875c7;
      color: white;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }
  }
}

.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

    .project-card__image img {
      transform: scale(1.08);
    }

    .project-card__overlay {
      opacity: 1;
    }
  }

  &__image {
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    @media (min-width: 768px) {
      height: 320px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    opacity: 0;
    transition: opacity 0.4s ease;
    backdrop-filter: blur(4px);
  }

  &__link {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    color: #667eea;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    svg {
      width: 26px;
      height: 26px;
    }

    &:hover {
      background: #222222;
      color: white;
      transform: scale(1.15) rotate(5deg);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  }

  &__content {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      padding: 2.5rem;
    }
  }

  &__title {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    color: #222222;
    margin-bottom: 1rem;
    font-weight: 700;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__description {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    color: #555555;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: auto;
  }

  &__tag {
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
    color: #667eea;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid rgba(102, 126, 234, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      transform: translateY(-2px);
      border-color: transparent;
    }
  }
}
</style>
