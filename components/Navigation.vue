<template>
  <nav :class="`nav ${isOpen ? 'open' : ''}`">
    <div class="nav__container">
      <button @click="toggleNav" class="button__toggle-nav button--link">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
      <ul class="nav__list">
        <li class="nav__item"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="nav__item"><NuxtLink to="/about">About</NuxtLink></li>
        <li class="nav__item"><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
const isOpen = ref(false)
const toggleNav = () => {
  isOpen.value = !isOpen.value
}
</script>

<style lang="scss" scoped>
.button__toggle-nav {
  @include breakpoint-up(md) {
    display: none;
  }
  --gap: 0.25rem;
  row-gap: var(--gap);
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease-out;
  .line {
    --size: 2px;
    transition: all 0.25s ease-out;
    width: 30px;
    height: var(--size);
    background-color: var(--color-primary);
    display: block;
  }
}
.nav {
  &__list {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    @include breakpoint-up(md) {
      display: flex;
    }
    align-items: center;
    justify-content: flex-end;
    column-gap: 1.25rem;
  }

  &__item {
    a {
      font-weight: 500;
      color: #000;
      text-decoration: none;
      font-weight: 700;
      text-transform: uppercase;
      transition: all 0.25s ease-out;

      &:hover {
        color: var(--color-primary);
      }
    }
  }
  &.open {
    .button__toggle-nav {
      --gap: 0;
      .line {
        &:nth-child(1) {
          transform: rotate(45deg) translateY(calc(var(--size) + 1px));
          transform-origin: center;
        }
        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-30px);
        }
        &:nth-child(3) {
          transform: rotate(-45deg)
            translateY(calc(var(--size) - (var(--size) * 2 + 1px)));
          transform-origin: center;
        }
      }
    }
  }
}
</style>
