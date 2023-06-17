<template>
  <div class="contact-form" name="yhteydenotto">
    <h2>Varaus</h2>
    <form
      name="Varaus"
      style="width: 350px"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit="submitForm"
    >
      <input type="hidden" name="form-name" value="Varaus" data-remove-prefix />
      <p style="display: none">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="subject" value="Varaus" />
      <div class="booking-form">
        <div class="input-container">
          <label for="name">Nimi</label>
          <input
            id="name"
            v-model="data.name"
            type="text"
            name="name"
            required
          />
        </div>
        <div class="input-container">
          <label for="email">Sähköposti</label>
          <input
            id="email"
            v-model="data.email"
            type="email"
            name="email"
            required
          />
        </div>
        <div class="input-container">
          <label for="phone">Puhelinnumero</label>
          <input
            id="phone"
            v-model="data.phone"
            type="phone"
            name="phone"
            required
          />
        </div>
        <div class="input-container">
          <label for="city">Kaupunki</label>
          <input
            id="city"
            v-model="data.city"
            type="text"
            name="city"
            required
          />
        </div>
        <div class="input-container checkbox">
          <input id="fifty" v-model="data.fifty" type="checkbox" name="fifty" />
          <label for="fifty"
            >50/50 palvelu
            <NuxtLink to="#fifty-fifty-service">
              <img
                src="/icons/circle-question.svg"
                alt="Kysymysmerkki"
                class="icon"
                style="margin-left: 0.5rem"
              />
            </NuxtLink>
          </label>
        </div>
        <div class="dates">
          <div v-if="!data.fifty" class="input-container">
            <label for="startdate">Alkamispäivä</label>
            <input
              id="startdate"
              v-model="data.startdate"
              type="date"
              name="startdate"
              required
            />
          </div>
          <div v-if="!data.fifty" class="input-container">
            <label for="enddate">Loppumispäivä</label>
            <input
              id="enddate"
              v-model="data.enddate"
              type="date"
              name="enddate"
              required
            />
            <span
              class="notification"
              style="font-size: 0.85rem; padding: 1.5em 2em"
            >
              Valitsemasi varausajankohta on <b>alustava</b>. Vahvistamme teille
              pöydän saatavuuden sähköpostitse tai puhelimitse.
            </span>
          </div>
        </div>
        <button
          :class="isSuccess ? 'button--success' : 'button--accent'"
          type="submit"
        >
          {{
            isSubmitting ? 'Lähetetään' : isSuccess ? 'Lähetetty 😊' : 'Lähetä'
          }}
        </button>
        <div v-if="error" class="notification">
          {{ error }}
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { addDays, format } from 'date-fns'
const toISODate = (date: Date) => date.toISOString().split('T')[0]

const TODAY = new Date()
const SIX_DAYS_FROM_TODAY = addDays(TODAY, 6)

const isSubmitting = ref(false)
const isSuccess = ref(false)
const error = ref('')
const initData = {
  name: '',
  email: '',
  phone: '',
  city: '',
  fifty: false,
  startdate: toISODate(TODAY),
  enddate: toISODate(SIX_DAYS_FROM_TODAY),
}
const data = ref({ ...initData })

const resetForm = () => {
  data.value = { ...initData }
}

const submitForm = async (e: {
  stopPropagation: () => void
  preventDefault: () => void
}): Promise<void> => {
  e.stopPropagation()
  e.preventDefault()

  const submitData = {
    ...data.value,
    subject: `Varaus - ${data.value.name}`,
    fifty: data.value.fifty ? 'Kyllä' : 'Ei',
    startdate: !data.value.fifty
      ? format(new Date(data.value.startdate), 'dd.MM.yyyy')
      : '',
    enddate: !data.value.fifty
      ? format(new Date(data.value.enddate), 'dd.MM.yyyy')
      : '',
  }

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&')
  }

  try {
    error.value = ''
    isSubmitting.value = false
    isSubmitting.value = true

    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'Varaus',
        ...submitData,
      }),
    })
    if (!res.ok) {
      throw new Error('Varauksen lähetys epäonnistui')
    }
    isSuccess.value = true
    resetForm()
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    isSubmitting.value = false
  }
}
</script>
<style lang="scss" scoped>
.contact-form > h2 {
  font-size: 2rem;
  @include breakpoint-down(sm) {
    text-align: center;
  }
}
.booking-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.5rem;

  .dates {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;

    &.checkbox {
      flex-direction: row;
      align-items: center;
    }
    label {
      font-size: 1rem;
      margin-left: 6px;
    }
    input[type='text'],
    input[type='email'],
    input[type='date'],
    input[type='phone'] {
      width: 100%;
      padding: 0.85rem;
      font-size: 1rem;
      outline: none;
      border: none;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      background-color: #fff;
      transition: border-color 0.25s ease-out;

      /* &:focus,
      &:valid {
        border-color: var(--color-primary);
      } */
    }
    input[type='checkbox'] {
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid var(--color-accent);
      border-radius: 8px;
      background-color: #fff;
      transition: border-color 0.25s ease-out;

      &:checked {
        background-color: var(--color-accent);
      }
    }
  }
}
</style>
