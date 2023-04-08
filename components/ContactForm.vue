<template>
  <form @submit.prevent="submitForm">
    <div class="booking-form">
      <div class="input-container">
        <label for="name">Nimi</label>
        <input v-model="data.name" type="text" id="name" name="name" required />
      </div>
      <div class="input-container">
        <label for="email">Sähköposti</label>
        <input
          v-model="data.email"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div class="input-container">
        <label for="phone">Puhelinnumero</label>
        <input
          v-model="data.phone"
          type="phone"
          id="phone"
          name="phone"
          required
        />
      </div>
      <div class="input-container">
        <label for="city">Kaupunki</label>
        <input v-model="data.city" type="text" id="city" name="city" required />
      </div>
      <div class="input-container checkbox">
        <input
          type="checkbox"
          id="fifty-fifty"
          name="fifty-fifty"
          v-model="data.fiftyFifty"
        />
        <label for="fifty-fifty">50-50 palvelu</label>
      </div>
      <div class="dates">
        <div v-if="!data.fiftyFifty" class="input-container">
          <label for="start-date">Alkamispäivä</label>
          <input
            v-model="data.startDate"
            type="date"
            id="start-date"
            name="start-date"
            required
          />
        </div>
        <div v-if="!data.fiftyFifty" class="input-container">
          <label for="end-date">Loppumispäivä</label>
          <input
            v-model="data.endDate"
            type="date"
            id="end-date"
            name="end-date"
            required
          />
        </div>
      </div>
      <button @click.prevent="submitForm" class="button--primary" type="submit">
        Lähetä
      </button>
    </div>
  </form>
</template>
<script setup>
const TODAY = new Date()
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
      font-size: 1.2rem;
      outline: none;
      border: none;
      border: 1px solid var(--color-primary);
      border-bottom: 5px solid var(--color-primary-600);
      border-radius: 8px;
      background-color: #fff;
      transition: border-color 0.25s ease-out;

      &:focus,
      &:valid {
        border-color: var(--color-primary-700);
      }
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
