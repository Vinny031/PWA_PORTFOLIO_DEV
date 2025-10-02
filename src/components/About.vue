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
            Passionné par le développement web et la photographie, je combine créativité et
            expertise technique pour créer des expériences digitales uniques et mémorables.
          </p>
          <p>
            Avec une solide expérience en développement Full-Stack, je maîtrise les technologies
            modernes comme React, Vue.js, Node.js et Express pour concevoir des applications
            web performantes et évolutives.
          </p>
          <p>
            Mon approche se concentre sur la qualité du code, l'accessibilité et l'expérience
            utilisateur, tout en gardant un œil artistique grâce à ma passion pour la photographie.
          </p>
        </div>

        <div class="about__cv">
          <div class="about__cv-preview">
            <img src="/assets/CV_DEV.webp" alt="Aperçu du CV" />
          </div>
          <a href="/assets/CV_DEV.pdf" download="CV_Vincent_Fuseau.pdf" class="about__cv-button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
    text-decoration: none;
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
        transform: translateY(3px);
      }
    }

    &:active {
      transform: translateY(-1px);
    }
  }
}
</style>
