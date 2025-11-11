<template>
  <section class="skills" id="skills">
    <div class="skills__container">
      <div class="skills__header">
        <h2 class="skills__title">Mes Compétences</h2>
        <div class="skills__divider"></div>
      </div>

      <div class="skills__grid">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="skill-card"
        >
          <div class="skill-card__icon">
            <font-awesome-icon :icon="skill.icon" />
          </div>
          <h3 class="skill-card__name">{{ skill.name }}</h3>
          <p class="skill-card__description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const skills = reactive([
  {
    id: 1,
    name: 'HTML',
    icon: ['fab', 'html5'],
    description: 'Structure sémantique et accessible'
  },
  {
    id: 2,
    name: 'CSS',
    icon: ['fab', 'css3-alt'],
    description: 'Design responsive et animations'
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: ['fab', 'js'],
    description: 'ES6+ et programmation moderne'
  },
  {
    id: 4,
    name: 'React',
    icon: ['fab', 'react'],
    description: 'Interfaces dynamiques et performantes'
  },
  {
    id: 5,
    name: 'Node.js',
    icon: ['fab', 'node-js'],
    description: 'Backend scalable et APIs REST'
  },
  {
    id: 6,
    name: 'Express',
    icon: ['fas', 'server'],
    description: 'Framework backend robuste'
  },
  {
    id: 7,
    name: 'Database',
    icon: ['fas', 'database'],
    description: 'SQL et NoSQL (MongoDB, PostgreSQL)'
  },
  {
    id: 8,
    name: 'API',
    icon: ['fas', 'code'],
    description: 'RESTful et GraphQL'
  },
  {
    id: 9,
    name: 'Figma',
    icon: ['fab', 'figma'],
    description: 'Design UI/UX et prototypage'
  },
  {
    id: 10,
    name: 'Git',
    icon: ['fab', 'github'],
    description: 'Contrôle de version et collaboration'
  },
  {
    id: 11,
    name: 'VS Code',
    icon: ['fas', 'code'],
    description: 'Environnement de développement'
  },
  {
    id: 12,
    name: 'Trello',
    icon: ['fab', 'trello'],
    description: 'Gestion de projet agile'
  }
])
</script>

<style lang="scss" scoped>


.skills {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

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
    margin: 0 auto;
    border-radius: 2px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;

    @media (min-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}

.skill-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    padding: 2rem 1.25rem;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

    .skill-card__icon {
      background: linear-gradient(135deg, rgba(74, 144, 226, 0.2), rgba(74, 144, 226, 0.1));

      svg {
        transform: scale(1.1) rotate(5deg);
        color: #667eea;
      }
    }
  }

  &__icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(74, 144, 226, 0.05));
    padding: 0.75rem;

    @media (min-width: 768px) {
      width: 70px;
      height: 70px;
    }

    svg {
      width: 100%;
      height: 100%;
      color: #4a90e2;
      transition: all 0.3s ease;
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
    }
  }

  &__name {
    font-size: clamp(0.875rem, 2vw, 1.125rem);
    font-weight: 700;
    color: #222222;
    margin: 0;
  }

  &__description {
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
    color: lighten(#222222, 20%);
    line-height: 1.4;
    margin: 0;
  }
}
</style>
