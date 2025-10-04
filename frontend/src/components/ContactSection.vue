<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitMessage = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = '';

  // Simulation d'envoi (à remplacer par votre API)
  setTimeout(() => {
    submitMessage.value = 'Message envoyé avec succès !';
    form.value = { name: '', email: '', message: '' };
    isSubmitting.value = false;

    setTimeout(() => {
      submitMessage.value = '';
    }, 3000);
  }, 1000);
};
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__container">
      <h2 class="contact__title">Contact</h2>
      <p class="contact__subtitle">Une question ? Un projet ? N'hésitez pas à me contacter.</p>

      <form @submit.prevent="handleSubmit" class="contact__form">
        <div class="contact__field">
          <label for="name" class="contact__label">Nom</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="contact__input"
            required
            aria-required="true"
          />
        </div>

        <div class="contact__field">
          <label for="email" class="contact__label">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="contact__input"
            required
            aria-required="true"
          />
        </div>

        <div class="contact__field">
          <label for="message" class="contact__label">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            class="contact__textarea"
            rows="5"
            required
            aria-required="true"
          ></textarea>
        </div>

        <button
          type="submit"
          class="contact__submit"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Envoi...' : 'Envoyer' }}
        </button>

        <p v-if="submitMessage" class="contact__message" role="status">
          {{ submitMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 2rem;
  background: #fff;
}

.contact__container {
  max-width: 700px;
  margin: 0 auto;
}

.contact__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin: 0 0 1rem;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.contact__subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin: 0 0 3rem;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact__label {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.95rem;
}

.contact__input,
.contact__textarea {
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #fafafa;
}

.contact__input:focus,
.contact__textarea:focus {
  outline: none;
  border-color: #667eea;
  background: #fff;
}

.contact__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact__submit {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.contact__submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.contact__submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact__message {
  text-align: center;
  color: #28a745;
  font-weight: 600;
  margin: 1rem 0 0;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1.5rem;
  }
}
</style>
