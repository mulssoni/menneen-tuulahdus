<template>
  <div class="hero">
    <div class="hero__container container">
      <div class="hero__content">
        <h1 class="hero__title">Menneen tuulahdus</h1>
        <p class="hero__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem quidem voluptatum quas quos. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem quidem voluptatum quas quos. Quisquam, quae.
        </p>
        <div class="hero__buttons">
          <button class="button--primary">Hae pöytää</button>
        </div>
      </div>
      <div class="hero__image">
        <img
          src="https://images.ctfassets.net/yy7h14vfudc9/2KJ1OgyJXLUr3zIXczFaOb/003e2429954cbe8b5ab4158b903094bb/Dec_RPO_Email_Brochure_Tile_13861-S.png"
          alt="placeholder"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  --content-padding: 5rem 0;
  background-image: url('~/assets/images/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  &__container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    column-gap: 10%;
    padding: var(--content-padding);
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 5%;
  }

  &__title {
    font-size: 3rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 2rem;
  }

  &__text {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }

  &__image {
    flex: 1;
    height: 100%;

    img {
      width: 100%;
      min-height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__buttons {
    margin: 2rem 0;
  }
}
</style>
