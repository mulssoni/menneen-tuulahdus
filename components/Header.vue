<template>
  <header class="header container">
    <div class="header__address">
      <span>Teollisuuskatu 7, Jämsä</span>
      <span class="line"></span>
    </div>
    <div class="header__logo">
      <NuxtLink to="/">
        <img
          src="~/assets/images/menneen-tuulahdus-logo.svg"
          alt="logo"
          width="80"
          height="36"
        />
      </NuxtLink>
    </div>
    <div class="header__menu">
      <Navigation />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: var(--header-height);
  @include breakpoint-down(md) {
    --header-height: calc(60px + 2rem);
  }

  & > * {
    flex: 1;
  }

  &__address {
    display: none;
    @include breakpoint-up(sm) {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      font-family: var(--font-family-accent);
      font-size: 0.85rem;
    }
  }

  &__logo {
    display: flex;
    justify-content: center;
    @include breakpoint-down(sm) {
      justify-content: flex-start;
    }
    img {
      width: 80px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__menu {
    display: flex;
    justify-content: flex-end;
  }
}
.line {
  width: 50px;
  height: 2px;
  background-color: var(--color-primary);
  display: inline-block;
}
</style>
