<template>
  <section class="pricing">
    <h2>Hinnasto</h2>
    <span>Kuusi vuorokautta</span>
    <div style="display: flex; flex-direction: column; align-items: center">
      <ul class="price-list">
        <li v-for="item in items" :key="item.name" class="price-list__item">
          <span><img :src="`/icons/${item.icon}.svg`" :alt="item.name" /></span>
          <span>{{ item.name }}</span>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <div class="text-center">
        <h2>Sisältää</h2>
        <ul class="includes-list">
          <li v-for="item in includes" :key="item" class="includes-list__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const items = [
  {
    name: 'Pöytä ja rekki',
    price: '32 €',
    icon: 'circle',
  },
  {
    name: 'Lisäpäivä',
    price: '5,30 €',
    icon: 'calendar-plus',
  },
  {
    name: 'Siivouspalvelu',
    price: '1 € / pv',
    icon: 'broom',
  },
  {
    name: 'Paperiarkki',
    price: '0,3 € / kpl',
    icon: 'tag',
  },
  {
    name: 'Tarra-arkki',
    price: '0,6 € / kpl',
    icon: 'note-sticky',
  },
  {
    name: '50 / 50 Palvelu',
    price: '50 % myyntiprovisio',
    icon: 'percent',
  },
]
const includes = [
  'Hälyttimet',
  '3 paperiarkkia',
  'Henkarit',
  'Arvokkaampien tuotteiden säilytys kassalla tai vitriinissä (max. 2 kpl / asiakas)',
]
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  list-style: none;
}

.pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }
}

.price-list {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 1rem;
    column-gap: 1.5rem;
    min-width: 375px;

    & > span {
      &:nth-child(3) {
        margin-left: 2rem;
        flex: 1;
        font-weight: 600;
        text-align: right;
      }
    }
    img {
      color: var(--color-primary);
      height: 1.25rem;
      width: 1.25rem;
    }
  }
}
.includes-list {
  @extend .price-list;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 400px;
  &__item {
    @extend .price-list__item;
    min-width: auto;
    border-radius: 18px;
    background-color: var(--color-primary);
  }
}
</style>
