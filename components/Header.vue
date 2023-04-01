<template>
  <header class="header container">
    <div class="header__address">
      <span>Teollisuuskatu 7, Jämsä</span>
      <span class="line"></span>
    </div>
    <div class="header__logo">
      <img src="~/assets/images/menneen-tuulahdus-logo.svg" alt="logo" />
    </div>
    <div class="header__menu">
      <Navigation />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &__address {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    font-family: var(--font-family-accent);
    font-size: 0.85rem;
  }

  &__logo {
    img {
      width: 80px;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.line {
  width: 50px;
  height: 2px;
  background-color: var(--color-primary);
  display: inline-block;
}
</style>
