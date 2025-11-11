<template>
  <section class="contact" id="contact">
    <div class="contact__container">
      <div class="contact__header">
        <h2 class="contact__title">Contactez-moi</h2>
        <div class="contact__divider"></div>
        <p class="contact__subtitle">
          Une question ? Un projet ? N'hésitez pas à me contacter
        </p>
      </div>

      <div class="contact__content">
        <form class="contact__form" @submit.prevent="handleSubmit">
          <div class="contact__form-group">
            <label for="name">Nom complet</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Votre nom"
              required
            />
          </div>

          <div class="contact__form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div class="contact__form-group">
            <label for="subject">Sujet</label>
            <input
              id="subject"
              v-model="formData.subject"
              type="text"
              placeholder="Sujet de votre message"
              required
            />
          </div>

          <div class="contact__form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Votre message..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn--primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
          </button>

          <p v-if="submitMessage" class="contact__message" :class="submitMessageClass">
            {{ submitMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageClass = ref('')

// Configuration EmailJS
const EMAILJS_SERVICE_ID = 'service_kcwbjmd'
const EMAILJS_TEMPLATE_ID = 'template_excnu77'
const EMAILJS_PUBLIC_KEY = 'UGHvjOzTeBi97IoDi'

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Paramètres du template EmailJS
    const templateParams = {
      to_email: 'vincent.fuseau@hotmail.fr',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    }

    // Envoi de l'email via EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    submitMessage.value = 'Message envoyé avec succès ! Je vous répondrai bientôt.'
    submitMessageClass.value = 'contact__message--success'

    // Réinitialiser le formulaire
    Object.keys(formData).forEach(key => formData[key] = '')
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    submitMessage.value = 'Une erreur est survenue. Veuillez réessayer.'
    submitMessageClass.value = 'contact__message--error'
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>


.contact {
  padding: 5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #f5f5f5;

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
    color: #f5f5f5;
    margin-bottom: 1rem;
  }

  &__divider {
    width: 80px;
    height: 4px;
    background: rgba(255, 255, 255, 0.8);
    margin: 0 auto 1.5rem;
    border-radius: 2px;
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.125rem);
    opacity: 0.9;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    @media (min-width: 768px) {
      padding: 0 2rem;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__info-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-3px);
    }

    h3 {
      font-size: 1.125rem;
      margin: 1rem 0 0.5rem;
      font-weight: 600;
    }

    a, p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: white;
      }
    }
  }

  &__info-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;

    svg {
      width: 24px;
      height: 24px;
      color: white;
    }
  }

  &__social {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  &__social-link {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    transition: all 0.3s ease;
    padding: 0.75rem;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-3px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }
  }

  &__form {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 600px;

    @media (min-width: 768px) {
      padding: 3rem;
    }
  }

  &__form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      color: #222222;
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.875rem 1rem;
      border: 2px solid #d0d0d0;
      border-radius: 8px;
      font-size: 1rem;
      color: #222222;
      transition: all 0.3s ease;
      font-family: inherit;

      &:focus {
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
      }

      &::placeholder {
        color: lighten(#222222, 50%);
      }
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }
  }

  .btn {
    width: 100%;
    border: none;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  &__message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;

    &--success {
      background: rgba(76, 175, 80, 0.1);
      color: #2e7d32;
    }

    &--error {
      background: rgba(244, 67, 54, 0.1);
      color: #c62828;
    }
  }
}
</style>
