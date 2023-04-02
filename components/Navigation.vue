<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="nav__item"><NuxtLink to="/about">About</NuxtLink></li>
      <li class="nav__item"><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
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
}
</style>
