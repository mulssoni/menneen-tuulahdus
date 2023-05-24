<template>
  <nav :class="`nav ${isOpen ? 'open' : ''}`">
    <button
      class="button__toggle-nav button--link"
      role="button"
      aria-label="Toggle navigation"
      @click="toggleNav"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
    <div class="nav__container">
      <menu class="nav__list">
        <li
          v-for="item in navItems"
          :key="item.name"
          class="nav__item"
          @click="closeNav"
        >
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </li>
      </menu>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { navItems } from '@/utils/constants'

const isOpen = ref(false)
const toggleNav = () => {
  isOpen.value = !isOpen.value
}
const closeNav = () => {
  isOpen.value = false
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
  position: relative;
  z-index: 20;
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

      &.router-link-exact-active {
        color: var(--color-primary-600);
      }

      &:hover {
        color: var(--color-primary-700);
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
    .nav {
      &__container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(5px);
        z-index: 10;
      }
      &__list {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        font-size: 2rem;
      }
    }
  }
}
</style>
