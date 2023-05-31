<template>
  <div class="pricing">
    <h2 class="text-center">Hinnasto</h2>
    <span class="text-center">Kuusi vuorokautta</span>
    <div style="display: flex; flex-direction: column; row-gap: 1.5rem">
      <ul class="price-list">
        <li v-for="item in items" :key="item.name" class="price-list__item">
          <span>
            <nuxt-img :src="`/icons/${item.icon}.svg`" :alt="item.name" />
          </span>
          <span>{{ item.name }}</span>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <div>
        <h2 class="text-center">Sisältää</h2>
        <ul class="includes-list">
          <li v-for="item in includes" :key="item" class="includes-list__item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
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
  'Arvoikkaiden tuotteiden säilytys kassalla tai vitriinissä*',
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
  flex: 1;
  @include breakpoint-down(md) {
    align-items: center;
  }

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
    padding: 0.5rem 0;
    column-gap: 1.5rem;

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
  justify-content: flex-start;
  &__item {
    @extend .price-list__item;
    min-width: auto;
    border-radius: 18px;
    padding: 0.85rem 1.25rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #ebe9df;
  }
}

@include breakpoint-down(md) {
  h2 {
    text-align: center;
  }
}
</style>
