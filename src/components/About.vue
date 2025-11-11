<template>
  <section class="about" id="about">
    <div class="about__container">
      <div class="about__header">
        <h2 class="about__title">À propos de moi</h2>
        <div class="about__divider"></div>
      </div>

      <div class="about__content">
        <div class="about__text">
          <p>
            Je suis actuellement en fin de formation RNCP Niveau 5 en développement web chez OpenClassrooms, et je poursuis mon apprentissage avec une formation en RNCP Niveau 6 en développement d'application JavaScript React.
          </p>
          <p>
            Fort d'un parcours diversifié en gestion forestière, soins, j'ai su développer une forte capacité d'adaptation et de résilience.
            Mon objectif est de Renforcer mes compétences en développement web, API et gestion de bases de données et Contribuer à des projets concrets et innovants.
          </p>
          <p>
            Passionné par l'apprentissage et la résolution de problèmes, je recherche une alternance qui me permettra de Mettre en pratique mes connaissances et évoluer techniquement.
            Mon expérience dans des secteurs variés m'a permis de développer Rigueur organisationnelle et Communication fluide, atouts précieux dans mon évolution en tant que développeur.
          </p>
        </div>

        <div class="about__cv">
          <div class="about__cv-preview" @click="openCVModal">
            <img src="/assets/CV_DEV.webp" alt="Aperçu du CV" loading="lazy" width="349" height="494" />
          </div>
          <button @click="openCVModal" class="about__cv-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Voir mon CV
          </button>
        </div>
      </div>
    </div>

    <!-- Modal CV -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isCVModalOpen" class="cv-modal" @click="closeCVModal">
          <div class="cv-modal__content" @click.stop>
            <button class="cv-modal__close" @click="closeCVModal" aria-label="Fermer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <iframe :src="cvPdfUrl" class="cv-modal__iframe" title="CV Vincent Fuseau"></iframe>
            <a :href="cvPdfUrl" download="CV_Vincent_Fuseau.pdf" class="cv-modal__download">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger
            </a>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isCVModalOpen = ref(false)
const cvPdfUrl = '/assets/CV_DEV.pdf'

const openCVModal = () => {
  isCVModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeCVModal = () => {
  isCVModalOpen.value = false
  document.body.style.overflow = ''
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && isCVModalOpen.value) {
    closeCVModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>


.about {
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
    margin: 0 auto;
    border-radius: 2px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }

  &__text {
    p {
      font-size: clamp(1rem, 2vw, 1.125rem);
      line-height: 1.8;
      color: lighten(#222222, 10%);
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__cv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  &__cv-preview {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      display: block;
    }
  }

  &__cv-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      width: 24px;
      height: 24px;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);

      svg {
        transform: scale(1.1);
      }
    }

    &:active {
      transform: translateY(-1px);
    }
  }
}

// Modal CV styles
.cv-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  &__content {
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 90vh;
    background: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  &__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.9);
      transform: rotate(90deg);
    }
  }

  &__iframe {
    width: 100%;
    flex: 1;
    border: none;
    border-radius: 12px 12px 0 0;
  }

  &__download {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 0 0 12px 12px;
    transition: all 0.3s ease;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: linear-gradient(135deg, #5568d3 0%, #653a8b 100%);
    }
  }
}

// Animations de transition
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .cv-modal__content,
.modal-leave-active .cv-modal__content {
  transition: transform 0.3s ease;
}

.modal-enter-from .cv-modal__content,
.modal-leave-to .cv-modal__content {
  transform: scale(0.9);
}

</style>
