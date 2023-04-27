<template>
  <section class="contact-form">
    <h2>Varaus</h2>
    <form style="width: 350px" @submit.prevent="submitForm">
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
          <input
            id="fifty-fifty"
            v-model="data.fiftyFifty"
            type="checkbox"
            name="fifty-fifty"
          />
          <label for="fifty-fifty">50-50 palvelu</label>
        </div>
        <div class="dates">
          <div v-if="!data.fiftyFifty" class="input-container">
            <label for="start-date">Alkamispäivä</label>
            <input
              id="start-date"
              v-model="data.startDate"
              type="date"
              name="start-date"
              required
            />
          </div>
          <div v-if="!data.fiftyFifty" class="input-container">
            <label for="end-date">Loppumispäivä</label>
            <input
              id="end-date"
              v-model="data.endDate"
              type="date"
              name="end-date"
              required
            />
          </div>
        </div>
        <button
          class="button--primary"
          type="submit"
          @click.prevent="submitForm"
        >
          Lähetä
        </button>
      </div>
    </form>
  </section>
</template>
<script setup lang="ts">
const data = reactive({
  name: '',
  email: '',
  phone: '',
  city: '',
  fiftyFifty: false,
  startDate: null,
  endDate: null,
})

const submitForm = () => {
  console.log(data)
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
      border: 1px solid var(--color-primary);
      border-radius: 8px;
      background-color: #fff;
      transition: border-color 0.25s ease-out;

      &:checked {
        background-color: var(--color-primary);
      }
    }
  }
}
</style>
